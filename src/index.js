module.exports = function towelSort(matrix) {
    if (matrix != undefined) {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 === 1) {
                matrix[i].reverse();
            }
        }
        let merged = [].concat.apply([], matrix);
        return merged;
    } else {
        return [];
    }
};
