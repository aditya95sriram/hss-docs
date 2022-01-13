#!/bin/bash

url="https://api.airtable.com/v0/appWexXO274nJJtSi/examples"
header="Authorization: Bearer $AIRTABLE_API_KEY"
outfile=static/hss-examples.json

curl -H "$header" $url | python -m json.tool > $outfile