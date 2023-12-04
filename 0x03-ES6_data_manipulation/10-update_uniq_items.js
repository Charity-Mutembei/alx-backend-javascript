// 10-update_uniq_items.js

/**
 * Updates the quantity of items in the map to 100 for items with an initial quantity of 1.
 * @param {Map} groceryMap - The map containing groceries with their quantities.
 * @throws {Error} - Throws an error if the input is not a map.
 */
function updateUniqueItems (groceryMap) {
  if (!(groceryMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quantity] of groceryMap.entries()) {
    if (quantity === 1) {
      groceryMap.set(item, 100);
    }
  }
}

export default updateUniqueItems;
