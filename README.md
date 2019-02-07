# format-json

Quick tool that formats and displays the JSON.

## Install with Node.js Dependency

```
npm install -g git+https://github.com/claude-abounegm/format-json.git
```

## Install without Node Dependency

```bash
curl -s https://raw.githubusercontent.com/claude-abounegm/format-json/master/install.sh | bash -
```

## Usage

```bash
# Read from File
format-json file.json

# Read from STDIN #1
cat file.json | format-json -

# Read from STDIN #2
format-json - < file.json
```