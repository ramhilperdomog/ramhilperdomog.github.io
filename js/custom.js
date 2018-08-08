var languageMappings = {
	'tooltipMessage': {
		'en': '¡Cambiar a Español!',
		'es': 'Switch to English!'
	},
	'home': {
		'en': 'Home',
		'es': 'Inicio'
	},
	'portfolio': {
		'en': 'Portfolio',
		'es': 'Portafolio'
	},
	'aboutMe': {
		'en': 'About me',
		'es': 'Acerca de mi'
	},
	'contactMe': {
		'en': 'Contact Me',
		'es': 'Contáctame'
	},
	'jobTitle': {
		'en': 'Process Analyst - Business Analyst',
		'es': 'Analista de Procesos - Analista de Negocios'
	},
	'aboutMeContent': {
		'en': 'Process and business analyst with 3 years of experience. Passionate identifying, analyzing, describing and optimizing processes, and I\'m sure I can fit into your organization with new ideas that develop mutual learning.',
		'es': 'Analista de procesos y negocios con 3 años de experiencia. Apasionada en identificar, analizar, describir y optimizar procesos, y segura que puedo encajar en su organización con nuevas ideas que desarrollen mutuo aprendizaje.'
	},
	portfolio1Header: {
		'en': 'Budget Management <br/> (BPM)',
		'es': 'Gestión Presupuestal <br/> (BPM)'
	},
	portfolio1Content: {
		'en': 'Budget Management (BPM)',
		'es': 'Gestión Presupuestal (BPM)'
	},
	'p1_1': {
		'en': 'USE CASE',
		'es': 'CASO DE USO'
	},
	'p1_2': {
		'en': 'PROCESS MAP',
		'es': 'MAPA DE PROCESOS'
	},
	'p1_3': {
		'en': 'GANTT DIAGRAM',
		'es': 'CRONOGRAMA: SEGUIMIENTO Y EVALUACIÓN PRESUPUESTAL'
	},
	'p1_4': {
		'en': 'PROCESS FLOW CHART: CREATION OF INVESTMENT PROJECTS',
		'es': 'FLUJOGRAMA: ELABORACION INFORME PROYECTOS DE INVERSIÓN'
	},
	'p1_5': {
		'en': 'PROCESS FLOW CHART: PROGRAMMING, MONITORING AND BUDGETARY EVALUATION',
		'es': 'FLUJOGRAMA: PROGRAMACIÓN, SEGUIMIENTO Y EVALUACIÓN PRESUPUESTAL'
	},
	'p1_6': {
		'en': 'PROCESS FLOW CHART: FORMULATION, EXECUTION AND BUDGETARY FOLLOW-UP',
		'es': 'FLUJOGRAMA: FORMULACIÓN, EJECUCIÓN Y SEGUIMIENTO PRESUPUESTAL'
	},
	'p1_7': {
		'en': 'PROCESS FLOW CHART: CREATION OF BUDGET EXECUTION REPORT - LEVEL 1',
		'es': 'FLUJOGRAMA: ELABORACIÓN INFORME DE EJECUCION PRESUPUESTAL - NIVEL 1'
	},
	'p1_8': {
		'en': 'PROCESS FLOW CHART: CREATION OF BUDGET EXECUTION REPORT - LEVEL 2',
		'es': 'FLUJOGRAMA: ELABORACIÓN INFORME DE EJECUCION PRESUPUESTAL - NIVEL 2'
	},
	'p1_9': {
		'en': 'PROCESS FLOW CHART: CREATION OF BUDGET EXECUTION REPORT - SUB PROCESS (SYSTEM) ',
		'es': 'FLUJOGRAMA: ELABORACIÓN INFORME DE EJECUCION PRESUPUESTAL - SUBPROCESO SISTEMA'
	},
	'p2_1': {
		'en': 'CLAIMS PROCESS <br/> MOCKUPS',
		'es': 'PROCESO QUEJAS Y RECLAMACIONES <br/> MOCKUPS'
	},
	'portfolio2Header': {
		'en': 'Flight Tracker APP</br>(Claims)',
		'es': 'APP Tracking Vuelos <br/>(Quejas y Reclamaciones)'
	},
	'portfolio2Content': {
		'en': 'Flight Tracker APP</br>(Claims)',
		'es': 'APP Tracking Vuelos <br/>(Quejas y Reclamaciones)'
	},
	'portfolio3Header': {
		'en': 'Medical Audit APP </br>(Medical Claims)',
		'es': 'APP Auditoría <br/> (Reclamaciones Médicas)'
	},
	'portfolio4Header': {
		'en': 'ERP System',
		'es': 'Sistema ERP'
	},
}

var currentLanguage = 'es'

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

function getURLPArams(param) {
	var vars = {};
	window.location.href.replace(location.hash, '').replace(
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function (m, key, value) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);
	return vars[param]
}

function onLanguageChange() {
	event.preventDefault()
	currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
	var target = $(event.currentTarget);
	target.blur();
	toggleLanguage(currentLanguage)
	// Toggle tooltip language message
	var tooltipMessage = languageMappings['tooltipMessage'][currentLanguage]
	target.tooltip('hide').attr('title', tooltipMessage).attr('data-original-title', tooltipMessage).tooltip('update').tooltip()
}

function toggleLanguage(lang) {
	// Toggle Language stuff
	currentLanguage = lang
	var elementsToTranslate = $('[data-translate]');
	elementsToTranslate.each(function (index) {
		var element = $(this);
		var data = element.data()
		var text = languageMappings[data.translate][currentLanguage]
		element.html(text)
	})
}


// Main Code
var displayAreas = document.querySelectorAll('#displayArea')
for (i = 0; i < displayAreas.length; ++i) {
	$(displayArea).contextmenu(function (e) { return false; })
}

$('[data-toggle="tooltip"]').tooltip()

currentLanguage = getURLPArams('lang') || 'es';
toggleLanguage(currentLanguage)