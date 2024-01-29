export function insertRow(table, expressionValue, result) {
    let tbody = table.querySelector('tbody') 
    let th = tbody.querySelector('tr:last-child th')
    let row = th == null ? 0 : th.innerHTML
    tbody.innerHTML += `<tr>
        <th scope="row">${row+1}</th>
        <td>${expressionValue}</td>
        <td>${result}</td>
    </tr>`
}