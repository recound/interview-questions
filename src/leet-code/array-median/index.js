

const findMedianSortedArrays = function(nums1, nums2) {
    let result = []
    let i = 0;
    let k = 0;
    while(i + k <= nums1.length + nums2.length - 1) {
        if (nums1[i] === undefined) {
            result = result.concat(nums2.slice(k))
            k = nums2.length
        }
        if (nums2[k] === undefined) {
            result = result.concat(nums1.slice(i))
            i = nums1.length
        }

        if (nums1[i] < nums2[k]) {
            result.push(nums1[i])
            i++;
        }
        if (nums1[i] > nums2[k]) {
            result.push(nums2[k])
            k++;
        }
        if (nums1[i] === nums2[k] && nums2[k] !== undefined) {
            result.push(nums2[k])
            result.push(nums1[i])
            k++;
            i++;
        }
    }
    return result.length % 2 === 0 ? (result[result.length / 2] + result[result.length / 2 - 1]) / 2 : result[Math.floor(result.length / 2)]
};

module.exports = { findMedianSortedArrays };