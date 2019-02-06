#!/bin/bash

file="/usr/local/bin/format-json"
curl -so "$file" "https://raw.githubusercontent.com/claude-abounegm/format-json/master/build/format-json"
chmod +x "$file"