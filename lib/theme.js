(function(module) {
	"use strict";

	var Theme = {};

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

nfcringlogout = function() {
  $.post(RELATIVE_PATH + '/logout', {
    _csrf: $('#csrf_token').val()
  }, function() {
    window.location.href = 'https://me.nfcring.com/logout?redirect=forum.nfcring.com';
  });
};

(function () {
  $('#logout-link').off('click').on('click', nfcringlogout );
});