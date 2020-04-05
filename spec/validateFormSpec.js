const validateName = require('../js/validateForm.js');

describe('validateName', function () {
    it('should return Hello World when was invoke', function () {
        expect(validateName("Andrzej")).toBe("Andrzej");
    })

    describe('validateName', function () {
        it('should return Hello World when was invoke', function () {
            expect(validateName("Andrzej!")).toBe(false);
        })
    })

    describe('validateName', function () {
        it('should return Hello World when was invoke', function () {
            expect(validateName("Andrzej3")).toBe(false);
        })
    })
})