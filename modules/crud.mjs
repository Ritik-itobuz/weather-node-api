import { weatherData } from "./weatherDb.mjs";
import * as fs from 'node:fs';
import * as path from 'path';
// const path=require('path');
// const dirPath = path.join(__dirname, '/weatherDb.txt');
const filePath = new URL('weatherDb.txt', import.meta.url);

function createDb(countryName,tempValue,feelsValue){
    weatherData.push({
        location:countryName,
        temp:tempValue,
        feelsLike:feelsValue
    });
    const data=JSON.stringify(weatherData); 
    fs.writeFileSync(filePath, data);
}


function deleteLocation(city) {
  let index = weatherData.findIndex(
    (item) => item.location.name.toLowerCase() == city.toLowerCase()
  );
  if (index > -1) {
    weatherData.splice(index, 1);
    fs.writeFile(filePath,JSON.stringify(weatherData),(err)=>{
      console.log("Deleted Successfully");
  })
  
  }
  else{
    console.log(err);
  }
  

};
function deleteDb(countryName){
   for(let i=0;i<weatherData.length;i++){
    if(weatherData[i].location==countryName){
        weatherData.splice(i,1);
    }
   }
   fs.writeFile(filePath,JSON.stringify(weatherData),(err)=>{
    console.log("Deleted Successfully");
   })
}

function updateDb(countryName,newTemp,newFeelsValue) {
    for(let i=0;i<weatherData.length;i++){
        if(weatherData[i].location==countryName){
            weatherData[i].location=countryName;
            weatherData[i].temp=newTemp;
            weatherData[i].feelsLike=newFeelsValue;
        }
       }
    
       fs.writeFile(filePath,JSON.stringify(weatherData),(err)=>{
        console.log("Update Successfull");
       })
}


function readDb() {
    fs.readFile(filePath,"UTF-8",(err,data)=>{
        console.log(data);
    })
}


// console.log('old', weatherData);

 createDb("india",13,19);
//  createDb("china",23,29);
//  deleteDb("india");
// updateDb("india",28,13);
readDb();
// console.log(weatherData);

//Reading the weatherDb.txt file.

//  fs.readFile("weatherDb.txt", "utf8",(err,data)=>{
//     console.log(data);
//  });

export {createDb,deleteDb,updateDb,readDb,deleteLocation};








// import { weatherData } from "./weatherDb.mjs";
// import * as fs from 'node:fs'
// // console.log(weatherData);

// export const getWeatherData = (location) => {
//   let result = weatherData.find(
//     (item) => item.location.name.toLowerCase() == location.toLowerCase()
//   );
//   return result;
// };



// export const addLocation = (location, current) => {
//   let isPresent = false;
//   for (let i = 0; i < weatherData.length; i++) {
//     if (weatherData[i].location.name == location.name) {
//       isPresent = true;
//       return;
//     }
//     if (!isPresent) {
//       weatherData.push({ location, current });
//       return;
//     }
//   }
// };

// export const updateLocation = (city, obj) => {
//   let index = weatherData.findIndex(
//     (item) => item.location.name.toLowerCase() == city.toLowerCase()
//   );
//   if (index > -1) {
//     weatherData.splice(index, 1, obj);
//   } else {
//     console.log("City not found");
//   }
// };

// export const deleteLocation = (city) => {
//   let index = weatherData.findIndex(
//     (item) => item.location.name.toLowerCase() == city.toLowerCase()
//   );
//   if (index > -1) {
//     weatherData.splice(index, 1);
//     console.log(weatherData);
//   } else {
//     console.log("City not found");
//   }
// };

// export const getAllCities = () => {
//   let cities = [];
//   weatherData.forEach((item) => {
//     cities.push(item.location.name);
//   });
//   return cities;
// };


// export function crudAppend (){
//   fs.appendFile('./storeData.txt',"data without conlsoe", (error)=>{
//       if(error){
//           console.log(error);
//       }
//       else {
//           console.log("\n File Contents:");
//           fs.readFileSync("storeData.txt", "utf8");
//       }
//   })
// }