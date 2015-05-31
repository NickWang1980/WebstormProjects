app = angular.module('appOracleDbMonitor', [ 'ngMaterial', 'ngMessages', 'ngRoute', 'ngVidBg', 'ngDragDrop' ]);


app.directive('draggable', [ '$document', '$log', function($document, $log) {
	return {
		restrict : 'A',
		link : function(scope, elm, attrs) {
			var startX, startY, initialMouseX, initialMouseY;
			elm.css({
				position : 'absolute'
			});

			elm.bind('mousedown', function($event) {
				$log.info("mousedown");
				startX = elm.prop('offsetLeft');
				startY = elm.prop('offsetTop');
				initialMouseX = $event.clientX;
				initialMouseY = $event.clientY;
				$document.bind('mousemove', mousemove);
				$document.bind('mouseup', mouseup);
				return false;
			});

			function mousemove($event) {
				$log.info("mousemove");
				var dx = $event.clientX - initialMouseX;
				var dy = $event.clientY - initialMouseY;
				elm.css({
					top : startY + dy + 'px',
					left : startX + dx + 'px'
				});
				return false;
			}

			function mouseup($event) {
				$log.info("mouseup");
				$document.unbind('mousemove', mousemove);
				$document.unbind('mouseup', mouseup);
			}
		}
	};
} ]);