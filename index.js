// Code your solution in this file!
function logDriverNames(drivers) {
  return drivers.forEach(function (el) {
      console.log(el.name)
  })
}

function logDriversByHometown(drivers, location) {
   drivers.forEach(function(el) {
    if (el.hometown === location) {
    console.log(el.name)
  }
  })
}
function driversByRevenue(drivers) {
  newDrivers = [...drivers]

  return newDrivers.sort(function (a, b) {
    return a.revenue - b.revenue
  })
}
function driversByName(drivers) {
  newDrivers = [...drivers]

  return newDrivers.sort(function (a, b) {
    return a.name.localeCompare(b.name)
  })
}

const addRevenue = function(agg, el, i, arr) {
  return agg + el.revenue
}
function totalRevenue(drivers) {
  return drivers.reduce(addRevenue, 0)
}
function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length
}
