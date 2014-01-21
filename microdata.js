$(function() {
	var input = $('textarea');
	var output = $('output');
	var container = $('#container');

	var update = function() {
		container.html(input.val());

		var subitems = container.find('[itemscope] [itemscope]');
		var items = container.find('[itemscope]').not(subitems);

		var data = items.microdata();
		var json = JSON.stringify(data, null, 2);

		output.text(json);
	};

	input.on('input', update).trigger('input');
});