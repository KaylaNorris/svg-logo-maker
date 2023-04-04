const shapes = require('./shapes.js');

describe ('shapes', () => {
    it('should create a circle', () => {
        expect(shapes.circle).toEqual('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><g><circle cx="100" cy="100" r="100" /></svg></g>');
    });
    it('should create a square', () => {
        expect(shapes.square).toEqual('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><g><rect width="200" height="200" /></svg></g>');
    });
    it('should create a triangle', () => {
        expect(shapes.triangle).toEqual('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><g><polygon points="100,10 40,190 190,190" /></svg></g>');
    });
});

