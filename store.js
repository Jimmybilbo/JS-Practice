// Store Selection Map
var store = new Map ([
    ["album1", 12.99],
    ["album2", 14.99],
    ["album3", 9.99],
    ["album4", 19.99],
    ["tshirt", 19.99],
    ["coffCup", 6.99]
])


// Testing 
function addCart(index) {
    if (index === 0) { console.log(store.get("album1")) }
    else if (index === 1) { console.log(store.get("album2")) }
    else if (index === 2) { console.log(store.get("album2")) }
    else if (index === 3) { console.log(store.get("album2")) }
    else if (index === 4) { console.log(store.get("tshirt")) }
    else if (index === 5) { console.log(store.get("coffCup")) }
}
