function convertor(csv) {

	const lines = csv.split('\n');

	lines.map((el, i) => {
	const obj = {};
	if (i > 0) {
		obj[lines[0].split('.')[0]] = el.split('.')[0];
		obj[lines[0].split('.')[1].split('\r')[0]] = el.split('.')[1].split('\r')[0];
		contactList.push(obj);
	}
	});
}
