// Any serious ecosystem has a food chain longer than a single link. 
// Write another critter that survives by eating the herbivore critter. 
// You’ll notice that stability is even harder to achieve now that there 
// are cycles at multiple levels. Try to find a strategy to make the ecosystem 
// run smoothly for at least a little while.

// One thing that will help is to make the world bigger. This way, local 
// population booms or busts are less likely to wipe out a species entirely, and 
// there is space for the relatively large prey population needed to sustain a 
// small predator population.

//CODE AUTHOR = UBOAT46

//code should be run at the page for the canvas interface to look good
//http://eloquentjavascript.net/code/#7.2
function SmartPlantEater() {
    this.energy = 35;
    this.direction = 'n';
}

SmartPlantEater.prototype.act = function(view) {
  var space = view.find(" ");
  if (this.energy > 70 && space)
    return {type: "reproduce", direction: space};
  var plants = view.findAll("*");
  if (plants.length > 1)
    return {type: "eat", direction: randomElement(plants)};
  if (view.look(this.direction) != " " && space)
    this.direction = space;
  return {type: "move", direction: this.direction};
};

function Tiger() {
  this.energy = 50;
  this.direction = 'e';
}

Tiger.prototype.act = function(view) {
  var space = view.find(" ");
  if (this.energy > 100 && space)
    return {type: "reproduce", direction: space};
  var prey = view.findAll("O");
  if (prey.length > 1)
    return {type: "eat", direction: randomElement(prey)};
  if (view.look(this.direction) != " " && space)
    this.direction = space;
  return {type: "move", direction: this.direction};
};

animateWorld(new LifelikeWorld(
  ["####################################################",
   "#                 ####         ****              ###",
   "#   *  @  ##                 ########       OO    ##",
   "#   *    ##        O O                 ****       *#",
   "#       ##*                        ##########     *#",
   "#      ##***  *         ****                     **#",
   "#* **  #  *  ***      #########                  **#",
   "#* **  #      *               #   *              **#",
   "#     ##              #   O   #  ***          ######",
   "#*            @       #       #   *        O  #    #",
   "#*                    #  ######                 ** #",
   "###          ****          ***                  ** #",
   "#       O                        @         O       #",
   "#   *     ##  ##  ##  ##               ###      *  #",
   "#   **         #              *       #####  O     #",
   "##  **  O   O  #  #    ***  ***        ###      ** #",
   "###               #   *****                    ****#",
   "####################################################"],
  {"#": Wall,
   "@": Tiger,
   "O": SmartPlantEater, // from previous exercise
   "*": Plant}
));