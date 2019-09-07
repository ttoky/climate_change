
var w = window.innerWidth;
var h = window.innerHeight;

var title = document.getElementById('title');
var project = document.getElementById('description');

// ADD eventListner 
//resize
window.addEventListener('resize',reSize, false);

project.onmouseover = function() {
  title.style.opacity='0';
  }
project.onmouseout=function(){
  title.style.opacity='1';
  }

  var interval=5;
 // var scroll = setInterval(function(){ window.scrollBy(0,interval);}, 100);

// check idle or not;

idle({
  onIdle: function(){
    setTimeout(function(){
      interval=5;
    }, 250);

    
  },
  onActive: function(){
    interval=0;

  },
  onHide: function(){
    interval=0;
   
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

project.setAttribute("style","display:block;width:"+title.offsetWidth+"px");
project.style.width=title.offsetWidth+'px';
project.style.height=title.offsetHeight+'px';
project.innerHTML='<p id="projectDescription">'+projectText+'</p>';

}

function reSize(){
  project.setAttribute("style","display:block;width:"+title.offsetWidth+"px");
  project.style.width=title.offsetWidth+'px';
  project.style.height=title.offsetHeight+'px';
}

var animate = function(){
  requestAnimationFrame(animate);
};


init();
animate();




////// TEXT
