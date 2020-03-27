function CakeOldSchool(name, ingredients, baking) {
  if (!(this instanceof CakeOldSchool))
    throw new Error("Hey tu as oublié le new ! ");
  this.name = name;
  this.ingredients = ingredients;
  this.baking = baking;
}

const oneOtherCake = new CakeOldSchool(
  "old school",
  ["foo", "bar", "baz"],
  "0min"
);

console.log(oneOtherCake);

CakeOldSchool.prototype.displayBakingTime = function(params) {
  console.log(this.baking);
};

console.log("$$$$$$$$$$$$$$$$");
oneOtherCake.displayBakingTime();
console.log("$$$$$$$$$$$$$$$$");
