function logDriverNames(array) {
    return array.forEach(function (el) {
        console.log (el.name)
    })   
}

function logDriversByHometown(array, location) {
    array.forEach(function(el) {
        if (el.hometown === location) {
            console.log(el.name)
        }
    } )
}

function driversByRevenue(array) {
    const newArray = [...array]

    return newArray.sort(function (a, b) {
        return a.revenue - b.revenue
    })

}

function driversByName(array) {
    const newArray = [...array]

    return newArray.sort(function (a,b) {
        return a.name.localeCompare(b.name)
    })
}

const addRevenue = function(agg, el, i, arr) {
    return agg + el.revenue
}

function totalRevenue(array) {
    return array.reduce(addRevenue, 0)
}

function averageRevenue(array) {
    const total = totalRevenue(array)

    return total / array.length
}