const chunkArray = (arr, length) => {
    const result = [];
    let i = 0;
    while (i < arr.length) {
        result.push(arr.slice(i, i + length))
        i += length;
    }
    return result;
}

module.exports = chunkArray;