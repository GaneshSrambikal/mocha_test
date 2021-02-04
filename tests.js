const chai = window.chai

const expect = chai.expect

describe('getCelcius', () => {
    it('should convert F to C', () => {
        expect(getCelcius([23, 140, 212, 41])).to.deep.equal([-5, 60, 100, 5])
    })
})

describe('getSquares', () => {
    it('should get square of given number', () => {
        expect(getSquares(5)).to.deep.equal(25)
    })
})