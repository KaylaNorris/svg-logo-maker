//<g></g> to group the shape and text together so to avoid fill override 
const shapes = {
    circle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><g><circle cx="100" cy="100" r="100" /></svg></g>`,
    square: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><g><rect width="200" height="200" /></svg></g>`,
    triangle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><g><polygon points="100,10 40,190 190,190" /></svg></g>`,
};

module.exports = shapes;
