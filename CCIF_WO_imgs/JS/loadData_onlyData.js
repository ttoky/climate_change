/// shuffle grouping air : 0~7 / on the ground 8~34 / under the ground 35 ~ 42 / water 43 ~ 45
let data_groupA =[];
let data_groupB=[];
let data_groupC =[];
let data_groupD=[];

var sA=[];
var sB=[];
var sC=[];
var sD=[];

//let data=[];

let raw_data;
var species_count=800;


d3.json("./DATA/CCI_data_group.json", function(d){
 createDataset(d);
 raw_data=d;
 return raw_data;
});


function shuffle_data(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function createDataset(d){
  raw_data=d;
  
  //shuffle 
  for (var i=0; i<species_count; i++){
    sA[i]=i%7;
    sB[i]=i%37;
    sC[i]=i%8;
    sD[i] =i%3;
  }
  sA=shuffle_data(sA);
  sB=shuffle_data(sB);
  sC=shuffle_data(sC);
  sD=shuffle_data(sD);
  
    /*
   for(var count=0; count<species_count; count++){
    
  let species_index = Math.floor(Math.random()*d.length);
  var species_data=d[species_index];
  var species_file_name=species_data["file_name"]; 
  var species_images_len=species_data["image_count"];
  var sq_img_count = species_data["square_image_count"];
  var condition_1=species_data["condition_1"];
  var condition_1_percent=species_data["0.5C"];
  
  if((species_images_len != null) && (species_data["group"]='air')){
   let image_index = 1+Math.floor(Math.random()*(sq_img_count+1));
    var image_file_name=""+species_file_name+image_index+".jpg";
    var shuffle={"species_index": species_index,"species_name":species_data["category3"],"file_name":species_file_name, "sq_img_count":sq_img_count, "condition_1":condition_1, "condition_1_percent":condition_1_percent};
   data.push(shuffle);
   count++;
  }

}
  */
};

/*
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

*/


