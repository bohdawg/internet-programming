"use strict"

let table = null;

function buildMatrix() {
    const row_num = parseInt(document.getElementById('row_num').value);
    const col_num = parseInt(document.getElementById('col_num').value);
    if (!table) {
        table = document.createElement('table');
        for (let i = 1; i <= row_num; i++) {
            let tr = document.createElement('tr');
            for (let j = 1; j <= col_num; j++) {
                let td = document.createElement('td');
                let td_input = document.createElement('input');
                td_input.type = 'text';
                td_input.id = `_${i}_${j}`;
                td_input.value = (2*i) / (5*j);
                td.appendChild(td_input);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        document.body.appendChild(table);
    }
}

function calculateMatrix() {
    let sum = 0;
    if (table) {
        for (let tr of table.children) {
            for (let td of tr.children) {
                sum += +parseFloat(td.firstChild.value).toFixed(6);
            }
        }
    }
    alert(`Сума елементів матриці: ${sum.toFixed(6)}`);
}