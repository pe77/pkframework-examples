# PK Frameword :: Examples
Basic Samples/Demos of Use PkFramework (phaser.io based)

>First of all: Sorry for my shitty english...

Here are just examples of use. To learn more : [Quick Start Guide](https://github.com/pe77/pkframework/wiki)

Get Starter
------------

To run these examples you need to install, install [Node.js](https://nodejs.org/en/). Then, install the latest pkframe cli command-line tools in your terminal. 

```bash
$ npm install -g pkframe
```

[framework client details and other options](https://github.com/pe77/pkframework-cli)


----------

## Examples

Here a folder struct proposal:

![](http://i.imgur.com/0MrwQw6.png)


The framework, like your code, is build using typescript. 

Assuming that the code is build in ``dist/js/app.js``, the only thing we need to do is load this code into index.html:

```javascript
// dist/js/app.js
window.onload = () => {
    var game = new GameBase.Game();
}
```

by default, the framework load game screen on html element id "game":

```html
<main id="game"></main>
```

but this is configurable, just like the other boot options. See more in PK Framework API.

Basic - Template
---------------------

Only basic use of framework. 

Load several bullshit assets(only for load test) start on
```typescript
this.initialState = 'Menu';
```

This template only opens the menu screen and switches to the main screen when you press [space]. In the main screen, if you press [enter], it returns to the menu screen by passing a few parameters.

```javascript
// com/gamebase/states/Menu.ts
if (this.spaceBarKey.isDown)
    this.transition.change('Main');  // change to main state (somenthing like game first stage or options state)
//
```

```javascript
// com/gamebase/states/Main.ts
if (this.enterKey.isDown)
    this.transition.change('Menu', 1111, 'text', {a:true, b:[1, 2]});  // return with some foo/bar args
//
```

When returning to the menu, the main screen passes some arguments that can be received in:
```javascript
// com/gamebase/states/Menu.ts
init(param1, param2, param3) // or | init(...args:any[]) |
{
    super.init(); // if whant override init, you need this line!
    console.log('Menu init');

    console.log('params:', param1, param2, param3);
}
```

__Run this model__
```bin
$ pkframe init -p basic
```

>You can see the logs in the browser.


Layers - Template
---------------------

![](http://i.imgur.com/Syvj2Eg.png)

![](http://i.imgur.com/Gn7V9FJ.png)

__Run this model__
```bin
$ pkframe init -p layers
```


Layers - Simple Parallax
---------------------

![](http://i.imgur.com/8014dFk.png)

__Run this model__
```bin
$ pkframe init -p parallax
```


