let data =[];

d3.json("./DATA/CCI_data.json", function(d){
 createDIV(d);
});

function createDIV(d){
  var parent = document.getElementById('bg');
  var n =1;

  for (var i=0; i<d.length; i++ ){
    var s_d= d[i];
    var s_d_len= s_d["image count"];
    if(s_d_len !=null){
      var file_name=s_d["file_name"];
      
      if((file_name=="1_1_1_")||(file_name=="1_2_2_")|| (file_name=="2_1_1_")||(file_name=="3_1_1_")){
        for (var j=1; j<11 ;j++){
          var g =document.createElement('div');
          g.setAttribute('id', "box"+n);
          g.setAttribute('class', "image");
          var file_name_n=file_name+"00000"+j;
          g.innerHTML='<img class="lazy-image" data-src="./img_object/'+file_name_n+'.jpg">';
          parent.appendChild(g);
          n++;

        }
      }


    }
   
  }

};



var projectText = "We might be aware of the importance of climate changes. We might also be aware of the seriousness of global warming. We, as civilized human beings, might be aware of polar bear  starvings that melting glaciers affect. We are aware of the problem. Aren’t we? If so, can you explain how climate change will destroy our daily lives? Can you describe what the picture of polar bears floating in melting seas means to our foods? Can you imagine national parks without forest birds? Medias, researches and scholar papers about climate change warm us how fast our planet will be crushed. Some investigations suggest solutions to delay the time as much as we can, but honestly, many of us can not imagine how global temperature increase of 2.0 will change  our ordinary lives and neighbors. For a closer understanding of climate change impacts,  this project, “ Climate Change Impact Filter_things will disappear, things might remain on us” shows what we might lose when sea level rises.";



