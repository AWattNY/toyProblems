const HashMap = function() {
  this.storage = {};
  this.size = 0;
};

HashMap.prototype.put = function(key, value) {
  if ( !this.storage[key] ) {
    this.size++;
  }
  this.storage[key] = value;
  return this;
};

HashMap.prototype.get = function(key) {
  return this.storage[key];
};

HashMap.prototype.delete = function(key) {
  let returnValue = false;
  if ( this.storage[key] ) {
    returnValue = true;
    this.size--;
  }
  delete this.storage[key];
  return returnValue;
};

HashMap.prototype.has = function(key) {
  return this.storage.hasOwnProperty(key);
};

HashMap.prototype.getRandom = function() {
  let randomIndex = Math.floor( Math.random() * this.size );
  let key = Object.keys(this.storage)[randomIndex];
  let value = this.storage[key];
  return { key, value };
};

