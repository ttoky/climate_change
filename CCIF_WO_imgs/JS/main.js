
var w = window.innerWidth;
var h = window.innerHeight;

var title = document.getElementById('title');
var project = document.getElementById('description');

// ADD eventListner 
//resize
window.addEventListener('resize',reSize, false);

var x = document.getElementById("bg").childElementCount;
if(x>=500){
  window.scrollByPages(1);
}


/*
project.onmouseover = function() {
 // title.style.opacity='0';
  }
project.onmouseout=function(){
 // title.style.opacity='1';
  }
*/

  function mouseOver(event) {
  
    var c = document.getElementById("citation");
   

    if(c ==null){
      var cit =document.createElement('div');
      cit.setAttribute('id', "citation");
     // cit.setAttribute('style', 'width:100px, height:100px, bg-color:"red"');
      document.body.appendChild(cit);

      var num =event.path[1].id;
      var id= data[num].species_index;
      var d = raw_data[id];
      var citi= d["Reference"];
    
      var citation = document.getElementById("citation");
      citation.setAttribute("style", "position:fixed; px;width:"+25+"%;top:"+event.clientY+"px; left:"+event.clientX+"px;");
    
     if(id !=null){
      citation.innerHTML='<p class="citation_text">'+citi+'</p>';

     }
      //citation.setAttribute("style", "position:fixed; height:"+100+"px;width:"+100+"px;top:"+event.clientY+"px; left:"+event.clientX+"px;");

    } else{
      var num =event.path[1].id;
      var id= data[num].species_index;
      var d = raw_data[id];
      var species_name= d["category 3"];
      var citi= d["reference"];
      var con_0= d["condition_0"];
    
      var citation = document.getElementById("citation");
      //  citation.setAttribute("style", " top:"+event.clientY+"px; left:"+event.clientX+"px;");

     citation.setAttribute("style", "position:fixed; px;width:"+25+"%;top:"+event.clientY+"px; left:"+event.clientX+"px;");
    
     if(id !=null){
      citation.innerHTML='<p class="citation_text">'+species_name+'<br/><br/>'+con_0+'<br/></br/>'+citi+'</p>';

     }

    }

  }

  function mouseOut(event) {
  
   // var c = document.getElementById("citation");

    if(c =! null){
  
    //  document.getElementById("citation").remove();
      
    } 

  }

  var interval=10;
  //var scroll = setInterval(function(){ window.scrollBy(0,interval);},200);

// check idle or not;

idle({
  onIdle: function(){
    setTimeout(function(){
      interval=10;
    }, 250);

    
  },
  onActive: function(){
    interval=0;

  },
  onHide: function(){
    interval=10;
   
  },
  onShow: function(){
    // Add a slight pause so you can see the change
    setTimeout(function(){
      interval=10;
    }, 250);
  },
  idle: 2000,
  keepTracking: true
}).start();

function init(){

//project description
/*
project.setAttribute("style","display:block;width:"+title.offsetWidth+"px");
project.style.width=title.offsetWidth+'px';
project.style.height=title.offsetHeight+'px';
project.innerHTML='<p id="projectDescription">'+projectText+'</p>';
*/

}

function reSize(){
  /*
  project.setAttribute("style","display:block;width:"+title.offsetWidth+"px");
  project.style.width=title.offsetWidth+'px';
  project.style.height=title.offsetHeight+'px';
  */
}

var count=0;
var remove_id=1;


var animate = function(){
  requestAnimationFrame(animate);
  /*
  console.log(count);
  
  if(count >=500){


    document.getElementById(""+remove_id).remove();
    remove_id++;
    if (remove_id>500){
      remove_id=0;
      count=500;
    } 



  }else{
    count++;

  }

  */


};


init();
animate();




////// TEXT
