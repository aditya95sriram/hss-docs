#!/usr/bin/python3

import xml.etree.ElementTree as ET
import json
import hashlib  # to generate compact ids


OUTFILE = "static/sample.json"
INDIR = "static/patterns"
PATTERN_XPATH = "./patternlist/line[@notation='siteswap']"
SETTING_SEP = ";"
KEY_VAL_SEP = "="


def strip_all(iterable):
    return [s.strip() for s in iterable]


def clean_strings(iterable):
    return [e for e in strip_all(iterable) if e]


def get_id(example):
    if "manual_settings" in example:
        # to prevent mutation to outside variable
        example = example.copy()

        # remove all newlines and spaces in manual settings
        settings = example["manual_settings"]
        settings = settings.replace("\n", "").replace(" ", "")
        example["manual_settings"] = settings

    serialized = json.dumps(example, sort_keys=True)
    hasher = hashlib.md5()
    hasher.update(serialized.encode('utf-8'))
    return hasher.hexdigest()


def parse_jml_line(line: ET.Element):
    pattern = dict()
    pattern['display'] = line.get('display', "")
    settings = line.text.split(SETTING_SEP)
    for setting in clean_strings(settings):
        key, value = strip_all(setting.split(KEY_VAL_SEP))
        pattern[key] = value
    return pattern


def parse_jml_file(fname: str):
    tree = ET.parse(fname)
    patterns = list(map(parse_jml_line, tree.findall(PATTERN_XPATH)))
    return patterns


def parse_example(entry: dict):
    entry = entry.copy()
    pattern = entry.pop("pattern")
    # todo: force hss, or take 2 as default?
    hss = entry.pop("hss")
    tags = clean_strings(entry.pop("tags", "").split(","))

    if "title" in entry:
        title = entry.pop("title")
        del entry["display"]
    elif "display" in entry:
        title = entry.pop("display")
    else:
        title = ""

    example = dict(pattern=pattern, hss=hss)
    if tags: example["tags"] = tags
    if title: example["title"] = title

    if entry:  # remaining settings into manual settings
        manual_settings = "\n".join(f"{key}{KEY_VAL_SEP}{value}{SETTING_SEP}"
                                    for key, value in entry.items())
        example["manual_settings"] = manual_settings

    example["id"] = get_id(example)
    return example


def construct_json(examples: list):
    examples = map(parse_example, examples)
    records = [dict(id=example["id"], fields=example) for example in examples]
    return {"records": records}


def write_json_file(json_data: dict, fname: str):
    with open(fname, 'w') as json_file:
        json_file.write(json.dumps(json_data, indent=2))


if __name__ == "__main__":
    patterns = parse_jml_file("static/sample.jml")
    print("found", len(patterns), "patterns in jml file")
    json_data = construct_json(patterns)
    write_json_file(json_data, OUTFILE)
    print(f"output written to {OUTFILE}")
