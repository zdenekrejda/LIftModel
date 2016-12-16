var LED = function(paper, id, x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.paper = paper;

    this.LED = paper.circle(x, y, radius).addClass("led_off");
    //var g = paper.gradient('r(0.5, 0.5, 0.5)#00ff00-#fff');
    var g = paper.gradient('r()#00ff00-#fff');
    this.LED_on = paper.circle(x, y, radius + 10).addClass("glow");
    this.LED_on.attr({fill: g});
};

LED.prototype.On = function(){
    this.LED_on.animate({fillOpacity: .7}, 200);
    this.LED.animate({fill: '#00ff00'}, 200);
};

LED.prototype.Off = function(){
    this.LED_on.animate({fillOpacity: .0}, 200);
    this.LED.animate({fill: '#0d4c0b'}, 200);
};

var led = new LED(Snap('#svg2'), 'LED', 50, 50, 40);
