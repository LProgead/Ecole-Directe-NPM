const fetch = require('node-fetch');

exports.getToken = function (id, password, callback) {
	const raw = `data={\n	\"identifiant\": \"${id}\",\n	\"motdepasse\": \"${password}\"\n}`;

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
	const raw = `data={\n	\"identifiant\": \"${id}\",\n	\"motdepasse\": \"${password}\"\n}`;

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

exports.getAccountInformations = function (id, password, callback) {
	const raw = `data={\n	\"identifiant\": \"${id}\",\n	\"motdepasse\": \"${password}\"\n}`;

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
	const raw_mail = `data={\n	\"token\": \"${token}\"\n}`;

	var requestOptions = {
		method: 'POST',
		body: raw_mail,
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