function mergeSort(array) {
    let arrayCopy = array.slice();
    if (arrayCopy.length === 1) {
        return arrayCopy;
    }
    let mid = Math.floor(arrayCopy.length / 2);
    let sortedArrayLeft = mergeSort(arrayCopy.slice(0, mid));
    let sortedArrayRight = mergeSort(arrayCopy.slice(mid, array.length));

    let i = 0;
    let j = 0;
    let k = 0;

    while (i < sortedArrayLeft.length && j < sortedArrayRight.length) {
        if (sortedArrayLeft[i] < sortedArrayRight[j]) {
            arrayCopy[k++] = sortedArrayLeft[i++];
        } else {
            arrayCopy[k++] = sortedArrayRight[j++];
        }
    }

    for (; i < sortedArrayLeft.length; i++) {
        arrayCopy[k++] = sortedArrayLeft[i];
    }

    for (; j < sortedArrayRight.length; j++) {
        arrayCopy[k++] = sortedArrayRight[j];
    }
    return arrayCopy;
}

console.log(mergeSort([6, 4, 2, 1, 7, 9, 11, 4, 3, 8, 5]));
