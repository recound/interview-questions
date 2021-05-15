const { rotateTheImage } = require('./index');

describe('rotateTheImage tests', () => {
    it('General cases', () => {
        expect(rotateTheImage([[1]])).toStrictEqual([[1]])
        expect(rotateTheImage([
            [1,2,3,4],
            [5,6,7,8],
            [9,10,11,12],
            [13,14,15,16]
        ])).toStrictEqual([
            [ 13, 9, 5, 1 ],
            [ 14, 10, 6, 2 ],
            [ 15, 11, 7, 3 ],
            [ 16, 12, 8, 4 ] ])
    })
})