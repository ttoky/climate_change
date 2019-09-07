

var width = window.innerWidth;
var height = window.innerHeight;
//var height = 2160;


////------- div_01 -----------
var circles =[];
var len = 10;
var stage=0;
var species = ["coffee", "lizards", "styrofoam"];
var species_num=["5_8_1_","4_2_2_","6_8_1_"];

/*
/// ----- get 5 keywords from each 
selected_keywords =[];

for(var i=0; i<keywords.length;i++){
  var s = keywords[i].keywords;
  var ss = s.split(",");
  for(var j=0; j<20; j++){
    selected_keywords[j+i*5] = ss[j];

  }

}
*/

var canvas_01 = document.getElementById('defaultCanvas0');
let img;

function preload() {
  font = loadFont('https://fonts.gstatic.com/s/newscycle/v14/CSR54z1Qlv-GDxkbKVQ_dFsvWNRevA.ttf');
 //img = loadImage('./img_object/1_1_1_1.jpg');
}

function setup(){
  /*
createCanvas(windowWidth, windowHeight, WEBGL);
  textFont(font);
  textSize(40);
  textAlign(CENTER, CENTER);
  fill(255);
  colorMode(HSB);
*/
canvas_01=createCanvas(windowWidth,windowHeight);
//canvas_01.background(img);


      //  for(var i =0; i<len; i++){
       //   circles.push(new circle(Math.random()*width,Math.random()*height));
         
     // }

    }

    function draw(){
      background(0);
        noStroke();
        push();
      //  translate(-width*0.5, -height*0.5);
       fill(255);
       textFont(font);
       textSize(200);
      // text("Climate Change Imapct Filter", 0,0, width, height);

     
      // rect(0,0,width, height);
      //image(img, 0,0);
       pop();
        var attempts = 0;
       
       var  newC = newCircle();
      // console.log(newCircle());
       if(newC !=null){

            //attempts++;
           if (circles.length<100){

            circles.push(newC);
           }
  
   };

  


      for(var i=0; i<circles.length; i++){
        if (circles[i].grawing){
            if(circles[i].edges()){
                circles[i].growing=false;
            }

        }else{
            for(var j=0; j<circles.length; j++){
                if(i != j){
                    var x1=circles[i].x;
                    var y1 =circles[i].y;
                    var x2=circles[j].x;
                    var y2 =circles[j].y;
                    var dis = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),3));

                    //console.log(dist(circles[i].x, circles[i].y, circles[j].x, circles[j].y));
                   //var di = dist(circles[i].x, circles[i].y, circles[j].x, circles[j].y);
                   if(dis - 2< circles[i].r+circles[j].r){
                       circles[i].growing = false;
                       break;
                   }
         }
            }

        }
        circles[i].draw(i);
       circles[i].grow();

      };

      var hasOverlap = false;
      var s = [];
      
      if(circles[circles.length-1].growing==false){

      for (var i =0; i<circles.length; i++){
      
       // var ctx = selected_keywords[i].x*(window.innerWidth)-window.innerWidth*0.5;
       // var cty = selected_keywords[i].y*(window.innerHeight)-window.innerHeight*0.5;
      
          var ctx = circles[i].x;
          var cty = circles[i].y;
          var s_ = {x:0, y:0};

         // console.log(ctx);
       
      
          for (var j=0; j<circles.length; j++) {
            if ((i==j) && (circles[i].growing==true)) continue;
      
         //var ctx2 = selected_keywords[j].x*(window.innerWidth)-window.innerWidth*0.5;
        // var cty2 = selected_keywords[j].y*(window.innerHeight)-window.innerHeight*0.5;
      
            var o = overlap(circles[i], circles[j]);
            if (o > 0) {
              hasOverlap = true;
              var a = atan2(circles[i].y - circles[j].y, circles[i].x - circles[j].x);
              var d =1;
              s_.x += d * cos(a);
              s_.y += d * sin(a);
      } 
          }
         // console.log(s);
          s.push(s_);
      
        }
      
        for (var i=0; i<circles.length; i++) {
        circles[i].x += s[i].x;
        circles[i].y += s[i].y;
      }
   
      
     // img.innerHTML='<img class="lazy-image" data-src="./img_object/1_1_1_1.jpg">';
      //image(img,0,0);
    };
      };

      function overlap(R1, R2) {
        // console.log(R1);
         if(((R1.x-R1.r*2) > (R2.x+R2.r*2)) || ((R2.x-R2.r*2) > (R1.x+R1.r*2))) {
           return 0;
         }
         if (((R1.y-R1.r) > (R2.y+R2.r) || (R2.y-R2.r) > (R1.y+R1.r))) {
           return 0;
         }
         return dist(R1.x, R1.y, R2.x, R2.y);
       }
       

function circle(x,y, index){
    this.x = x;
    this.y = y;
    this.r = 20;
    this.v = this.r;
    this.max = Math.random()*30+10;
    this.max=50;
    this.index=(index%50)+1;
    this.species=index%3;

    
  this.img = loadImage("./img/"+species[this.species]+"/"+species_num[this.species]+ index+".jpg");

  this.ratio = this.img.height/this.img.width;
;

    this.growing = true;

    this.grow = function(){
       if(this.growing){
         var inc = Math.random();
        this.r+=1;
       }

       if(this.r>this.max){
        this.growing =false;
      }


    }

    this.edges = function(){
        return (this.x+this.r > width || this.x-this.r <0 || this.y+this.r*2 >height-500 || this.y-this.r*2 <0);

    }

    function NumberWithLeadingZeroes(n)
    {
        if ( n< 10 )
        {
            return ( '00000' + n.toString () );
        }
        else if ( n< 100 )
        {
            return ( '0000' + n.toString () );
        }
        else if ( n< 1000 )
        {
            return ( '000' + n.toString () );
        }
        else
        {
            return ( n);
        }
    }

    this.draw = function(nn){
      
      // d.fill( 255-Math.random()*nn, 41, 3,255-Math.random()*nn);
      stroke(0);
      strokeWeight(1);
   
       //d.noFill();
       // d.ellipse(this.x,this.y,this.r,this.r);
      //textFont(font);

       // textSize(this.r);
       // var n = nn %(selected_keywords.length);
        //var tw = textWidth(selected_keywords[n]);
        push();
       // translate(this.x-width*0.5, this.y-height*0.5);
       translate(this.x, this.y);
        //rotate(Math.random()*100)
        //var th = textHeight(selected_keywords[n], tw+20);
       
       
      fill(254, 41, 3,100);
       stroke(254, 41,3);
        //stroke(Math.random()*254, 41, 3, 1 );
       // strokeWeight(Math.random()*5);
        //d.rect(this.x-tw*0.5+5, this.y-this.r, tw, this.r*2);
       rect(-this.r, -this.r, this.r*2, this.r*2);
       this.v+=this.r;
       
       image(this.img, -this.r, -this.r, this.r*2, this.r*2, 0,0, this.v,this.v);

      // image(this.img, -this.r, -this.r, this.r*2, this.r*2, 0,0, this.img.width, this.img.height);
          // fill(254, 41, 3);
          
      // text(selected_keywords[n], -tw*0.5,+this.r*0.5);
       nn++;
       
      pop();
    }

    

}

var circleIndex=0;
function newCircle (){
    var x = Math.random()*width;
    var y = Math.random()*height;
   

    var valid = true;
    for (var i=0; i<circles.length; i++){
         var x1=circles[i].x;
         var y1 =circles[i].y;
      // var dis = Math.sqrt(Math.pow((x1-x),2)+Math.pow((y1-y),2));
       var dis = dist(x,y, circles[i].x, circles[i].y);
       if(dis < Math.abs(circles[i].r)){
          valid = false;
           break;
      }
    }

    if(valid){
        var c = new circle(x,y, circleIndex+1);
        circleIndex++;
        return c;
    }else {
        return null;
    }
    
}


  (function() {
  var script = document.createElement('script');
  script.onload = function() {
    var stats = new Stats();
    stats.domElement.style.cssText =
      'position:fixed;left:0;top:0;z-index:10000';
    document.body.appendChild(stats.domElement);
    requestAnimationFrame(function loop() {
      stats.update();
      requestAnimationFrame(loop);
    });
  };
  script.src = '//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';
 // document.head.appendChild(script);
})();


