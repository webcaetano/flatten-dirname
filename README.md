# flatten-dirname

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
<!-- [![Test coverage][coveralls-image]][coveralls-url] -->

> Flatten files to from relative folders. But keep dirname on filename.

## Installation

```
npm install flatten-dirname --save
```

## Usage

```
fdname(glob,dest,options,callback)
```

## Example 

```javascript
var fdname = require('flatten-dirname');


fdname('**/*.png','./destFolder',function(){

});


// this
// heroes/lulu/hit/001.png
// heroes/lulu/hit/002.png
// heroes/janna/walk/001.png

// return
// destFolder/heroes_$_lulu_$_hit_$_001.png
// destFolder/heroes_$_lulu_$_hit_$_002.png
// destFolder/heroes_$_janna_$_walk_$_001.png


// or
fdname(['**/*.png'],'./destFolder',{split:'@'},function(){

});

// with all options
fdname(['**/*.png'],'./destFolder',{split:'@'},function(err,data){

});
```

## Options


<table>
<tr>
<td><strong>Option</strong></td>
<td width="300"><strong>Description</strong></td>
<td><strong>Default</strong></td>
</tr>
<tr>
<td><code>split</code></td>
<td>Split string.</td>
<td><code>_$_</code></td>
</tr>
</table>


## CLI

```
npm install flatten-dirname -g
```

```
Usage
	$ fdname <glob> <dest>

Options
	--split Split string. Default: "_$_"

Examples
	fdname "**/*.png"
	fdname "**/*.png" destFolder/
	fdname "**/*.png" "destFolder/" --split "@"
```

## Check Also

[filename-to-dir](https://github.com/webcaetano/filename-to-dir)

## License

MIT

[npm-image]: https://img.shields.io/npm/v/flatten-dirname.svg?style=flat-square
[npm-url]: https://npmjs.org/package/flatten-dirname
[travis-image]: https://img.shields.io/travis/webcaetano/flatten-dirname.svg?style=flat-square
[travis-url]: https://travis-ci.org/webcaetano/flatten-dirname
<!-- [coveralls-image]: https://img.shields.io/coveralls/blakeembrey/flatten-dirname.svg?style=flat 
[coveralls-url]: https://coveralls.io/r/blakeembrey/flatten-dirname?branch=master
-->
