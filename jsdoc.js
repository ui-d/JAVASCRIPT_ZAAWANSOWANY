/**
 * Function accepts details about player
 * and return object with all properties
 *
 * @param {string} name Player's nickname
 * @param {number} age Player's age'
 * @param {boolean} isActive Player's active status
 * @return {Object}
 */
function createPlayer(name, age, isActive) {
  return { name, age, isActive };
}

createPlayer("Flamingo", 35, true);
