$(function() {
	var input = $('textarea');
	var output = $('output');

	var update = function() {
		var node = $('<div>' + input.val() + '</div>');

		// find the top-level itemscope elements
		var items = node.find('[itemscope]').not(node.find('[itemscope] [itemscope]'));

		// use this unattached element instead of document as the root (for itemref)
		$.microdataRoot = node;
		
		var data = items.microdata();
		var json = JSON.stringify(data, null, 2);

		output.text(json);
	};

	input.on('input', update);

	// load the example HTML
	$.get('example.html', function(data) {
		input.val(data).trigger('input');
	}, 'text');
});
