/* This fn reduce n lowest element from array of number. 
If there are more elements with a given number, only one should be removed (the one with the lowest index). 
Result array must have the same order. */

function reduceNFromArray(arr, n) {
  if (n > arr.length) {
    return [];
  } else if (n <= 0) {
    return arr;
  } else {
    const tempArr = [];
    arr.forEach((el) => tempArr.push(el));
    const finalTab = new Array();
    const sortTab = arr.sort();
    let filterSortTab = sortTab.filter(
      (element, index) => element !== sortTab[index - 1]
    );
    filterSortTab = filterSortTab.filter((element, index) => index < n);
    tempArr.forEach((element, index) => {
      if (filterSortTab.includes(element)) {
        filterSortTab = filterSortTab.filter((e) => e !== element);
      } else {
        finalTab.push(element);
      }
    });
    return finalTab;
  }
}

console.log(reduceNFromArray([1, 2, 3, 4, 3, 5, 7], 3));
console.log(reduceNFromArray([1, 4, 3, 7, 1, 5, 1], 3));