angular.module("quoteBook").controller("mainController", function($scope, mainService, localStorageService) {


	var local = localStorageService.get("quotes")
	console.log(local);
	if (local) {
		$scope.quotes = localStorageService.get("quotes")
		mainService.setQuotes($scope.quotes);
	}
	else {
		$scope.quotes = mainService.getQuotes();
	}

		$scope.addQuote = function(){
		  var newQuote = {
		    text:$scope.newQuoteText,
		    author:$scope.newQuoteAuth
		  }

		  var temp = mainService.addQuote(newQuote);

		  if(temp){
		  	$scope.quotes = temp;
		  	console.log($scope.quotes)
		  	localStorageService.store("quotes", $scope.quotes)
		    $scope.newQuoteText = '';
		    $scope.newQuoteAuth= '';
		  }
		}

		$scope.deleteMe = mainService.removeQuote;

})