import selectionSort from "./sorting/selection-sort.js";

const list = [5, 4, 3, 2, 1];
console.log("Original list:\t", list);

let ordered = selectionSort(list);
console.log("Selection Sort:\t", ordered);
