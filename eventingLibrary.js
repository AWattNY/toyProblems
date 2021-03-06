/*
 * Make an eventing system mix-in that adds .trigger() and .on() to any input
 * object.
 *
 * Example usage:
 * var obj = mixEvents({ name: 'Alice', age: 30 });
 * obj.on('ageChange', function(){ // On takes an event name and a callback function
 *    console.log('Age changed');
 * });
 * obj.age++;
 * obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
 *
 * Caveats:
 * - mixEvents should return the original object it was passed after extending it.
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function as well. That is to say, we can have multiple
 *   listeners for an event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

var MixEvents = function(obj) {
  this.events = {};
   
};

MixEvents.prototype.on = function(event, callback) {
  this.events[event] = this.events[event] || [];
  this.events[event].push(callback);  
};

MixEvents.prototype.trigger = function(event, ...args) {
  if ( this.events[event] ) {
    // let args = Array.prototype.slice.call(arguments, 1);
    this.events[event].forEach(function(callback) {
      callback.apply(this, args);  
    });
  }
};

class MixEvents2 {
  constructor(obj) {
    this.events = {};
  }
  on(event, callback) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(callback);  
  }
  trigger(event, ...args) {
    if ( this.events[event] ) {
      // let args = Array.prototype.slice.call(arguments, 1);
      this.events[event].forEach(function(callback) {
        callback.apply(this, args);  
      });
    }
  }
}

var obj = new MixEvents2({ name: 'Alice', age: 30 });
obj.on('ageChange', function() { 
  console.log('Age changed');
});
obj.age++;
console.log(obj.trigger('ageChange')); 

