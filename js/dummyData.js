var dummyData = {
    people: [
        { id: 1, firstName: 'Terje', lastName: 'Kolderup', email: 'terje@getacademy.no', lastActiveDate: '2019-01-01' },
        { id: 2, firstName: 'Per', email: 'per@getacademy.no' },
        { id: 3, firstName: 'Pål', email: 'paal@getacademy.no' },
        { id: 4, firstName: 'Espen', email: 'espen@getacademy.no' },
    ],
    projects: [
        { id: 1, name: 'Ship Online', startedDate: '2018-11-11' },
        { id: 2, name: 'Comtech' },
        { id: 3, name: 'Renewgen' },
    ],
    timeTracking: [
        { person: 1, project: 1, date: '2019-01-01', hours: 5.5 },
        { person: 1, project: 2, date: '2019-01-01', hours: 2 },
        { person: 2, project: 2, date: '2019-01-01', hours: 4 },
        { person: 3, project: 2, date: '2019-01-01', hours: 7 },
    ],
    dateFilter:
    {
        fromDate: dateStringFromTodayDelta(-7),
        toDate: dateStringFromTodayDelta(0),
    }

};