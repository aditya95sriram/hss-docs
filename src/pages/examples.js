import React, { useState, useRef } from "react";
import Layout from '@theme/Layout';
import ExampleList from "../components/ExampleList";
import { records } from '/sample.json';


// discard random unique id and created time attributes
const all_examples = records.map( record => record.fields );

// populate all optional fields with default values
for (let example of all_examples) {
    if (!("tags" in example)) example.tags = [];
    if (!("title" in example)) example.title = "";
    if (!("manual_settings" in example)) example.manual_settings = "";
    if (!("alternate_notations" in example)) example.alternate_notations = "";
}

// compute set of all tags
const all_tags = [];
for (let example of all_examples) {
    for (let tag of example.tags) {
        if (!all_tags.includes(tag))
            all_tags.push(tag);
    }
}

export default function Examples() {
    const [examples, setExamples] = useState(all_examples);
    const search_str = useRef();

    function getCurrentTerms() {
        return search_str.current.value.split(/,| /g).filter(s => s.trim());
    }

    function handleSearch() {
        const terms = getCurrentTerms();
        console.log("searching", terms);
        let filtered = all_examples;
        for (let term of terms) {
            if (term.trim() && all_tags.includes(term))
                filtered = filtered.filter(example => example.tags.includes(term));
        }
        setExamples(filtered);
    }

    // todo: move inside Tag.jsx and pass through only search_str (as search_box/search_ref)
    function addTag(tag) {
        const terms = getCurrentTerms();
        const input = search_str.current;
        let new_terms;
        if (terms.includes(tag)) {  // tag already in search string, toggle off
            new_terms = terms.filter(term => term != tag);
        } else {  // new tag, add it in
            new_terms = terms.concat(tag);
        }
        input.value = new_terms.join(", ");
        handleSearch();
    }

    return (
        <Layout title="examples">

        <input type="search" ref={search_str} onChange={handleSearch} placeholder="easy, duo"/>

        <ExampleList examples={examples} addTag={addTag}/>

        <p> { examples.length } examples </p>
        </Layout>
    )
}
