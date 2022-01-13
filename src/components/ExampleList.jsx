import React from "react";
import Example from "./Example";

export default function ExampleList( { examples, addTag } ) {
  return (
    <ul>
      { examples.map( example =>
        <Example key={example.id} data={example} addTag={addTag}/>
      ) }
    </ul>
  )
}