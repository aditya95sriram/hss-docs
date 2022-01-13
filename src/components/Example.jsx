import React from "react";
import Tag from "./Tag";

export default function Example( { data, addTag } ) {
  return (
    <li>
      pattern is { data.pattern } / hss is { data.hss } [
        {data.tags.map( tag =>
          <Tag key={tag} tag={tag} addTag={addTag}/>
        )}
      ]
    </li>
  );
}