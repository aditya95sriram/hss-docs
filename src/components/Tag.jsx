import React from "react";

export default function Tag( { tag, addTag } ) {

  return <button
          className="button button--secondary
                     margin--xs padding--xs padding-horiz--sm"
          onClick={() => addTag(tag)}>
            {tag}
         </button>;
}