angular.module("quoteBook").service("mainService", function(localStorageService) {
	var quotes = [
    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
  ];
  
  this.getQuotes = function() {
  	return quotes;
  }

  this.addQuote = function(newQuote) {
  	console.log(newQuote)
  	if (newQuote.text && newQuote.author) {
  		quotes.push(newQuote);
  		console.log(quotes)
  		return quotes;
  	}
  	else {
  		return false;
  	}	
  }

  this.removeQuote = function(quoteToRemove) {
  	for (var i = 0; i < quotes.length; i++) {
  		if (quotes[i].text.toLowerCase() === quoteToRemove.toLowerCase()) {
  			quotes.splice(i--, 1);
  		}
  	}
  	localStorageService.store("quotes", quotes)
  };


  this.setQuotes = function(quotesArr) {
  	quotes = quotesArr
  }
})