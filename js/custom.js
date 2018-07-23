function initGalleryItems() {
	var elements = $('.gallery-items')
	console.log(elements)
	elements.each(function (index) {
		console.log(index + ": " + $(this).text());
	});
}

function embed(label, value) {
	var elText = '<embed src=":value" width="100%" height="500" type="application/pdf" title=":label" alt=":label">'

	// Replace Values
	elText = elText.replace(/:value/gm, value)
	elText = elText.replace(/:label/gm, label)

	return $(elText)
}

function image(label, value) {
	var elText = '<img class="img-fluid" src=":value" alt="" width="100%" title=":label" alt=":label"/>'

	// Replace Values
	elText = elText.replace(/:value/gm, value)
	elText = elText.replace(/:label/gm, label)

	return $(elText)
}

function displayPDF(src) {
	var data = $(event.currentTarget).data()
	var elToDisplay = embed(data.label, data.value);
	var displayArea = $('#displayArea')
	displayArea.empty()
	displayArea.append(elToDisplay)
}

function displayImage(selector, src) {
	var data = $(event.currentTarget).data()
	var elToDisplay = image(data.label, data.value);
	var displayArea = $('#displayArea')
	displayArea.empty()
	displayArea.append(elToDisplay)
}

$.ready(function () {
	initGalleryItems()
})
