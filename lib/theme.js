(function(module) {
	"use strict";

	var Theme = {};

	Theme.init = function(app, middleware, controllers, callback) {
		app.put('/nfcring/returnTo', function(req, res) {
			if (req.body.url) {
				req.session.returnTo = req.body.url;
				req.session.save();
			}
		});

		callback();
	};

	Theme.defineWidgetAreas = function(areas, callback) {
		areas = areas.concat([
			{
				'name': 'Homepage Sidebar',
				'template': 'home.tpl',
				'location': 'sidebar'
			},
			{
				'name': 'Category Sidebar',
				'template': 'category.tpl',
				'location': 'sidebar'
			}
		]);

		callback(null, areas);
	};

	module.exports = Theme;

}(module));