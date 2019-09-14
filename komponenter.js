let komponenter = {
    overskrift: function(data, metadata, parameterVerdi) {
        return `<h3>${data.overskrift}</h3>` + (data.tekst ? `<p>${data.tekst}</p>` : '');
    },
    skjemaVisning: function(data, metadata, parameterVerdi) {
        return 'Skjemavisning';
    }
};