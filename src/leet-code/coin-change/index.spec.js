"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('Coin Change', () => {
    it('General cases 1', () => {
        expect((0, index_1.coinChange)([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24], 9999)).toBe(-1);
    });
    it('General cases 2', () => {
        expect((0, index_1.coinChange)([328, 122, 26, 397, 252, 455, 250, 252], 7121)).toBe(17);
    });
});
