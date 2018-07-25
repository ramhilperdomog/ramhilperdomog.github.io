function embed(label, value) {
	var elText = '<embed id="embed" src=":value" width="100%" height="500" type="application/pdf" title=":label" alt=":label">'

	// Replace Values
	elText = elText.replace(/:value/gm, value +"#toolbar=0&navpanes=0&scrollbar=0")
	elText = elText.replace(/:label/gm, label)

	return $(elText)
}

function image(label, value) {
	var elText = '<img id=":id" class="img-fluid" src=":value" alt="" width="100%" title=":label" alt=":label"/>'

	// Replace Values
	elText = elText.replace(/:id/gm, 'frame')
	elText = elText.replace(/:value/gm, value)
	elText = elText.replace(/:label/gm, label)

	return $(elText)
}

function displayPDF() {
	var data = $(event.currentTarget).data()
	var elToDisplay = embed(data.label, data.value);
	var displayArea = $('#displayArea')
	displayArea.empty()
	displayArea.append(elToDisplay)
	elToDisplay.contextmenu(function (e) {
		e.preventDefault();
	});
}

function displayImage() {
	var data = $(event.currentTarget).data()
	var elToDisplay = image(data.label, data.value);
	var displayArea = $('#displayArea')
	displayArea.empty()
	displayArea.append(elToDisplay)
	displayArea.append($('<p class="text-center"> Coloque el mouse sobre la imagen para ampliar </p>'))
	elToDisplay
		.wrap('<span style="display:inline-block"></span>')
		.css('display', 'block')
		.parent()
		.zoom()
}

function zoomImage() {
	$(event.currentTarget)
		.wrap('<span style="display:inline-block"></span>')
		.css('display', 'block')
		.parent()
		.zoom()
}

var displayAreas = document.querySelectorAll('#displayArea')
for (i = 0; i < displayAreas.length; ++i) {
	
	$(displayArea).contextmenu(function (e) { return false; })
}