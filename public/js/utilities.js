function Vector(_x, _y) {
    this.x = _x;
    this.y = _y;
}

Vector.prototype.Add = function (vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
}

Vector.prototype.Subtract = function (vector) {
    return new Vector(this.x - vector.x, this.y - vector.y);
}

Vector.prototype.Scale = function (scale) {
    return new Vector(this.x * scale, this.y * scale);
}

Vector.prototype.Dot = function (vector) {
    if (typeof vector === 'undefined')
        return this.x * this.x + this.y * this.y;
    return this.x * vector.x + this.y * vector.y;
}

Vector.prototype.Distance = function () {
    return Math.sqrt(this.dot());
}






function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
}

function existsInStorage(key) {
    return !!localStorage.getItem(key);
}

function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}