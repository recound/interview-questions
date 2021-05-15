/*
Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
write a method to rotate the image by 90 degrees. Can you do this in place?
* */

/*
* |(0,0)|(0,1)|...|(0,n-1)|
* |(1,0)|(1,1)|...|(1,n-1)|
* ...       ...        ...
* |(n-1,0)|(n-1,1)|...|(n-1,n-1)|
*
* rotation by 90 deg:
* (0,0) -> (0,n-1); (0,1) -> (1,n-1); (0,k) -> (k,n-1); (j,k) -> (k,n-1-j);
* pattern: (j,k) -> (k,n-1-j);
* pattern for full circle (4 steps): (j,k) -> (k,n-1-j);
*                                    (k,n-1-j) -> (n-1-j,n-1-k);
*                                    (n-1-j,n-1-k) -> (n-1-k,j);
*                                    (n-1-k,j) -> (j,k);
* to do the rotation in place, we are going to swap each pixel value with the other,
* to make full circle, we need to make 4 swaps each turn.
* it's clear, how we should do iterations so they won't repeat:                    where k <= n/2, k in int
* (0,0),(0,1),(0,2)...(0,n-2),(1,1),(1,2),(1,3)...(1,n-3),(2,2),(2,3)...(2,n-4)...(k,k)(k,k+1)...(k,n-2-k)
*
* */

function rotateTheImage(matrix) {
    if (!matrix || !matrix.length) {
        throw new Error('Input type error: matrix NxN is expected')
    }
    const n = matrix.length;
    for (let j = 0; j <= (matrix.length - 1) / 2; j++) {
        for (let k = 0; k <= matrix.length - 2 - j; k++) {
            if (j > k) continue;
            const buffer = matrix[j][k];
            matrix[j][k] = matrix[n-1-k][j];
            matrix[n-1-k][j] = matrix[n-1-j][n-1-k];
            matrix[n-1-j][n-1-k] = matrix[k][n-1-j];
            matrix[k][n-1-j] = buffer;
        }
    }
    return matrix;
}

module.exports = { rotateTheImage }