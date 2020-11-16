export default (list) => {
    let minIndex = 0;
    let toChange = null;

    for (let i = 0; i < list.length; i++) {
        minIndex = i;

        for (let j = i; j < list.length; j++) {
            if (list[j] < list[minIndex]) {
                minIndex = j;
            }
        }

        if (list[i] > list[minIndex]) {
            toChange = list[i];
            list[i] = list[minIndex];
            list[minIndex] = toChange;
        }
    }

    return list;
}
