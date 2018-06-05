# protoc

## Installation

`mkdir src && cd src`

`wget https://github.com/google/protobuf/releases/download/v3.5.1/protoc-3.5.1-osx-x86_64.zip`

`unzip protoc-3.5.1-osx-x86_64.zip`

`cp bin/protoc /usr/local/bin/`

## Usage

We'll use existing `protos` folder as output folder

`protoc --js_out=import_style=commonjs,binary:. protos/*.proto`