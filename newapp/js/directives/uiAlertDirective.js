angular.module("listaTelefonica").directive("uiAlert", function(){ 
	return {
		templateUrl: "view/alert.html",
		replace: true,
		restrict: "E",
		scope: {
			topic: "@title"
		},
		transclude: true
	};
});