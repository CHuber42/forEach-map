  $(document).ready(function() {
    $("form#groceryList").submit(function(event) {
      event.preventDefault();
      var items = $("#groceries").val().split(",");

      var capItems = items.map(function(element){
        return element.toUpperCase();
      });
    
      capItems.sort();

      capItems.forEach(element => {
        var newEntry = document.createElement("li");
        newEntry.textContent = element;
        $("#sortedGroceries").append(newEntry);
        
      });

    });

    $("form#wordplay").submit(function(event) {
      event.preventDefault();
      var words = $("#sentenceEntry").val().split(" ");
      var threeOrMore = words.filter(word => word.length >= 3);
  //  words.forEach(element => {
  //      if (element.length >= 3) {
  //        threeOrMore.push(element);
  //      }
  //   });
      console.log(threeOrMore);
      var finalSentence = (threeOrMore).reverse().join(" ");
      $("#finalWord").text(finalSentence);
    
    }); //wordplay ends here
      
    var suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
    var ranks = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
    var deck = [];

    suits.forEach(suit => {
    ranks.forEach(rank => {
     
        var card = (rank + " of " + suit);
        deck.push(card);
      });
    }); 

    deck.forEach(card => {
      var cardEntry = document.createElement("li");
      cardEntry.textContent = card;
      $("#cards").append(cardEntry);
    });
    
    
 $("#wordRepeats").submit(function(event) {
  event.preventDefault();

  var words = $("#paragraphEntry").val().split(" ");
  var someDict = {};

  words.forEach(word => {
    
    if (someDict[word] === undefined){
      someDict[word] = 1;
    } //if
    else { 
        someDict[word] += 1;
    } //else
    }); //for-each
  console.log(someDict);
});
    
  });


 // wordCount [
 //   
 //   newdict = {};
//    newdict["first"] = [2, 9, 12, 14];
 //   newdict["Second"] = 4;
//
 //   if someword not in dict:
//    newdict[someword] = counter (1);
 //   else
 //   newdict[someword] value += 1
