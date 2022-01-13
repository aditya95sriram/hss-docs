import React from "react";

export default function Tag( { tag, addTag } ) {

  return <kbd className="tag" onClick={() => addTag(tag)}>{tag}</kbd>;
}