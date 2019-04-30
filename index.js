// Code your solution in this file!
function logDriverNames(driver) {
  for (const el of driver){
  console.log(el.name)}
}
function logDriversByHometown(drivers, location){
  drivers.foreach(fucntion (driver){
    if(driver.hometown === location){
    console.log(driver.name)
    }
  });
}
