class ProduktkatalogApp {
    constructor() {
        this.data = {
            kategorier: ["kniv", "skje", "gaffel"],
            produkter: [
                { navn: "Gullskje 22cm", pris: 990, kategori: "skje" },
                { navn: "Sølvskje 22cm", pris: 190, kategori: "skje" },
                { navn: "Stålskje 22cm", pris: 19, kategori: "skje" },
                { navn: "Gullkniv 22cm", pris: 990, kategori: "kniv" },
                { navn: "Sølvkniv 22cm", pris: 190, kategori: "kniv" },
                { navn: "Stålkniv 22cm", pris: 19, kategori: "kniv" },
                { navn: "Gullgaffel 22cm", pris: 990, kategori: "gaffel" },
                { navn: "Sølvgaffel 22cm", pris: 190, kategori: "gaffel" },
                { navn: "Stålgaffel 22cm", pris: 19, kategori: "gaffel" }
            ],
            tekster: {
                forside: {
                    overskrift: "Bestikkshoppen",
                    tekst: "Velkommen til Bestikkshoppen AS. Vi håper du får mange flotte handleopplevelser!",
                },
                info: {
                    telefon: '987 65 432',
                    slagord: 'Vi bestikker deg!'
                },
                kategorier: {
                    overskrift: "Kategorier",
                    tekst: "Denne siden viser alle våre produktkategorier. Velg en av dem for å se våre produkter. "
                },
                produkt: {
                    overskrift: "{{ obj.navn }}",
                    tekst: "Se detaljer om dette produktet under:"
                },
                kontaktOss: {
                    navn: "Bestikkshoppen AS",
                    adresse: "Melkeveien 1",
                    postnr: "0123",
                    poststed: "Oslo",
                    epost: "post@bestikkshoppen.no",
                    web: "www.bestikkshoppen.no"
                }
            }
        };
        this.metadata = {
            felt: {
                produkt: [
                    { navn: 'navn' },
                    { navn: 'pris', type: 'kroner' },
                    { navn: 'kategori' },
                ],
                kontaktOss: [
                    { navn: 'navn' },
                    { navn: 'adresse' },
                    { navn: 'postnr' },
                    { navn: 'poststed' },
                    { navn: 'epost' },
                    { navn: 'web' },
                ]
            },
            sider: {
                "forside": {
                    mal: "infoSide",
                    data: { "overskrift": "tekster.forside", "skjemaVisning": "tekster.info" }
                },
                "kategori-liste": {
                    mal: "listeSide",
                    data: { "overskrift": "tekster.kategorier", "liste-visning": "kategorier" }
                },
                "produkt-liste": {
                    mal: "listeSide",
                    data: { "overskrift": "tekster.produkt", "liste-visning": "kategorier" },
                    metadata: { "liste-visning": "produktFelt" }
                },
                "enkelt-produkt": {
                    mal: "infoSide",
                    data: { "overskrift": "tekster.produkt", "skjemaVisning": "produkter[i]" },
                    metadata: { "liste-visning": "produktFelt" }
                },
                "kontakt-oss": {
                    mal: "infoSide",
                    data: { "overskrift": "tekster.forside", "skjemaVisning": "tekster.kontaktOss" },
                    metadata: { "skjemaVisning": "produktFelt" }
                }
            },
            maler: {
                infoSide: {
                    komponenter: ["overskrift", "skjemaVisning"],
                    layout: {
                        rader: "200px auto",
                        kolonner: "auto",
                        mal: ["overskrift", "skjemaVisning"]
                    }
                },
                listeSide: {
                    komponenter: ["overskrift", "liste-visning"],
                    layout: {
                        rader: "200px auto",
                        kolonner: "auto",
                        mal: ["overskrift", "skjemaVisning"]
                    }
                }
            }
        };
    }

    visSide(sidenavn, parameter) {
        let metadataSide = this.metadata.sider[sidenavn];
        let metadataMal = this.metadata.maler[metadataSide.mal];
        let style = `
            display: grid; 
            height: 100vh;
            grid-template-rows: ${metadataMal.layout.rader}; 
            grid-template-columns: ${metadataMal.layout.kolonner}; 
            grid-areas: '${metadataMal.layout.mal.join(`' '`)}';
            `;
        let self = this;
        let renderKomponent = function (komponentNavn) {
            let komponentFunksjon = komponenter[komponentNavn];
            let dataSti = metadataSide.data[komponentNavn];
            let felt = dataSti.split('.');
            let data = self.data;
            for (let feltNavn of felt) {
                data = data[feltNavn];
            }
            return komponentFunksjon(data);
        };
        let innhold = metadataMal.komponenter.map(renderKomponent).join('');
        document.getElementById('side').outerHTML = `<div id="side" style="${style}">${innhold}</div>`;
    }
}