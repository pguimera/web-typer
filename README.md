# WebTyper

## Intro

> WebTyper is a lightweight JavaScript library that emulates a user continuously typing on the browser.

## How to use

Download the minified version from the `dist` folder or the unminified version from the `src` folder if you are planning on improving it.

To generate a new WebTyper instance simply run something like the following code:

```html
<h1 id="my-typer">Oh hai. </h1>
```

```javascript
var myElement = document.getElementById('my-typer');
var text = ['I\'m your browser!', 'I like typing :)', 'Who are you?'];

var myTyper = new WebTyper({
    el: myElement, // Element where the text will be appended
    content: text, // Array containing the text to display
    delay: 2000, // Delay between sentences (optional) - defaults to 2000
    speed: 200 // Speed between key presses (optional) - defaults to 200
    }, function(){
        // Function that gets called after each sentence
        console.log('I can probably call a nextSlide method here.')
    });
```

And you can probably improve the look and feel adding with something like this:

```sass
.web-typer:after {
  content: '|';
  animation: blink 1s infinite linear;
}

@keyframes blink {
  0%   {opacity: 1;}
  25%  {opacity: 0;}
  50%  {opacity: 0;}
  100% {opacity: 1;}
}
```

## License

MIT [Pablo Guimera](https://github.com/pguimera)


