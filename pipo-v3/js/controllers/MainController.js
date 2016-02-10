app.controller('MainController', ['$scope', 'piposervice', function($scope, piposervice) {
	$scope.title = 'Le Pipotron du Product Management';
	$scope.phrase = "";

	$scope.pipos = [
		{
			id: 1,
			'content': [],
			'current': ""
		},
		{
			id: 2,
			'content': [],
			'current': ""
		},
		{
			id: 3,
			'content': [],
			'current': ""
		},
		{
			id: 4,
			'content': [],
			'current': ""
		},
		{
			id: 5,
			'content': [],
			'current': ""
		},
		{
			id: 6,
			'content': [],
			'current': ""
		},
		{
			id: 7,
			'content': [],
			'current': ""
		},
		{
			id: 8,
			'content': [],
			'current': ""
		},
		{
			id: 9,
			'content': [],
			'current': ""
		}
	]

	piposervice.success(function(data) { 
		$scope.pipodata = data.feed.entry;
		for (var i = 0; i < $scope.pipodata.length; i++) {
			for (var j = 0; j < 10; j++) {
				if (($scope.pipodata[i].gs$cell.col == j) && ($scope.pipodata[i].gs$cell.row != 1)) {
				$scope.pipos[j-1].content.push($scope.pipodata[i].gs$cell.inputValue);
				}
			}
		}
		$scope.selectPipo();
	});

	$scope.selectPipo = function() {
		for (var i=1; i < 10; i++) {
			$scope.selectPipoN(i);
		}
	};
	$scope.selectPipoN = function(idpipo) {
		for (var i = 0; i < $scope.pipos.length; i++) {
			var pipo = $scope.pipos[i];
			if (pipo.id == idpipo) {
				var j = Math.floor(Math.random() * pipo.content.length);
				$scope.pipos[i].current = pipo.content[j];
			};
		};
	};

	// STARTED WORK ON HASHTAGPROCESSOR

	// $scope.selectPipo = function() {
	// 	for (var i=1; i < 10; i++) {
	// 		$scope.selectPipoN(i);
	// 		$scope.hashtagprocessor(i,i);
	// 	}
	// };
	// $scope.selectPipoN = function(idpipo) {
	// 	for (var i = 0; i < $scope.pipos.length; i++) {
	// 		var pipo = $scope.pipos[i];
	// 		if (pipo.id == idpipo) {
	// 			var j = Math.floor(Math.random() * pipo.content.length);
	// 			$scope.pipos[i].current = $scope.hashtagprocessor(pipo.content[j]);
	// 		};
	// 	};
	// };
	// $scope.hashtagprocessor = function(currentpipo) {
	// 	if (currentpipo.charAt(currentpipo.length-1) == '#') {
	// 		currentpipo = currentpipo.substring(0, currentpipo.length-1) ;
	// 		aux = 'aeiouyhéè' ;
	// 		boule = false ;
	// 			for (j = 0 ; j<aux.length ; j++) {
	// 				if (chaine5.charAt(0) == aux.charAt(j)) {boule = true} ;} ;
	// 			if (boule)  {liaison = "'"} else {liaison = "e "} ;
	// }
	// else
	// liaison =' ' ;
	// }
}])