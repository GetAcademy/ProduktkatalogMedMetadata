var metadata = {
    pages: {
        start: {
            components: ['showProjects', 'showPeople']
        },
        showProject: {
            components: ['showProject', 'selectFromAndToDate', 'showTimeTracking']
        },
        editAndDetailsPerson: {
            components: ['editAndDetailsPerson', 'showTimeTracking']
        },
    },
    components: {
        selectFromAndToDate: {
            template: 'form',
            dataPath: 'dateFilter',
            text: 'Velg periode',
            columns: [
                { text: 'Fra dato', dataPropertyName: 'fromDate', dataType: 'date' },
                { text: 'Til dato', dataPropertyName: 'toDate', dataType: 'date' },
            ]
        },
        editAndDetailsPerson: {
            template: 'form',
            dataPath: 'people',
            text: 'Rediger person',
            columns: [
                { text: 'Fornavn', dataPropertyName: 'firstName' },
                { text: 'Etternavn', dataPropertyName: 'lastName' },
                { text: 'Email', dataPropertyName: 'email' },
                { text: 'Sist aktiv', dataPropertyName: 'lastActiveDate', dataType: 'date' },
            ],
        },
        showProject: {
            template: 'form',
            dataPath: 'projects',
            text: 'Prosjekt',
            columns: [
                { text: 'Navn', dataPropertyName: 'name' },
                { text: 'Startet dato', dataPropertyName: 'startedDate' },
            ],
        },
        showPeople: {
            template: 'table',
            dataPath: 'people',
            text: 'Personer',
            columns: [
                { text: 'Fornavn', dataPropertyName: 'firstName' },
                { text: 'Etternavn', dataPropertyName: 'lastName' },
                { text: 'Email', dataPropertyName: 'email' },
                { text: 'Sist aktiv', dataPropertyName: 'lastActiveDate', dataType: 'date' },
            ],
            operations: [
                { text: 'rediger', goToPage: 'editAndDetailsPerson', params: { edit: true } },
                { text: 'detaljer', goToPage: 'editAndDetailsPerson', params: { edit: false } },
                { text: 'slett', doAction: 'deletePersonAction' },
            ]
        },
        showTimeTracking: {
            template: 'table',
            dataPath: 'timeTracking',
            text: 'Ført tid',
            columns: [
                // person: 1, project: 1, day: '2019-01-01', hours: 5.5
                { text: 'Person', dataPropertyName: 'person' },
                { text: 'Dato', dataPropertyName: 'date', dataType: 'date' },
                { text: 'Timer', dataPropertyName: 'hours' },
            ],
            operations: []
        },
        showProjects: {
            template: 'table',
            dataPath: 'projects',
            text: 'Prosjekter',
            columns: [
                { text: 'Navn', dataPropertyName: 'name' },
            ],
            operations: [
                { text: 'detaljer', goToPage: 'showProject' },
            ]
        }
    },
};
