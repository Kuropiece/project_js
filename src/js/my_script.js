function add() {
    "use strict";
    /*variable declaration*/
    var InputName = document.getElementById("InputName1").value,
        InputFirstName = document.getElementById("InputFirstName1").value,
        row = document.createElement("tr"),
        td1 = document.createElement("td"),
        td2 = document.createElement("td"),
        nomComplet = InputName + " " + InputFirstName,
        newOption = document.createElement("option");
    
    /*Adding input values into the table*/
    document.getElementById("ClientsTable").appendChild(row);
    row.appendChild(td1);
    row.appendChild(td2);
    td1.innerHTML = InputName;
    td2.innerHTML = InputFirstName;
    
    /*Adding input values into the drop-down list*/
    document.getElementById("SelectClients").appendChild(newOption);
    newOption.innerHTML = nomComplet;
}

function del() {
    "use strict";
    /*Variable declaration*/
    var dropListValue = document.getElementById("SelectClients").value,
        str = dropListValue,
        array = str.split(" "), /*The string gets splitted into two parts, these parts each go in a different cell*/
        a = array[0],
        b = array[1];
    /*Puts split names into textboxes*/
    if (a === "")
        {
            document.getElementById("InputName").value = ""; /*Prevents "InputFirstName" from reading "Undefined" when the list goes back to blank*/
            document.getElementById("InputFirstName").value = "";
        } else {
            document.getElementById("InputName").value = a;
            document.getElementById("InputFirstName").value = b;   
        }
    /*Deletes the row*/
    
}