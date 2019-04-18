// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(driver => {
    console.log(driver.name)
  });
}

function logDriversByHometown(drivers, val) {

  drivers.forEach(driver => {
    if (driver.hometown === val) {
      console.log(driver.name)
    }
  });
}

function driversByRevenue(drivers) {

  let newDrivers = [...drivers]

  const revSorter = function (driver1, driver2) {
    return driver1.revenue - driver2.revenue
  }

  return newDrivers.sort(revSorter)
}

function driversByName(drivers) {

  let newDrivers = [...drivers]

  const nameSorter = function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  }

  return newDrivers.sort(nameSorter)

}

const reduceRevenue = function (acc, driver) {
  return acc + driver.revenue
}

function totalRevenue(drivers) {
  return drivers.reduce(reduceRevenue, 0)
}

function averageRevenue(drivers) {
  return drivers.reduce(reduceRevenue, 0) / drivers.length
}