const bind = function(func, context) {
  var prevArgs = Array.prototype.slice.call(arguments, 2);
  return function() {
    let args = Array.prototype.slice.call(arguments);
    args = prevArgs.concat(args);
    return func.apply(context, args);
  };
};

Function.prototype.bind = function(context) {
  var prevArgs = Array.prototype.slice.call(arguments, 1);
  let func = this;
  return function() {
    let args = Array.prototype.slice.call(arguments);
    args = prevArgs.concat(args);
    return func.apply(context, args);
  };
};