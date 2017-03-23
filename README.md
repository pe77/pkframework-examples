# PK Frameword :: Examples
Basic Samples/Demos of Use PkFramework (phaser.io based)

>First of all: Sorry for my shitty english...

This is a series of examples of using pkframework.

This is an **organizational framework**. The focus is not to redo code or optimize game performance, but:

- Speed up game production
- Organize and modularize the code

*keep this in mind*

Here are just examples of use. To learn more about the framework, [go to this repo](https://github.com/pe77/pkframeword).

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

---------

### Basic - Template

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

You can see the logs in the browser.

### Layers - Template

> @todo

In Action
--------

To test this example simply download or install using [pkframe client](https://github.com/pe77/pkframework-cli) and the command:
```bin
$ pkframe init -p basic
```
or simply
```bin
$ pkframe init
```
> This basic template is default parameter!


