
const logDriverNames = function(drivers){
  drivers.forEach(function (driver){
    console.log(driver.name);
  });
};

const logDriversByHometown = function(drivers, hometown){
  drivers.forEach(function (driver){
    if(driver.hometown == hometown){
      console.log(driver.name);
    }
  });
};
const driversByRevenue = function(drivers){
   return drivers.slice().sort(function (One,Two){
      return One.revenue - Two.revenue;
    });
};

const driversByName = function (drivers) {
  return drivers.slice().sort(function (One, Two) {
    return One.name.localeCompare(Two.name);
  });
};
const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
