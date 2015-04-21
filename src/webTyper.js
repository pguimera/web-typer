/*!
 * WebTyperJS v0.0.1
 * Author: Pablo Guimera
 * License: MIT
 **/
(function(w){
    'use strict';
    //el, content, options
    function WebTyper(options, callback) {

        // In no options passed throw error
        if (!options) {throw new Error('No options found');}

        // Set options / defaults
        this.content = options.content || ['Look mum I\'m typing!'];
        this.el = options.el || document;
        this.delay = options.delay || 2000;
        this.speed = options.speed || 200;

        this.callback = typeof callback === 'function' ? callback : null;
        this.webTyper = null;
        this.iterator = 0;
        this.current = this.content[this.iterator];
        this.partial = '';
        this.isDeleting = false;
        this.tick = 0;
        this._init();
    }

    // Define the WebTyper 'private' and public methods
    WebTyper.prototype = {
        // Initialization - Create a new span element and attach it to the original element
        _init: function() {
            this.webTyper = document.createElement('span');
            this.webTyper.className = 'web-typer';
            this.el.appendChild(this.webTyper);
            this._keyPress();
        },
        // Simulates a key press and handles the logic to calculate how the next should behave
        _keyPress: function() {
            // Gets current text to render
            this.partial = this.current.substring(0, this.partial.length + (this.isDeleting ? -1 : 1));

            // Applies current text to the DOM element
            this.webTyper.innerHTML = this.partial;

            // Calculates a random-ish time for the next key press based on the speed
            var next = !this.isDeleting ? this.speed - Math.random() * this.speed * 0.2 : (this.speed - Math.random() * this.speed * 0.2) / 2;

            // Handles edge cases (beginning / end of current string)
            if (!this.isDeleting && this.partial === this.current) {
                next = this.delay;
                this.isDeleting = true;
            } else if (this.isDeleting && this.partial === '') {
                this.isDeleting = false;
                this.iterator = (this.iterator + 1) % this.content.length;
                this.current = this.content[this.iterator];
                next = this.speed;
                // Execute callback on next word
                if (!!this.callback){this.callback.call(this);}
            }

            // Call next key press
            var _this = this;
            this.tick = setTimeout(function() {
                _this._keyPress();
            }, next);
        }
    };

    // return the global object
    return (w.WebTyper = WebTyper);

})(window);
