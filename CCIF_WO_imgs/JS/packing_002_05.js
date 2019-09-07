
var width = window.innerWidth;
var height = window.innerHeight;


////------- div_01 -----------
var circles =[];
var len = 10;
var stage=0;

var canvas_01 = document.getElementById('defaultCanvas0');
let img;
var move=false;

//-------FONT-----------------
var ACaslon_I;
var ACaslon_R;
let projectD;
let projectD_D;
var projectD_count=1;

let projectT;
let projectT_T;
var projectT_count=1;
var projectT_hold=0;

function preload() {
  ACaslon_I= loadFont('./FONT/ACaslon_Regular_Italic.ttf');
  ACaslon_R= loadFont('./FONT/ACaslon_Regular_Regular.ttf');
}

function setup(){
canvas_01=createCanvas(windowWidth,windowHeight);
projectD = loadStrings('./DATA/project.txt');
projectT = "Climate Change \nImpact Filter";
  }

function mouseReleased() {
     stage=1;
  }

    function draw(){
      background(0);
      noStroke();

       if(stage==0){   
        var  newC = newCircle();

       if(newC !=null){
           if (circles.length<800){
             circles.push(newC);
           } 
          };
          
          if(circles.length>=10){ move=true;}
          //need to count the time of idle
          if (circles.length>200){stage=1;}

      } else if(stage==1){
        

      for (var i=0; i<circles.length; i++) {
        //circles[i].y -= Math.random()*2;
        circles[i].y -=1+Math.random();
        if(circles[i].y<-100){
         circles[i].y=Math.random()*30+(height+80);
         circles[i].callGroupB ();
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

      var projectD_D="";
      for(var i=0; i<projectD_count;i++){
        projectD_D+=projectD[0].charAt(i); 
     }
     projectD_count++;
     if(projectD_count>=projectD[0].length){
       projectD_count=projectD[0].length;
     };

     var projectT_T="";
     for(var i=0; i<projectT_count;i++){
       projectT_T+=projectT.charAt(i);
    }
    projectT_hold++;
    if(projectT_hold>6){
      projectT_count++;
      projectT_hold=0;

    }
  
    if(projectT_count>=projectT.length){
      projectT_count=projectT.length;
    };

            //BG TEXT
            noStroke();
            fill(255);
            textFont(ACaslon_I);
            textSize(100);
            textLeading(80);
            text(projectT_T, 10, height*0.25, width, 200);
            textFont('ACaslon_R');
            textSize(16);
            textLeading(16);
            text(projectD_D, 10, height*0.25+180, width*0.7, height-(height*0.25+200));
          
    }
      
     // img.innerHTML='<img class="lazy-image" data-src="./img_object/1_1_1_1.jpg">';
      //image(img,0,0);
   // };
      };

      function mouseMoved() {
        stage=0;
      }

      function count_letters(input) {
        var counter = 0;
        
        for (var i = 0; i < input.length; i++) {
            var index_of_sub = input.indexOf(input_letter, i);
        
            if (index_of_sub > -1) {
                counter++;
                i = index_of_sub;
            }
            return counter;
        }
      }

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
       

function circle(x,y, index){
    this.x = x;
    this.y = y;
    this.r = 10;
    this.v = this.r;
    this.max = Math.random()*35+15;
    this.stage=0;
   // console.log(data[index].sq_img_count);
    //this.index=index%(data[index].sq_img_count+1);
    

    this.obj = raw_data[sA[index]];
    this.species=sA[index];
   // this.s_name=data[index].species_name;
   this.s_name=this.obj["category3"];
   // this.s_num=data[index].file_name;
   this.s_num=this.obj["file_name"];
   this.index=index%(this.obj["square_image_count"])+1;

    if(this.s_name !=null){
      
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

    this.callGroupB =function(){
      this.obj = raw_data[sB[index]];
      this.species=sB[index];
      this.s_name=this.obj["category3"];
      this.s_num=this.obj["file_name"];
      this.index=index%(this.obj["square_image_count"])+1;
      this.img = loadImage("./img/"+this.s_name+"/"+this.s_num+this.index+".jpg");
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
      /*
      if(this.stage==0){
      this.obj = raw_data[sA[index]];
      this.species=sA[index];
      this.s_name=this.obj["category3"];
      this.s_num=this.obj["file_name"];
      this.index=index%(this.obj["square_image_count"])+1;
      this.img = loadImage("./img/"+this.s_name+"/"+this.s_num+this.index+".jpg");


      }else if (this.stage==1){
        this.obj = raw_data[sB[index]];
        this.species=sB[index];
        this.s_name=this.obj["category3"];
        this.s_num=this.obj["file_name"];
        this.index=index%(this.obj["square_image_count"])+1;
        this.img = loadImage("./img/"+this.s_name+"/"+this.s_num+this.index+".jpg");

      } else if (this.stage==2){

      }
      */
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
      // let condition = data[s_index].condition_1;
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



       if((stage==1)){

   
/*

        let condition = data[index].condition_1_percent;
        if((condition !='NA') && (condition !='0')){   
        noStroke();  
        fill(0,255-condition*0.01*255);
        rect(-this.r, -this.r, this.r*2+1, this.r*2)+1;
        stroke(255);
        strokeWeight(0.5);
        line(-this.r, -this.r, this.r, this.r);
       line(this.r, -this.r, -this.r, this.r);
       fill(255);
       textFont(ACaslon_R);
       textSize(12);
         text("- "+condition+"%", -this.r,-this.r, this.r*2, this.r*2);
        }
 */
   
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

function newCircle (){
  var x = Math.random()*window.innerWidth;
  /*
  if(a==0){v=0}
  else if(a==1){v=0.3}
  else if(a==2){v=0.6}
  */
  //var y = Math.random()*(window.innerHeight*0.3)+window.innerHeight*v;
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


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}