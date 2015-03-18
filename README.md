# grunt-fontello-merge

> Merge multiple fontello config files

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
    }
  }
});
```

### Options

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
In this example, the default options are set to combine `config1.json` and `config2.json` files placed in project root directory. Merge would be based on `code` value. The result (merged) file will be named `merged.json` and will be saved in project root directory.

```js
grunt.initConfig({
  fontello_merge: {
    target_name: {
      files: {
        'merged.json': ['config1.json', 'config2.json']
      }
    }
  }
});
```

#### Merge by icon CSS name
If you prefer to use CSS classes provided by fontello rather than icon codes, you can change the merge factor to use the name instead of codes.

```js
grunt.initConfig({
  fontello_merge: {
    target_name: {
      options: {
        mergeFactor: 'css'
      },
      files: {
        'merged.json': ['config1.json', 'config2.json']
      }
    }
  }
});
```

## Release History

###Version 0.2.0
* Removed external modules to make plugin more atomic and universal
* Result config.json file can now be kept
* Added support for multiple destination paths
* Added unit testing

###Version 0.1.0
* Plugin was born! Hooray!

##Plug
Development was sponsored by [Dennis Publishing](http://dennis.co.uk)
