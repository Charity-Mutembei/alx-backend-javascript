function hasValuesFromArray (set, arr) {
  // Check if every element in the array exists in the set
  return arr.every((element) => set.has(element));
}

export default hasValuesFromArray;
