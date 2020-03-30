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
      var threeOrMore = [];

      words.forEach(element => {
        if (element.length >= 3) {
          threeOrMore.push(element);
        }
                
      });
      console.log(threeOrMore);
      var finalSentence = (threeOrMore).reverse().join(" ");
      $("#finalWord").text(finalSentence);
    
    });
      
 
  });