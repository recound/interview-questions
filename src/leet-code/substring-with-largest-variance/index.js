



function cadaneAlg(_arr) {
    const arr = _arr.split('').map(char => char === 'a' ? 1 : -1);
    let localMax = 0;
    let globalMax = 0;
    let hasAllOnce = true;
    for (let i = 0; i < arr.length; i++) {
        if (localMax + arr[i] < 0) {
            hasAllOnce = true;
        } else {
            hasAllOnce = arr[i] === -1 ? false : hasAllOnce;
        }
        localMax = Math.max(0, localMax + arr[i]);
        if (arr.length > localMax && localMax > globalMax && hasAllOnce) {
            globalMax = localMax-1;
        }
        if (hasAllOnce) continue;
        globalMax = Math.max(localMax, globalMax);
    }
    return globalMax;
}

/**
 * @param {string} s
 * @return {number}
 */
var largestVariance = function(s) {
    let emptyAccum = {
        localMax: 0,
        globalMax: 0,
        hasAllOnce: true,
    }
    let varianceMatrixExample = new Map();
    for (let i = 0; i < s.length; i++) {
        varianceMatrixExample.set(s[i], emptyAccum);
    }
    if (varianceMatrixExample.size === 1) return 0;
    let varianceMatrix = new Map();
    for (const [key, value] of varianceMatrixExample) {
        let accum = new Map(varianceMatrixExample);
        accum.delete(key)
        varianceMatrix.set(key, accum);

    }
    if (varianceMatrix.size === s.length) return 0


    let ultMax = -Infinity;

    const performStepUpdate = (currentAccum, updateMap, mapKey, stepValue) => {
        const { localMax: _localMax, globalMax: _globalMax, hasAllOnce: _hasAllOnce } = currentAccum;
        let localMax = _localMax
        let globalMax = _globalMax
        let hasAllOnce = _hasAllOnce;
        if (localMax + stepValue < 0) {
            hasAllOnce = true;
        } else {
            hasAllOnce = stepValue === -1 ? false : hasAllOnce;
        }
        localMax = Math.max(0, localMax + stepValue);
        if (s.length > localMax && localMax > globalMax && hasAllOnce) {
            globalMax = localMax-1;
            ultMax = Math.max(ultMax, globalMax);
        }
        if (!hasAllOnce) {
            globalMax = Math.max(localMax, globalMax);
            ultMax = Math.max(ultMax, globalMax);
        }
        updateMap.set(mapKey, { localMax, globalMax, hasAllOnce })
    }
    // finish prep the data;

    for (let i = 0; i < s.length; i++) {
        for (const [key, keyVariance] of varianceMatrix) {
            if (s[i] === key) {
                for (const [_key, _value] of keyVariance) {
                    performStepUpdate(_value, keyVariance, _key, 1)
                }
            } else {
                performStepUpdate(keyVariance.get(s[i]), keyVariance, s[i], -1)
            }

        }

    }
    return ultMax
};

/*
"aababbb"

+1,+1,-1,
2
*/
function cadaneAlg(_arr) {
    const arr = _arr.split('').map(char => char === 'a' ? 1 : -1);
    let localMax = 0;
    let globalMax = 0;
    let currentLine = [];
    for (let i = 0; i < arr.length; i++) {
        if (localMax + arr[i] < -1) {
            currentLine = [];
        } else {
            if (currentLine.length === 0) {
                currentLine.push(localMax)
            }
            currentLine.push(arr[i])
        }
        localMax = Math.max(-1, localMax + arr[i]);
        if (currentLine.filter(x=> x!== 0).every(x => x === 1)) continue;
        globalMax = Math.max(localMax, globalMax);
    }

    return globalMax;
}

module.exports =  { cadaneAlg };
