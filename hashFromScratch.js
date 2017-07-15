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

class HashMap2 {
  constructor() {
    this.storage = {};
    this.size = 0;
  }


  put(key, value) {
    if ( !this.storage[key] ) {
      this.size++;
    }
    this.storage[key] = value;
    return this;
  }

  get(key) {
    return this.storage[key];
  }

  delete(key) {
    let returnValue = false;
    if ( this.storage[key] ) {
      returnValue = true;
      this.size--;
    }
    delete this.storage[key];
    return returnValue;
  }

  has(key) {
    return this.storage.hasOwnProperty(key);
  }

  getRandom() {
    let randomIndex = Math.floor( Math.random() * this.size );
    let key = Object.keys(this.storage)[randomIndex];
    let value = this.storage[key];
    return { key, value };
  }

}