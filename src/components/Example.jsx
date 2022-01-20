import React from "react";
import Tag from "./Tag";
import Gif from "./Gif";

export default function Example( { data, addTag } ) {
  return (
    <div className="card col col--2">
      <div className="card__image">
        <Gif pattern={data.pattern}>
          {`hss=${data.hss};${data.manual_settings}`}
        </Gif>
      </div>
      <div className="card__header">
        <h4>Pattern <code>{data.pattern}</code> /
            HSS <code>{data.hss}</code></h4>
      </div>
      <div className="card__body">
        <h5>Alternate:</h5>{data.alternate_notations}
      </div>
      <div className="card__footer">
        <div className="row">
          {data.tags.map( tag =>
            <Tag key={tag} tag={tag} addTag={addTag}/>
          )}
        </div>
      </div>
    </div>
  );
}