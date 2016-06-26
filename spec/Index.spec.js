var path = require('path');

describe('Directive Test', function() {
	browser.get('http://localhost:8080');

	it('should increment counter on click', function() {
		var directive = element(by.css('counter div div:nth-child(3)'));

		var counter = element(by.css('counter div div:nth-child(3)'));

		expect(counter.getText()).toEqual('Current count: 0');

		directive.click();

		expect(counter.getText()).toEqual('Current count: 1');
	});
});
