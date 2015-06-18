AngEffects.controller('HintCtrl', [
	'$scope',
	'$timeout',
	function(
		$scope,
		$timeout) {

		$scope.hintText = 'test content';

		$timeout(function() {

			// HintText Animation
			jQuery('.hint-text').addClass("slideOutLeft");
			$timeout(function() {
				jQuery('.hint-text').addClass("slideInRight").removeClass("slideOutLeft");
				$scope.hintText	= 'After animate';
			}, 500);

			// Block FadeIn / FadeOut Amination
			$timeout(function() {
				jQuery('.fade-in-block').addClass("zoomIn");
			}, 500);

		}, 2000);

	}
]);