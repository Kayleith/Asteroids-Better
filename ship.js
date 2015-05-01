(function() {
  'use strict';

  var RADIUS = 5;
  var COLOR = "blue";
  var VEL = [0, 0];
  var MAX = 9;

  var Ship = window.Asteroids.Ship = function (pos, game) {
    Asteroids.MovingObject.call(this, pos);
    this.radius = RADIUS;
    this.color = COLOR;
    this.vel = VEL;
    this.game = game;
    this.orientation = 0;
  };

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    var startPos = Asteroids.Util.rotate([Math.sqrt(this.radius), Math.sqrt(this.radius)], this.orientation);
    ctx.moveTo(this.pos[0] + startPos[0], this.pos[1] + startPos[1]);
    startPos = Asteroids.Util.rotate([Math.sqrt(this.radius), Math.sqrt(this.radius)], this.orientation + 145);
    ctx.lineTo(this.pos[0] + startPos[0], this.pos[1] + startPos[1]);
    startPos = Asteroids.Util.rotate([Math.sqrt(this.radius), Math.sqrt(this.radius)], this.orientation - 145);
    ctx.lineTo(this.pos[0] + startPos[0], this.pos[1] + startPos[1]);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = 'rgb(0,128,0)';
    ctx.lineWidth = 5;
    ctx.stroke();
  };

  Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = VEL;
  };

  Ship.prototype.power = function (impulse) {
    if(Asteroids.Util.norm(this.vel) <= MAX) {
      var delta_velocity = Asteroids.Util.rotate([Math.sqrt(impulse), Math.sqrt(impulse)], this.orientation);
      this.vel = Asteroids.Util.add(this.vel, delta_velocity);
    } else {
      // this.vel = Asteroids.Util.rotate([Math.sqrt(MAX), Math.sqrt(MAX)], this.orientation);
      var max_x = Math.sqrt(Math.pow(MAX) - vel[0])
    }
  };

  Ship.prototype.decelerate = function (impulse) {
    if(Asteroids.Util.norm(this.vel) <= -impulse) {
      this.vel = [0,0];
    } else if(Asteroids.Util.norm(this.vel) <= MAX) {
      var delta_velocity = Asteroids.Util.rotate([Math.sqrt(-impulse), Math.sqrt(-impulse)], this.orientation);
      this.vel = Asteroids.Util.add(this.vel, [-delta_velocity[0], -delta_velocity[1]]);
    } else {
      this.vel = Asteroids.Util.rotate([Math.sqrt(MAX), Math.sqrt(MAX)], this.orientation);
    }
  };

  Ship.prototype.rotate = function (shift) {
    if (shift === 1) {
      this.orientation += 15;
    } else {
      this.orientation -= 15;
    }
  };

  Ship.prototype.fireBullet = function () {
    var bulletVelocity = Asteroids.Util.rotate([(15 + this.vel[0]), (15 + this.vel[1])], this.orientation);
    var bullet = new Asteroids.Bullet(this.pos, bulletVelocity, this.game);
  };
})();
