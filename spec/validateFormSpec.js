const validation = require('../js/validateForm.js');

describe('validate', function () {

    describe('validateName', function () {
        it('should return true when was invoke', function () {
            expect(validation.validateName("Andrzej")).toBe(true);
        })
    })

    describe('validateName', function () {
        it('should return false when was invoke', function () {
            expect(validation.validateName("Andrzej!")).toBe(false);
        })
    })

    describe('validateName', function () {
        it('should return false when was invoke', function () {
            expect(validation.validateName("Andrzej3")).toBe(false);
        })
    })

    describe('validateEmail', function () {
        it('should return false when was invoke', function () {
            expect(validation.validateEmail("endriu1297")).toBe(false);
        })
    })

    describe('validateEmail', function () {
        it('should return false when was invoke', function () {
            expect(validation.validateEmail("endriu1297@")).toBe(false);
        })
    })

    describe('validateEmail', function () {
        it('should return true when was invoke', function () {
            expect(validation.validateEmail("endriu1297@gmail.com")).toBe(true);
        })
    })

    describe('validatePassword', function () {
        it('should return false when was invoke', function () {
            expect(validation.validatePassword("ala")).toBe(false);
        })
    })

    describe('validatePassword', function () {
        it('should return false when was invoke', function () {
            expect(validation.validatePassword("termopile")).toBe(false);
        })
    })

    describe('validatePassword', function () {
        it('should return false when was invoke', function () {
            expect(validation.validatePassword("termopile12")).toBe(false);
        })
    })

    describe('validatePassword', function () {
        it('should return true when was invoke', function () {
            expect(validation.validatePassword("Termopile12!")).toBe(true);
        })
    })

    describe('confirm', function () {
        it('should return true when was invoke', function () {
            expect(validation.confirm("Termopile12!", "Termopile12!")).toBe(true);
        })
    })

    describe('confirm', function () {
        it('should return false when was invoke', function () {
            expect(validation.confirm("Termopile12!", "termopile12!")).toBe(false);
        })
    })


})