function Counter() {
	return {
		template: [
			'<div>',
				'<h3>Counter</h3>',
				'<div>Click anywhere to increment the counter!</div>',
				'<div>Current count: {{ count }}</div>',
			'</div>'
		].join(''),
		controller: function () {
			this.count = 0;
		},
		controllerAs: 'ctrl',
		link: function (scope, element) {
				element.on('click', function () {
					 ctrl.count++;
				});

				scope.$on('$destroy', function () {
					 element.off();
				});
		}
	}
}

angular
	.module('app')
	.directive('counter', Counter);
