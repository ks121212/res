async function getdata(){
var res=await fetch("https://restcountries.com/v2/all");
var res1=await res.json();

for(var i=0;i<res1.length;i++){
  try{
    weatherdata(res1[i].latlng[0],res1[i].latlng[1])
  }

catch(error){
  console.log(error);
}
}
}
async function weatherdata(lat,lon){
  try{
    if(lon==undefined) throw new Error("Invaid coordinates");
    console.log(lat,lon);
    let res2=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=62901df84eeb8de26224cd4773c1c35a`);
    let res3=await res2.json();
    console.log(`${res3.main.temp}`);
  }catch(error){
    console.log(error);
  }
}

getdata();