let btn = document.querySelector('button')
let rowsInput = document.getElementById('rows')
let colsInput = document.getElementById('cols')


btn.addEventListener('click', createTable)

function createTable() {
    let body = document.body;
    let table = document.createElement("table");

    for(var i = 0 ; i < rowsInput.value; i++) {
        let tr = document.createElement("tr") 
        table.appendChild(tr);
        for(var j = 0 ; j < colsInput.value; j++) {
            let td = document.createElement("td") 
            let itemNum = (i * colsInput.value + 1) + j ;
            let txt = document.createTextNode(`${itemNum}`); 
            td.appendChild(txt)
            tr.appendChild(td);
        }
    }

    body.appendChild(table);
}