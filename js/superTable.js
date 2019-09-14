class SuperTable {
    constructor(metadata, data) {
        this.metadata = metadata;
        this.data = data;
        this.formatters = {
            date: d => d !== undefined ? new Date(d).toLocaleDateString('nb-no') : '',
            string: s => s !== undefined ? s : ''
        };
    }

    getHtml() {
        let html = `<h3>${this.metadata.text}</h3>
            <table>
                <tr>`;
        for (let column of this.metadata.columns) {
            html += `<th>${column.text}</th>`;
        }
        html += `</tr>`;

        for (let row of this.data) {
            html += `<tr>`;
            for (let column of this.metadata.columns) {
                const formatter = this.formatters[column.dataType || 'string'];
                const value = row[column.dataPropertyName];
                html += `<td>${formatter(value)}</td>`;
            }
            for (let operation of this.metadata.operations) {
                const params = JSON.parse(JSON.stringify(operation.params || {}));
                params.id = row.id;
                const paramsText = JSON.stringify(params).replace(/"/g,'');
                let onclick = operation.goToPage
                    ? `goToPage('${operation.goToPage}', ${paramsText})`
                    : `doAction('${operation.doAction}', ${paramsText})`;

                html += `<td><button onclick="${onclick}">${operation.text}</button></td>`;
            }
            html += `</tr>`;
        }
        html += `</table>`;
        return html;
    }
}