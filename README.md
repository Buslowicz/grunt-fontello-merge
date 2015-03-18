# grunt-fontello-merge

> Merge multiple fontello config files based on icon code and download the bundle font set

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-fontello-merge --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-fontello-merge');
```

## The "fontello_merge" task

### Overview
In your project's Gruntfile, add a section named `fontello_merge` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  fontello_merge: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.fonts
Type: `String`
Default value: `'fonts/fontello'`

Path to extract font files (*.eot, *.woff, *.svg, *.ttf).

#### options.styles
Type: `String`
Default value: `'styles/fontello'`

Path to extract css or sass files. See [__options.scss__](#optionsscss)

#### options.force
Type: `Boolean`
Default value: `false`

By default, if the folder specified in options.fonts and options.styles do not exist, the task will throw an error. Setting this option to true will create the directory structure specified. 

#### options.scss
Type: `Boolean`
Default value: `false`

Setting this option to true will extract .scss files instead of plain css.

#### options.tmp
Type: `String`
Default value: `'.tmp'`

A temporary folder (nothing important inside).

#### options.mergeFactor
Type: `String`
Default value: `'code'`

The factor based on which the merge will override the glyphs. For example when set to __code__, it will override existing glyph if it finds new glyph with the same __code__.

#### options.configJson
Type: `Object`
Default value: 
```js
name: "",
css_prefix_text: "icon-",
css_use_suffix: false,
hinting: true,
units_per_em: 1000,
ascent: 850
```

Basic fontello config.json file structure that will be used to download fonts.

### Usage Examples

#### Default Options
In this example, the default options are set to combine `config1.json` and `config2.json` files placed in project root directory. Merge would be based on `code` value. The fonts will be downloaded to `fonts/fontello` directory and the styles together with combined config file to `styles/fontello`.

```js
grunt.initConfig({
  fontello_merge: {
    src: ['config1.json', 'config2.json']
  },
});
```

#### Custom Options
Say you don't need the styles, just the fonts. You can do it by changing the styles path to `false`. It will place styles in temporary folder and purge it at the end of task.

```js
grunt.initConfig({
  fontello_merge: {
    options: {
      styles: false
    },
    src: ['config1.json', 'config2.json']
  },
});
```

## Release History
###Version 0.1.0
Plugin was born! Hooray!

---
