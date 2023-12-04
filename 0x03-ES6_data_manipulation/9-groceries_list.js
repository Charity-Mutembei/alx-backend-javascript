/**
 * Returns a map of groceries with the specified items and quantities.
 * @returns {Map} - A map containing groceries with their quantities.
 */
function groceriesList () {
  const groceryItems = new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5]
  ]);

  return groceryItems;
}

export default groceriesList;
