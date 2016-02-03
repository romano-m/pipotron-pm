app.controller('MainController', ['$scope', function($scope) {
	$scope.title = 'Le Pipotron du Product Management';
	$scope.phrase = "";
	$scope.pipos = [
		{
			id: 1,
			'content': ["Avec","Considérant","Où que nous mène","Eu égard à","Vu","En ce qui concerne","Dans le cas particulier de","Quelle que soit","Du fait de","Tant que durera","Quoi qu'on dise concernant","Nonobstant","Compte tenu de","Malgré","Pour réagir face à","Afin de circonvenir à","Dans le but de pallier à","Si vous voulez mon avis concernant"],
			'current': ""
		},
		{
			id: 2,
			'content': ["l'auto-organisation","la roadmap produit","l'agilité","l'incertidude","la conclusion","la rigidité","l'indécision","la vélocité","la versatilité","la méfiance","la morosité","la rétroactivité","la remise en question","la politique","la rétrospective","l'étendue","l'inconstance","l'analyse fonctionnelle","l'analyse technique","l'estimation","la sémiotique émergente"],
			'current': ""
		},
		{
			id: 3,
			'content': ["des équipes de prod,","du marketing,","du COMEX,","du backlog,","de l'itération en cours,","de la dernière livraison,","de la MEP,","de SCRUM,","des équipes UX,","des Product Owners,","de l'équipe produit,","du Product Manager,","des preneurs d'ordre,","du métier,","du CODIR,","du sponsor,","des stake-holders,","du Burn-up chart,","du Scrum-Master,"],
			'current': ""
		},
		{
			id: 4,
			'content': ["il convient d#","il faut","on se doit d#","il est préférable d#","il serait intéressant d#","il ne faut pas négliger d#","on ne peut se passer d#","il est nécessaire d#","il serait bon d#","il faut de toute urgence","je recommande d#","je préconise un audit afin d#","il est très important d#","il ne faut pas s'interdire d#","nous sommes contraints d#","je suggère fortement d#","je n'exclus pas d#","je vous demande d#"],
			'current': ""
		},
		{
			id: 5,
			'content': ["étudier","examiner","favoriser","prendre en considération","anticiper","imaginer","itérer sur","mettre en perspective","gérer","fédérer","comprendre","analyser","appréhender","expérimenter","essayer","caractériser","façonner","revoir","prendre en compte","arrêter de stigmatiser","considérer","réorganiser","inventorier","implémenter"],
			'current': ""
		},
		{
			id: 6,
			'content': ["la faisabilité des","la cohérence des","la qualité intrinsèque des","la simultanéité des","l'ensemble des","la somme des","la totalité des","la globalité des","les relations des","certaines","la plus grande partie des","les principales","systématiquement les","précisément les"],
			'current': ""
		},
		{
			id: 7,
			'content': ["solutions","MVPs","spikes techniques","POCs","anomalies","user stories","améliorations","tâches techniques","APIs","backlogs","approches Design-Thinking","décisions","growth-hackings","hypothèses","stratégies","mockups d'interfaces","user-tests","études consommateur orientées problèmes","études consommateur orientées solution","test d'usabilité","recettes","livraisons","Impact mappings"],
			'current': ""
		},
		{
			id: 8,
			'content': ["holistiques","expérimentales","agiles","efficientes","envisageables","priorisables","embarquées dans le sprint","ergonomiques","avant-gardistes","user-friendly","scalables","mockupables","prototypables","emblématiques","déscopables","embarquables sur la go product roadmap","continus","évangélistes","intermédiaires"],
			'current': ""
		},
		{
			id: 9,
			'content': ["pour changer de paradigme","afin de sortir du bâtiment","au cours des prochaines itérations","pour les prochains sprints","pour faire une première V0","à court terme","car il ne sert à rien de faire une V17 tout de suite","pour savoir quand rebondir","car les américains ont pris de l'avance","car notre métier n'est pas agile","même si ce n'est pas facile","même si nous devons atterrir en retard","car la qualité est non négociable","par respect du manifeste agile","parce que Mark Zuckerberg a commencé comme ça","car je l'ai lu dans le dernier livre de Ash Maurya","parce que c'est un principe fondamental du management 3.0","car seul un changement en profondeur est acceptable","parce que nos frameworks organisationnels sont obsolètes","parce qu'il est primordial de parler à nos clients","pour faire du done sur les requirements prioritaires","car on ne peut pas se passer du love-money récolté"],
			'current': ""
		}
	];
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
	// $scope.mouseEnter = function(idpipo) {

	// };
	// $scope.mouseLeave = function(idpipo) {

	// }
}])