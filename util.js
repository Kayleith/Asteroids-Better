;(function () {
  if(!window.Asteroids) {
    window.Asteroids = {};
  }

  var Util = Asteroids.Util = {};
  var inherits = Util.inherits = function (childClass, parentClass) {
    var Surrogate = function() {};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
  };
  // var randomVec = Util.randomVec = function(length) {
  //   var x = Math.random() * length;
  //   var y = Math.sqrt(Math.pow(length, 2) - Math.pow(x, 2));
  //   var dir_x = Math.random(0,1) < .5 ? -1 : 1;
  //   var dir_y = Math.random(0,1) < .5 ? -1 : 1;
  //   return [x*dir_x, y*dir_y];
  // };
  var randomVec = Util.randomVec = function (length) {
   var deg = 2 * Math.PI * Math.random();
   return scale([Math.cos(deg), Math.sin(deg)], length);
  };
  var dist = Util.dist = function(pos1, pos2) {
    return Math.sqrt(Math.pow(pos2[0] - pos1[0], 2) + Math.pow(pos2[1] - pos1[1], 2));
  };
  var dir = Util.dir = function (vec) {
    var norm = Util.norm(vec);
    return Util.scale(vec, 1 / norm);
  };
  var norm = Util.norm = function (vec) {
    return Util.dist([0, 0], vec);
  };
  var scale = Util.scale = function (vec, m) {
    return [vec[0] * m, vec[1] * m];
  };
  var rotate = Util.rotate = function(vec, degree) {
    var degr = Util.toDegree(degree);
    var newVec = [vec[0] * Math.cos(degr), vec[1] * Math.sin(degr)];
    newVec[0] ? newVec[0] = newVec[0] : newVec[0] = 0;
    newVec[1] ? newVec[1 ] = newVec[1] : newVec[1] = 0;
    return newVec;b
  };
  var toDegree = Util.toDegree = function(degree) {
    return (degree/360) * 2 * Math.PI;
  };
  var add = Util.add = function(vec1, vec2) {
    return [vec1[0] + vec2[0], vec1[1] + vec2[1]];
  };
})();
