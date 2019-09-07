let data =[];
let raw_data;

d3.json("./DATA/CCI_data.json", function(d){
 createDIV(d);
 raw_data=d;
 return raw_data;
});

/*
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
*/
function createDIV(d){
  var parent = document.getElementById('bg');
  var n =1;
  var count=0;
  var species_count=1000;
  data=[];

 while(count <species_count){
  let species_index = Math.floor(Math.random()*d.length);
  var species_data=d[species_index];
  var species_file_name=species_data["file_name"]; 
  var species_images_len=species_data["image_count"];
  if((species_images_len != null)){
   // if((species_file_name == "1_1_1_")){
    let image_index = 1+Math.floor(Math.random()*(species_images_len+1));
   // var image_file_name=species_file_name+NumberWithLeadingZeroes(image_index)+".jpg";
    var image_file_name=""+species_file_name+image_index+".jpg";
    var shuffle={"species_index": species_index,",image_index":image_index,"file_name":image_file_name};
    data.push(shuffle);
    count++;
  }
}





for (var i=0; i<data.length; i++ ){
  var shuffle_d = data[i];
  var shuffle_index=shuffle_d.species_index;
  var shuffle_image_file= shuffle_d.file_name;

  var g =document.createElement('div');
  g.setAttribute('id', ""+(i+1));
  g.setAttribute('class', "image");
  var w = Math.floor(Math.random()*100+150);
  //g.setAttribute('width', w);
  w=200;
//shuffle_image_file='1_1_1_000001.jpg';
  var src = './img_object/'+shuffle_image_file;
 
 //shuffle_d= getMeta(src, shuffle_d );

 var t = new Image();
 t.src=src;
 //var fixedH=Math.floor(Math.random()*300+200);
 /*
 if(t.width!=0){
 fixedH = (t.height/t.width)*200;
}
*/

 //getImageSize($(src), function(width, height) {
  //console.log(width + ',' + height);
//});
  //g.setAttribute('width', 200);
// g.setAttribute('height', fixedH);
 // g.setAttribute('style',"height:"+ fixedH+"px;"); 
  g.setAttribute('onmouseover','mouseOver(event)');
  g.setAttribute('onmouseout','mouseOut(event)');
  //g.innerHTML='<div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%"></svg></div>'
//  g.innerHTML='<img class="lazy-image" data-src="./img_object/'+shuffle_image_file+'">';

//g.innerHTML='<img class="lazy-image" id="img_'+i+1+'" style="width:'+w+'px, height:'+fixedH+'px" opacity:1.0, data-src="./img_object/'+shuffle_image_file+'">';
  //g.innerHTML='<img class="lazy-image" id="img_'+i+1+'" style="width:'+w+'px, height:'+fixedH+'px", opacity:1.0, data-src="./img_object/'+shuffle_image_file+'">';

   g.innerHTML='<img class="lazy-image" data-src="./img_object/'+shuffle_image_file+'">';
  parent.appendChild(g);
  //g.innerHTML='<img class="lazy-image" id="img_'+i+1+'" style="width:'+w+'px, height:'+fixedH+'px" data-src="./img_object/'+shuffle_image_file+'">';

  /*
  //SVG
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute('width', 200);
  svg.setAttribute('height', fixedH);
  svg.setAttribute('style',"height:"+ fixedH+"px;");
  g.appendChild(svg);
 */
}

/*
function getMeta(url, d){   
  var img = new Image();
  var thisW=0;
  var thisH=0;
  img.onload = function(){
    d.width=this.width;
    d.height=this.height;
    var fixedH = (d.height/d.width)*200;
    d.fixedH=fixedH;
  };
  img.src = url;
  return d;
}
*/

/*



  for (var i=0; i<d.length; i++ ){
    var s_d= d[i];
    var file_name=s_d["file_name"];
    var s_d_len= s_d["image count"];
    if((file_name !=null) || (s_d_len !=null)){
      
          for (var j=1; j<21 ;j++){
          var g =document.createElement('div');
          g.setAttribute('id', "box"+n);
          g.setAttribute('class', "image");
          var file_name_n =file_name+NumberWithLeadingZeroes(j);
         // var file_name_n=file_name+"00000"+j;
          g.innerHTML='<img class="lazy-image" data-src="./img_object/'+file_name_n+'.jpg">';
          parent.appendChild(g);
          n++;
      }


    }
   
  }
*/

};

function NumberWithLeadingZeroes (n)
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

var projectText = "We might be aware of the importance of climate changes. We might also be aware of the seriousness of global warming. We, as civilized human beings, might be aware of polar bear  starvings that melting glaciers affect. We are aware of the problem. Aren’t we? If so, can you explain how climate change will destroy our daily lives? Can you describe what the picture of polar bears floating in melting seas means to our foods? Can you imagine national parks without forest birds? Medias, researches and scholar papers about climate change warm us how fast our planet will be crushed. Some investigations suggest solutions to delay the time as much as we can, but honestly, many of us can not imagine how global temperature increase of 2.0 will change  our ordinary lives and neighbors. For a closer understanding of climate change impacts,  this project, “ Climate Change Impact Filter_things will disappear, things might remain on us” shows what we might lose when sea level rises.";



