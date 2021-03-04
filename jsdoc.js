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

// Class example

class Player {
  /**
   * @param {string} name Player's nickname
   * @param {number} age Player's age'
   * @param {boolean} isActive Player's active status
   */
  constructor(name, age, isActive) {
    this.name = name;
    this.age = age;
    this.isActive = isActive;
  }
}

let newPlayer = new Player("Dawid", "21", false);

/**
 * Output details about player
 *
 * @param {Player} player
 */
function createNewPlayer(player) {
  console.log(player);
}
