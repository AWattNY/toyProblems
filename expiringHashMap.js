var HashMap = function() {
  this._storage = new Map();
  this._defaultTimeout = 60;
};

HashMap.prototype.set = function(key, value, timeout) {
  var hashTimeout = timeout || this._defaultTimeout;
  var timeCreated = new Date().getTime();
  var endTime = timeCreated + (hashTimeout * 1000);
  var objectToStore = {
    value,
    endTime
  };
  this._storage.set(key, objectToStore);
};

HashMap.prototype.get = function(key) {
  var currentTime = new Date().getTime();
  if ( this._storage.has(key) ) {
    var storedObject = this._storage.get(key);  
  }
 
  var endTime = storedObject.endTime;

  if ( currentTime < endTime ) {
    return storedObject.value;
  } 
  return false;
};