let komponenter = {
    overskrift(data, metadata, parameterVerdi) {
        return `<h3>${data.overskrift}</h3>` + (data.tekst ? `<p>${data.tekst}</p>` : '');
    }
};