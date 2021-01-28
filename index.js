const fetch = require('node-fetch');

exports.getToken = function(id, password, callback) {
    const raw_login = `data={\n	\"identifiant\": \"${id}\",\n	\"motdepasse\": \"${password}\"\n}`;

	var requestOptions = {
		method: 'POST',
		body: raw_login,
		redirect: 'follow'
	};

	fetch("https://api.ecoledirecte.com/v3/login.awp", requestOptions)
		.then(response => response.text())
		.then(result => {
			const json_login_results = JSON.parse(result);
			const token = json_login_results.token;

			callback(token);
		});
}