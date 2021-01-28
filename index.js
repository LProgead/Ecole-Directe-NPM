const fetch = require('node-fetch');

exports.getToken = function (id, password, callback) {
	const raw = `data={	"identifiant": "${id}",	"motdepasse": "${password}"}`;

	var requestOptions = {
		method: 'POST',
		body: raw,
		redirect: 'follow'
	};

	fetch("https://api.ecoledirecte.com/v3/login.awp", requestOptions)
		.then(response => response.text())
		.then(result => {
			const json_results = JSON.parse(result);

			if (json_results.code != 200) return console.error(json_results.message);

			const token = json_results.token;

			callback(token);
		});
}

exports.getID = function (id, password, callback) {
	const raw = `data={	"identifiant": "${id}",	"motdepasse": "${password}"}`;

	var requestOptions = {
		method: 'POST',
		body: raw,
		redirect: 'follow'
	};

	fetch("https://api.ecoledirecte.com/v3/login.awp", requestOptions)
		.then(response => response.text())
		.then(result => {
			const json_results = JSON.parse(result);

			if (json_results.code != 200) return console.error(json_results.message);

			const id = json_results.data.accounts[0].id;

			callback(id);
		});
}

exports.getClassID = function (id, password, callback) {
	const raw = `data={	"identifiant": "${id}",	"motdepasse": "${password}"}`;

	var requestOptions = {
		method: 'POST',
		body: raw,
		redirect: 'follow'
	};

	fetch("https://api.ecoledirecte.com/v3/login.awp", requestOptions)
		.then(response => response.text())
		.then(result => {
			const json_results = JSON.parse(result);

			if (json_results.code != 200) return console.error(json_results.message);

			const id = json_results.data.accounts[0].profile.classe.id;

			callback(id);
		});
}

exports.getAccountInformations = function (id, password, callback) {
	const raw = `data={	"identifiant": "${id}",	"motdepasse": "${password}"}`;

	var requestOptions = {
		method: 'POST',
		body: raw,
		redirect: 'follow'
	};

	fetch("https://api.ecoledirecte.com/v3/login.awp", requestOptions)
		.then(response => response.text())
		.then(result => {
			const json_results = JSON.parse(result);

			if (json_results.code != 200) return console.error(json_results.message);

			const infos = json_results.data.accounts[0];

			callback(infos);
		});
}

exports.getMessages = function (token, id, callback) {
	const raw = `data={	"token": "${token}"}`;

	var requestOptions = {
		method: 'POST',
		body: raw,
		redirect: 'follow'
	};

	fetch(`https://api.ecoledirecte.com/v3/eleves/${id}/messages.awp?verbe=getall&orderBy=date&order=desc`, requestOptions)
		.then(response => response.text())
		.then(result => {
			const json_results = JSON.parse(result);

			if (json_results.code != 200) return console.error(json_results.message);

			callback(json_results.data);
		});
}

exports.getSchedule = function (from, to, id, token, callback) {
	const raw = `data={ "dateDebut": "${from}", "dateFin": "${to}", "avecTrous": false, "token": "${token}"}`;

	var requestOptions = {
		method: 'POST',
		body: raw,
		redirect: 'follow'
	};

	fetch(`https://api.ecoledirecte.com/v3/E/${id}/emploidutemps.awp?verbe=get`, requestOptions)
		.then(response => response.text())
		.then(result => {
			const json_results = JSON.parse(result);

			if (json_results.code != 200) return console.error(json_results.message);

			callback(json_results.data);
		});
}

exports.getHomework = function (id, token, callback) {
	const raw = `data={\n	\"token\": \"${token}\"\n}`;

	var requestOptions = {
		method: 'POST',
		body: raw,
		redirect: 'follow'
	};

	fetch(`https://api.ecoledirecte.com/v3/Eleves/${id}/cahierdetexte.awp?verbe=get`, requestOptions)
		.then(response => response.text())
		.then(result => {
			const json_results = JSON.parse(result);

			if (json_results.code != 200) return console.error(json_results.message);

			callback(json_results.data);
		});
}

exports.getSchoolLife = function (classroom, token, callback) {
	const raw = `data={\n	\"token\": \"${token}\"\n}`;

	var requestOptions = {
		method: 'POST',
		body: raw,
		redirect: 'follow'
	};

	fetch(`https://api.ecoledirecte.com/v3/Classes/${classroom}/viedelaclasse.awp?verbe=get`, requestOptions)
		.then(response => response.text())
		.then(result => {
			const json_results = JSON.parse(result);

			if (json_results.code != 200) return console.error(json_results.message);

			callback(json_results.data);
		});
}

exports.getGrades = function (id, token, callback) {
	const raw = `data={\n	\"token\": \"${token}\"\n}`;

	var requestOptions = {
		method: 'POST',
		body: raw,
		redirect: 'follow'
	};

	fetch(`https://api.ecoledirecte.com/v3/eleves/${id}/notes.awp?verbe=get`, requestOptions)
		.then(response => response.text())
		.then(result => {
			const json_results = JSON.parse(result);

			if (json_results.code != 200) return console.error(json_results.message);

			callback(json_results.data);
		});
}

exports.getDigitalBooks = function (id, token, callback) {
	const raw = `data={\n	\"token\": \"${token}\"\n}`;

	var requestOptions = {
		method: 'POST',
		body: raw,
		redirect: 'follow'
	};

	fetch(`https://api.ecoledirecte.com/v3/Eleves/${id}/manuelsNumeriques.awp?verbe=get`, requestOptions)
		.then(response => response.text())
		.then(result => {
			const json_results = JSON.parse(result);

			if (json_results.code != 200) return console.error(json_results.message);

			callback(json_results.data);
		});
}

exports.getMCQ = function (id, token, callback) {
	const raw = `data={\n	\"token\": \"${token}\"\n}`;

	var requestOptions = {
		method: 'POST',
		body: raw,
		redirect: 'follow'
	};

	fetch(`https://api.ecoledirecte.com/v3/eleves/${id}/qcms/0/associations.awp?verbe=get`, requestOptions)
		.then(response => response.text())
		.then(result => {
			const json_results = JSON.parse(result);

			if (json_results.code != 200) return console.error(json_results.message);

			callback(json_results.data);
		});
}

exports.getTimeline = function (id, token, callback) {
	const raw = `data={\n	\"token\": \"${token}\"\n}`;

	var requestOptions = {
		method: 'POST',
		body: raw,
		redirect: 'follow'
	};

	fetch(`https://api.ecoledirecte.com/v3/E/${id}/timelineAccueilCommun.awp?verbe=get`, requestOptions)
		.then(response => response.text())
		.then(result => {
			const json_results = JSON.parse(result);

			if (json_results.code != 200) return console.error(json_results.message);

			callback(json_results.data);
		});
}

exports.getDocuments = function (token, callback) {
	const raw = `data={\n	\"token\": \"${token}\"\n}`;

	var requestOptions = {
		method: 'POST',
		body: raw,
		redirect: 'follow'
	};

	fetch(`https://api.ecoledirecte.com/v3/elevesDocuments.awp?verbe=get`, requestOptions)
		.then(response => response.text())
		.then(result => {
			const json_results = JSON.parse(result);

			if (json_results.code != 200) return console.error(json_results.message);

			callback(json_results.data);
		});
}

exports.getProfessors = function (classroom, token, callback) {
	const raw = `data={\n	\"token\": \"${token}\"\n}`;

	var requestOptions = {
		method: 'POST',
		body: raw,
		redirect: 'follow'
	};

	fetch(`https://api.ecoledirecte.com/v3/messagerie/contacts/professeurs.awp?verbe=get&idClasse=${classroom}`, requestOptions)
		.then(response => response.text())
		.then(result => {
			const json_results = JSON.parse(result);

			if (json_results.code != 200) return console.error(json_results.message);

			callback(json_results.data);
		});
}

exports.getStaff = function (classroom, token, callback) {
	const raw = `data={\n	\"token\": \"${token}\"\n}`;

	var requestOptions = {
		method: 'POST',
		body: raw,
		redirect: 'follow'
	};

	fetch(`https://api.ecoledirecte.com/v3/messagerie/contacts/personnels.awp?verbe=get&idClasse=${classroom}`, requestOptions)
		.then(response => response.text())
		.then(result => {
			const json_results = JSON.parse(result);

			if (json_results.code != 200) return console.error(json_results.message);

			callback(json_results.data);
		});
}