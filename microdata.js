$(function() {
	var input = $('textarea');
	var output = $('output');

	var update = function() {
		$.microdataRoot = $('<div>' + input.val() + '</div>');

		var subitems = $.microdataRoot.find('[itemscope] [itemscope]');
		var items = $.microdataRoot.find('[itemscope]').not(subitems);

		var data = items.microdata();
		var json = JSON.stringify(data, null, 2);

		output.text(json);
	};

	input.on('input', update).trigger('input');
});