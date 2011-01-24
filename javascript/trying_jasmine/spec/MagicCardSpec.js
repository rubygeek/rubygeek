describe("MagicCard", function() {
  var card;

  describe("when card has been created", function() {
    beforeEach(function() {
      card = MagicCard.init("Hells Thunder", "3R");
    });

    it("should set the name", function() {
      expect(card.name).toEqual("Hells Thunder");
    });


    it("should set the mana", function() {
      expect(card.mana).toEqual("3R");

    });

    it("should set the log message", function() {
      expect(card.log()).toEqual("You played: Hells Thunder");
    });
  });

});
