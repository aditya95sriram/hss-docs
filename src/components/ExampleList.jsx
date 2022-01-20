import React from "react";
import Example from "./Example";

export default function ExampleList( { examples, addTag } ) {
  return (
    <div className="row">
      { examples.map( example =>
        <Example key={example.id} data={example} addTag={addTag}/>
      ) }
    </div>
  )
}