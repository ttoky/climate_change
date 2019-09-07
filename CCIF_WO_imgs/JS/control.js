var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
var condi=0;

slider.oninput = function() {
 
  output.innerHTML = this.value;

  for(var i=0; i<data.length; i++){
    var index = data[i].species_index;
    var d = raw_data[index];

    var v0 = d["0.5C"];
    var v1 = d["1C"];
    var v2 = d["1.5C"];
    var v3 = d["2C"];
    if((v1!=null)||(v1=="NA")||(v1 == "")){
      var img_box = document.getElementById(""+(i+1));
      var img_img = document.getElementById("img_"+(i+1));
      var img_txt = d["condition_0"];
      if((img_box !==null) && (img_txt !="NA")){

        if ((this.value<25)){
          var inc = ((v0)/25);
          var nv = (inc*(this.value))*0.01;
          img_box.style.opacity=""+(1-nv);
        //img_box.innerHTML='<p class="content"><br/><br/><br/>'+d["condition_0"]+'</p>';
        }
        else if ((this.value>=25)&& (this.value<50)){
          var inc = ((v1-v0)/25);
          var nv = (v0*0.01)+(inc*(this.value-25))*0.01;
          img_box.style.opacity=""+(1-nv);

       // img_box.innerHTML='<p class="content"><br/><br/><br/>'+d["condition_0"]+'</p>';
         

        }
      else if ((this.value>=50)&& (this.value<75)){
        var inc = ((v2-v1)/25);
        var nv = (v1*0.01)+(inc*(this.value-50))*0.01;
       // img_box.style.opacity="1.0";
       img_box.style.opacity=""+(1-nv);
        if((i%4)==0){
      // img_box.innerHTML='<p class="content"><br/><br/>'+d["condition_"+condi]+'</p>';
       condi++;
       if(condi >=3){
         condi=0;
       } 
        }
      } else if ((this.value>=70)&& (this.value<100)){

        var inc = ((v3-v2)/25);
        var nv = (v2*0.01)+(inc*(this.value-75))*0.01;
        img_box.style.opacity=""+(1-nv);
      
       //img_box.innerHTML='<p class="content"><br/><br/><br/>'+d["condition_1"]+'</p>';

      }
     

      }
      

 
    };
    

   

 
 /*
  var img2 = document.getElementById("img_01");
  var img3= document.getElementById("img_11");
  console.log(img2.style.opacity=""+(1.0-this.value*0.01));
  console.log(img3.style.opacity=""+(1.0-this.value*0.01));
  img2.innerHTML='<p class="content"><br/><br/><br/>If the global temperature rises by 1 °C , the population of bumblebee decreases by 60%.</p>';
  img3.innerHTML='<p class="content">The majority of bumblebee species have failed to disperse beyond their northern range limits, while suffering losses at their southern range limits</p>';
  img2.style.opacity=""+this.value*0.1;
  img3.style.opacity=""+this.value*0.1;
*/
}
}


let observers = [];

startup();

function startup() {
  let wrapper = document.querySelector(".gallery");

  // Options for the observers

  let observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: []
  };

  // An array of threshold sets for each of the boxes. The
  // first box's thresholds are set programmatically
  // since there will be so many of them (for each percentage
  // point).

  let thresholdSets = [
    [],
    [0.5],
    [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    [0, 0.25, 0.5, 0.75, 1.0]
  ];

  for (let i=0; i<=1.0; i+= 0.01) {
    thresholdSets[0].push(i);
  }

  // Add each box, creating a new observer for each

  for (let i=2; i<20; i++) {
    /*
    let boxID = "box"+i;
    let div = document.getElementById(''+boxID);
    if((i==2) || (i==7) || (i==10) || (i ==16)){

    } else {
    if(i%4==0){
      div.innerHTML = '<img src="img/bee.jpg" , width=100%, height=100%/>';
    }else if(i%4==1){
      div.innerHTML = '<img src="img/corn.jpg" , width=100%, height=100%/>';
    } else if (i%4==2){
      div.innerHTML = '<img src="img/fox_erased.jpg" , width=100%, height=100%/>';
    } else {
      div.innerHTML = '<img src="img/cow.jpg" , width=100%, height=100%/>';
    }
 
  }
      */
  /*
    let template = document.querySelector("#boxTemplate").content.cloneNode(true);
    let boxID = "box" + (i+1);

    template.querySelector(".sampleBox").id = boxID;
    wrapper.appendChild(document.importNode(template, true));
  

    // Set up the observer for this box

    observerOptions.threshold = thresholdSets[i];
    observers[i] = new IntersectionObserver(intersectionCallback, observerOptions);
    observers[i].observe(document.querySelector("#" + boxID));
    */
  }

  /*
  // Scroll to the starting position
  document.scrollingElement.scrollTop = wrapper.firstChild.getBoundingClientRect().top + window.scrollY;
  document.scrollingElement.scrollLeft = 750;
}

function intersectionCallback(entries) {
  entries.forEach(function(entry) {
    let box = entry.target;
    let visiblePct = (Math.floor(entry.intersectionRatio * 100)) + "%";

    box.querySelector(".topLeft").innerHTML = visiblePct;
    box.querySelector(".topRight").innerHTML = visiblePct;
    box.querySelector(".bottomLeft").innerHTML = visiblePct;
    box.querySelector(".bottomRight").innerHTML = visiblePct;
  });
*/
}


