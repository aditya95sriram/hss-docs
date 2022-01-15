import React from "react";

const gifserver_baseurl = "https://jugglinglab.org/anim?redirect=true";

export default function Gif( {pattern, children} ) {
  const pattern_params = `pattern=${pattern};${children}`;
  const gifurl = `${gifserver_baseurl};${pattern_params}`;
  return (
    <img src={gifurl} alt={`gif for ${pattern_params}`}/>
  );
}