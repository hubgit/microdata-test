$(function() {
	var input = $('textarea');
	var output = $('output');
	var outputNode = output.get(0);

	var update = function() {
		var node = $('<div>' + input.val() + '</div>');

		var items = $(node).items();
		var data = items.microdata();
		var json = JSON.stringify(data, null, 2);

		output.text(json);

		hljs.highlightBlock(outputNode);
	};

	input.on('input', update);

	// load the example HTML
	$.get('example.html', function(data) {
		input.val(data).trigger('input');
	}, 'text');
});
