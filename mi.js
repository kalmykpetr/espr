// Example item object
let item = {
    x: 10,
    y: 20,
    x2: 50,
    y2: 70
};

// Example bounds object with a set method
let bounds = {
    set: function(x1, y1, x2, y2) {
        // Logic to set bounds
        return {x1, y1, x2, y2};
    }
};

// Example boundStroke function
function boundStroke(bounds, item) {
    // Logic to handle the bound stroke
    return bounds;
}

// Using the provided code snippet
let result = boundStroke(bounds.set(
    x1 = item.x || 0, 
    y1 = item.y || 0, 
    item.x2 != null ? item.x2 : x1, 
    item.y2 != null ? item.y2 : y1), 
    item);

console.log(result); // Outputs: {x1: 10, y1: 20, x2: 50, y2: 70}
