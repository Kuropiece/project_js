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
    document.getElementById("InputFirstName1").value = "";
    document.getElementById("InputName1").value = "";
    
    /*Adding input values into the table*/
    if(InputName === "" || InputFirstName === "") { /*Avoids adding empty values to the table*/
        alert("Veuillez entrer un nom correct.");
        return;
    } else {
        document.getElementById("ClientsTable").appendChild(row);
        row.setAttribute("id", InputName+InputFirstName);
        row.appendChild(td1);
        row.appendChild(td2);
        td1.innerHTML = InputName;
        td2.innerHTML = InputFirstName;
    }
    
    /*Adding input values into the drop-down list*/
    document.getElementById("SelectClients").appendChild(newOption);
    newOption.innerHTML = nomComplet;
}
/*Adds the client's name from the droplist into the text inputs*/
function listToText() {
    "use strict";
    /*Variable declaration*/
    var dropListValue = document.getElementById("SelectClients").value,
        table = document.getElementById("ClientsTable"),
        cells = table.getElementsByTagName("td"),
        str = dropListValue,
        array = str.split(" "), /*The string gets splitted into two parts, these parts each go in a different cell*/
        a = array[0],
        b = array[1];
    /*Puts split names into textboxes*/
    if (a === "") {
            document.getElementById("DelName").value = ""; /*Prevents "InputFirstName" from reading "Undefined" when the list goes back to blank*/
            document.getElementById("DelFirstName").value = "";
        } else {
            document.getElementById("DelName").value = a;
            document.getElementById("DelFirstName").value = b;  
        }
}
/*Deletes the chosen client (selected in the droplist) from the table, the list, and the text inputs*/
function del() {
    "use strict";
    /*Variable declaration*/
    var name = document.getElementById("DelName").value,
        firstName = document.getElementById("DelFirstName").value,
        fullName = name + firstName,
        element = document.getElementById(fullName),
        list = document.getElementById("SelectClients");

    element.parentNode.removeChild(element);
    list.remove(list.selectedIndex);
    document.getElementById("DelName").value = "";
    document.getElementById("DelFirstName").value = "";
    
}
