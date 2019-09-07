

var width = window.innerWidth;
var height = window.innerHeight;


////------- div_01 -----------
var circles =[];
var len = 10;
var species = ["coffee", "lizards", "styrofoam","lion","phytoplankton","Banana","Adélie_penguin"];
var species_num=["5_8_1_","4_2_2_","6_8_1_","4_5_1_","2_2_1_","5_2_1_", "4_7_1_"];
var stage=0;

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
var move=false;

const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;
var gradient_inc=0;

function preload() {
  //font = loadFont('https://fonts.gstatic.com/s/newscycle/v14/CSR54z1Qlv-GDxkbKVQ_dFsvWNRevA.ttf');
  //font=loadFont('https://fonts.googleapis.com/css?family=Arvo:400,700&display=swap');
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

b1 = color(255,200,100);
  b2 = color(100,255,125,10);
//canvas_01.background(img);


      //  for(var i =0; i<len; i++){
       //   circles.push(new circle(Math.random()*width,Math.random()*height));
         
     // }

    }

    function mouseReleased() {
     stage=1;
    }

    function draw(){
      background(0);

      b1 = color(gradient_inc,200,0,10);
      gradient_inc= gradient_inc+1;
      if(gradient_inc >255){
        gradient_inc=0;
      }

    // setGradient(0, 0, width, height, b1, b2, X_AXIS);
        noStroke();
     
      //  translate(-width*0.5, -height*0.5);
    fill(255);
       textFont('Helvetica bold');
       textSize(100);
      // text("Climate Change Imapct Filter ", 0, height*0.25, width, height*0.25);
       textSize(30);
     //  text("we will think about our responsibility to nature and what we must do When we see what we would lose", 0, height*0.4, width, height*0.25)
/*
       noStroke();
       fill(255,30);
       textSize(200);
       text("Climate Change Imapct Filter", 0,0, width, height);
*/

       var a = circles.length%species.length;
 

       if(stage==0){   
        var  newC = newCircle(a);
      // console.log(newCircle());
       if(newC !=null){

            //attempts++;
           if (circles.length<500){

            circles.push(newC);
           } else{
            stage=1;
           }
          };
          
          if(circles.length>=10){ move=true;}

      } else if(stage==1){
        for(var i=0; i<100; i++){
        //  circles[i].drawRect();
        }


      for (var i=0; i<circles.length; i++) {
        circles[i].y -= 1;
        if(circles[i].y<-100){
         circles[i].y=height;
        }
      }

   //  circles.pop();
   // circles.pop();
    // circles.pop();
       if(circles.length<100){
       //  stage=2;
      }
        }
       
  


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
      
     // if(circles[circles.length-1].growing==false){
      if(move==true){


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

    }
      
     // img.innerHTML='<img class="lazy-image" data-src="./img_object/1_1_1_1.jpg">';
      //image(img,0,0);
   // };
      };

      function overlap(R1, R2) {
        // console.log(R1);
         if(((R1.x-R1.r) > (R2.x+R2.r)) || ((R2.x-R2.r) > (R1.x+R1.r))) {
           return 0;
         }
         if (((R1.y-R1.r) > (R2.y+R2.r) || (R2.y-R2.r) > (R1.y+R1.r))) {
           return 0;
         }
         return dist(R1.x, R1.y, R2.x, R2.y);
       }
       

function circle(x,y, index, s_index){
    this.x = x;
    this.y = y;
    this.r = 10;
    this.v = this.r;
    this.max = Math.random()*10+10;
   // console.log(data[index].sq_img_count);
    this.index=index%(data[index].sq_img_count+1);
    this.species=s_index;
    this.s_name=data[index].species_name;
    this.s_num=data[index].file_name;

    if(data[index].species_name!=null){
      
     // console.log("yes");
    // console.log( "./img/"+s_name+"/"+species_num[this.species]+ this.index+".jpg");
    }
 //var img_path = "./img/"+s_name+"/"+this.s_num+ this.index+".jpg";
//this.img=loadImage(img_path);
    
 this.img = loadImage("./img/"+this.s_name+"/"+this.s_num+this.index+".jpg");
 // console.log("./img/"+species[this.species]+"/"+species_num[this.species]+ index+".jpg");
 //this.img = loadImage("./img/"+species[this.species]+"/"+species_num[this.species]+this.index+".jpg");

  this.ratio = this.img.height/this.img.width;
;

    this.growing = true;

    this.grow = function(){
       if(this.growing){
         //var inc = Math.random();
        this.r+=3;
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

    this.drawRect=function(){
   
      fill(0);
      push();
      // translate(this.x-width*0.5, this.y-height*0.5);
      translate(this.x, this.y);
      stroke(255);
      strokeWeight(0.1);
      rect(-this.r, -this.r, this.r*2, this.r*2);
      line(-this.r, -this.r, this.r, this.r);
      line(this.r, -this.r, -this.r, this.r);
      noStroke();
      pop();
    }

    this.draw = function(nn){
      
      // d.fill( 255-Math.random()*nn, 41, 3,255-Math.random()*nn);
      stroke(0);
      strokeWeight(0.5);
   
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
       
       
      fill(0);
     noStroke();
     stroke(255);
        //stroke(Math.random()*254, 41, 3, 1 );
       // strokeWeight(Math.random()*5);
        //d.rect(this.x-tw*0.5+5, this.y-this.r, tw, this.r*2);
       //rect(-this.r, -this.r, this.r*2, this.r*2);
       
       line(-this.r, -this.r, this.r, this.r);
       line(this.r, -this.r, -this.r, this.r);


       fill(255);
       textFont('Arvo');
       textSize(12);
       let condition = data[s_index].condition_1;
       //text(condition, -this.r,-this.r, this.r*2, this.r*2);

       this.v+=this.r*0.1;
       var ux1=this.img.width*0.5-this.v;
       var ux2=this.img.width*0.5+this.v;

       var uy1=this.img.height*0.5-this.v;
       var uy2=this.img.height*0.5+this.v;



       if(ux1<=0){
         ux1=0;
       }

       if(ux2>=this.img.width){
        ux2=this.img.width;
      }


      if(uy1<=0){
        uy1=0;
      }

      if(uy2>=this.img.height){
       uy2=this.img.height;
     }

       noStroke();
       image(this.img, -this.r, -this.r, this.r*2+1, this.r*2+1, ux1,uy1, ux2,uy2);



       if((stage==1) && (this.index <100)){
     
        fill(0,this.index*5);
        noStroke();
        rect(-this.r, -this.r, this.r*2, this.r*2);
        stroke(255);
        strokeWeight(0.1);
        line(-this.r, -this.r, this.r, this.r);
       line(this.r, -this.r, -this.r, this.r);

        fill(255);
        textFont('Arvo');
        textSize(12);
        let condition = data[s_index].condition_1;
       // text(condition, -this.r,-this.r, this.r*2, this.r*2);
       }


      // image(this.img, -this.r, -this.r, this.r*2, this.r*2, 0,0, this.img.width, this.img.height);
          // fill(254, 41, 3);
          
      // text(selected_keywords[n], -tw*0.5,+this.r*0.5);
       nn++;
       
      pop();
    }

    

}

var circleIndex=0;
var v=0;

function newCircle (a){
  var x = Math.random()*window.innerWidth;
  if(a==0){v=0}
  else if(a==1){v=0.3}
  else if(a==2){v=0.6}
  var y = Math.random()*(window.innerHeight*0.3)+window.innerHeight*v;
 y = Math.random()*(window.innerHeight);


    var valid = true;
    for (var i=0; i<circles.length; i++){
         var x1=circles[i].x;
         var y1 =circles[i].y;
       var dis = Math.sqrt(Math.pow((x1-x),2)+Math.pow((y1-y),2));
     //  var dis = dist(x,y, circles[i].x, circles[i].y);
       if(dis < Math.abs(circles[i].r*1.7)){
          valid = false;
           break;
      }
    }

    if(valid){
        var c = new circle(x,y, circleIndex+1,a);
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


function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
