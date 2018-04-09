app.controller('MainController', ['$scope', 'piposervice', function($scope, piposervice) {
	$scope.title = 'Cadeau, une phrase pour faire le malin en réunion :';
	$scope.phrase = "";
	$scope.pipos = [
		{
			id: 1,
			'content': [],
			'current': "",
			'currentId': "",
			'currentHashtag': false
		},
		{
			id: 2,
			'content': [],
			'current': "",
			'currentId': "",
			'currentHashtag': false
		},
		{
			id: 3,
			'content': [],
			'current': "",
			'currentId': "",
			'currentHashtag': false
		},
		{
			id: 4,
			'content': [],
			'current': "",
			'currentId': "",
			'currentHashtag': false
		},
		{
			id: 5,
			'content': [],
			'current': "",
			'currentId': "",
			'currentHashtag': false
		},
		{
			id: 6,
			'content': [],
			'current': "",
			'currentId': "",
			'currentHashtag': false
		},
		{
			id: 7,
			'content': [],
			'current': "",
			'currentId': "",
			'currentHashtag': false
		},
		{
			id: 8,
			'content': [],
			'current': "",
			'currentId': "",
			'currentHashtag': false
		},
		{
			id: 9,
			'content': [],
			'current': "",
			'currentId': "",
			'currentHashtag': false
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
		$scope.selectPipo(true);
	});

	$scope.selectPipo = function(launch) {
		$scope.phrase = "";
		for (var i=1; i < 10; i++) {
			$scope.selectPipoN(i, launch);
			$scope.phrase = $scope.phrase + " " + $scope.pipos[i-1].current;
		}
		console.log($scope.phrase);

	};

	$scope.selectPipoN = function(idpipo, launch) {
		for (var i = 0; i < $scope.pipos.length; i++) {
			var pipo = $scope.pipos[i];
			if (pipo.id == idpipo) {
				var j = Math.floor(Math.random() * pipo.content.length);
				$scope.pipos[i].current = pipo.content[j];
				$scope.pipos[i].currentId = j;
				console.log("Pipo added : " + $scope.pipos[i].current);
				if (i>1) {
					$scope.pipos[i-1].current = $scope.refreshPipo(i-1);
					console.log("Pipo selected after refresh : " + $scope.pipos[i-1].current);
				}
				if (!launch) {
					$scope.pipos[i].current = $scope.refreshPipo(i);
				}
			};
		};
	};

	$scope.refreshPipo = function (idpipo) {
		var pipo = $scope.pipos[idpipo].content[$scope.pipos[idpipo].currentId];
		var hashtag = $scope.pipos[idpipo].currentHashtag;
		if ($scope.checkHashtag(idpipo)) {
			$scope.pipos[idpipo].current = pipo.substring(0,pipo.length-1) + $scope.replaceHashtag(idpipo);
			console.log("Pipo refreshed : " + $scope.pipos[idpipo].current);
		}
		else if ((idpipo == 3) && $scope.checkHashtag(idpipo)) {
			$scope.pipos[idpipo].current = pipo.substring(0,pipo.length-1) + $scope.replaceHashtag(idpipo);
			console.log("Pipo refreshed : " + $scope.pipos[idpipo].current);
		}
		else {
			console.log("Pipo not refreshed : " + $scope.pipos[idpipo].current);
		}
		return $scope.pipos[idpipo].current;
	}

	$scope.checkHashtag = function(idpipo) {
		var pipo = $scope.pipos[idpipo].content[$scope.pipos[idpipo].currentId];
		if (pipo.charAt(pipo.length-1) == "#") {
			$scope.pipos[idpipo].currentHashtag = true;
			return true;
		}
		else {
			return false;
		}
	}

	$scope.replaceHashtag = function(idpipo) {
		var aux = "aeiouyhéè";
		var boule = false;
		var liaison = "";
		for (i = 0 ; i<aux.length ; i++) {
				if ($scope.pipos[idpipo+1].current[0] == aux.charAt(i)) {
					boule = true;
					break;
				}
			}
			if (boule) {
				liaison = "'";
			}
				else {
					liaison = "e";
				}
		return liaison;
	}


}])