$(function() {
	var input = $('textarea');
	var output = $('output');

	input.on('input', function() {
		var html = $('<html>' + input.val() + '</html>');

		var subitems = html.find('[itemscope] [itemscope]');
		var items = html.find('[itemscope]').not(subitems);

		var data = items.microdata();
		var json = JSON.stringify(data, null, 2);

		output.text(json);
	});
});