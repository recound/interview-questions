const {rob} = require('./index');



describe('House robber', () => {
    it('General cases 1', () => {
        expect(rob([1,2,3,4]))
            .toBe(6);
    })
    it('General cases 2', () => {
        expect(rob([1,3,1,1,3]))
            .toBe(6);
    })
})
