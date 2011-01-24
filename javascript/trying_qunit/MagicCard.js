 var MagicCard = {
  name: null,
  mana: null,
  power: 0,
  toughness: 0,

  init: function(name, mana, power,toughness) {
    this.name = name;
    this.mana = mana;
    this.power = power;
    this.toughness = toughness;
    return this;
  },
  log: function() {
    return "You played: " + this.name; // + " and cost " + this.mana + " mana";
  }

};

