// pivot object
var p = {
    x : 200, y : 200, z : 200,
    
    xtilt : 1,
    ytilt : 180,
    
    draw : function() {
        strokeWeight(3);
        point(this.x,this.y);
    }
};
//draw pivot
p.draw();

fill(0, 0, 255);
text("sin("+p.ytilt + ") : " + sin(p.ytilt),5,15);
text("cos("+p.ytilt + ") : " + cos(p.ytilt),5,30);
noFill();

//--------------------------------------------------

strokeWeight(7);
// satellite
var Satellite = function() {
    this.dist = 30;

    // replace all these with something like
    // this.component = new SatelliteComponent(x,y,color,strokeWeight?)
    
    // centre
    this.x = this.dist*sin(p.ytilt) + p.x;
    this.y = this.dist*cos(p.ytilt) + p.y;
    
    // port light
    this.port_x = this.x - 20*cos(p.ytilt);
    this.port_y = this.y + 20*sin(p.ytilt);
    
    // starboard light
    this.star_x = this.x + 20*cos(p.ytilt);
    this.star_y = this.y - 20*sin(p.ytilt);
    
    // antenna
    this.ant_x = this.x + 20 + 20*cos(p.ytilt);
    this.ant_y = this.y + 20 + 20*sin(p.ytilt);
    
    this.draw = function() {
        // replace all these with: this.component.draw();

        // draw satellite centre
        stroke(0, 0, 0);
        point(this.x,this.y);
        // draw port
        stroke(255, 0, 0);
        point(this.port_x,this.port_y);
        // draw starboard
        stroke(0, 255, 0);
        point(this.star_x,this.star_y);
        // draw antenna
        stroke(0, 0, 0);
        strokeWeight(1);
        line(this.x, this.y, this.ant_x, this.ant_y);
    };
};
var stl = new Satellite();
stl.draw();

//--------------------------------------------------

var Cheese = function() {
    this.dist = 125;
    
    this.x = this.dist*sin(p.ytilt) + p.x;
    this.y = this.dist*cos(p.ytilt) + p.y;
    
    this.x1 = this.x - 20*cos(p.ytilt) - 20*sin(p.ytilt);
    this.y1 = this.y + 20*sin(p.ytilt) + 20*cos(p.ytilt);
    
    this.x2 = this.x - 40*cos(p.ytilt) - 20*sin(p.ytilt);
    this.y2 = this.y + 40*sin(p.ytilt) - 20*cos(p.ytilt);

    this.x3 = this.x + 20*cos(p.ytilt) - 20*sin(p.ytilt);
    this.y3 = this.y - 20*sin(p.ytilt) - 20*cos(p.ytilt);

    this.x4 = this.x + 40*cos(p.ytilt) - 20*sin(p.ytilt);
    this.y4 = this.y - 40*sin(p.ytilt) + 20*cos(p.ytilt);
    
    this.draw = function() {
        stroke(255, 0, 0);
        point(this.x,this.y);

        stroke(0, 0, 0);
        strokeWeight(1);
        quad(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4);
    };

};
var chs = new Cheese();
//chs.draw();
