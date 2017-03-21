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

![](http://i.imgur.com/yoQg96w.png)


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

### Basic

Only basic use of framework. 

Load several bullshit assets(only for load test) start on
```typescript
this.initialState = 'Menu';
```
