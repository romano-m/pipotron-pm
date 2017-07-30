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
		$scope.phrase = "";
		for (var i=1; i < 10; i++) {
			$scope.selectPipoN(i);
			$scope.phrase = $scope.phrase + " " + $scope.pipos[i-1].current;
		}
		console.log("Avant processHashtags : " + $scope.phrase);
		$scope.processHashtags($scope.phrase);
		console.log("Après processHashtags : " + $scope.phrase);

	};

	 $scope.processHashtags = function(phrase) {
		for (i=0 ; i<phrase.length; i++) {
			if (phrase.charAt(i) == '#') {
				console.log("hashtag : " + phrase.charAt(i));
				console.log("i-1 : " + phrase.charAt(i-1));
				console.log("i+1 : " + phrase.charAt(i+2));
				aux = "aeiouyhéè";
				boule = false;
				liaison = "";
					for (j = 0 ; j<aux.length ; j++) {
						if (phrase.charAt(i+2) == aux.charAt(j)) {
							boule = true;
						}
					}
					if (boule) {
						liaison = "'";
					}
						else {
							liaison = "e ";
						}
				phrase = phrase.substring(0, i) + liaison + phrase.substring(i+2, phrase.length);
			}
		}
	}


		$scope.selectPipoN = function(idpipo) {
		for (var i = 0; i < $scope.pipos.length; i++) {
			var pipo = $scope.pipos[i];
			if (pipo.id == idpipo) {
				var j = Math.floor(Math.random() * pipo.content.length);
				$scope.pipos[i].current = pipo.content[j];
				console.log("pipo added : " + $scope.pipos[i].current)
			};
		};
	};


}])