// import {
//   addLocation,
//   updateLocation,
//   getWeatherData,
//   deleteLocation,
//   getAllCities,
//   crudAppend
// } from "./modules/crud.mjs";
import { createDb,deleteDb, deleteLocation
,updateDb,readDb
 } from "./modules/crud.mjs";

console.log(deleteLocation("Kolkata"));
// console.log(getWeatherData("bihar"));

// const loc = {
//   country: "India",
//   name: "Kashmir",
//   region: "Kashmir",
// };
// const cur = {
//   feelslikeC: 29.8,
//   tempC: 32,
// };

// addLocation(loc, cur);

// location.countrpy = "l";
// console.log(location);

// console.log(getAllCities());
// deleteLocation("bihar")
// console.log(weatherData);