Select fields from array with filter:

`echo '[{"a": 1, "b": 2}, {"a": 1, "b": 3}, {"a": 3, "b": 4}]' | jq '.[] | select(.a == 1) | .b'`

