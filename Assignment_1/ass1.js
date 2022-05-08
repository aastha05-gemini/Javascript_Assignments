(function () {
    var c = 0;
    const array = [
      ["Name", "Age", "DOB", "Email", "Company"],
      ["Aastha", 21, "05/11/2000", "aastha@gmail.com", "Gemini"],
      ["Isha", 22, "09/03/2000", "isha@gmail.com", "Solutions"],
      ["Ashi", 26, "17/09/1997", "ashi@gmail.com", "Law"],
      ["Mayank", 20, "20/01/2001", "may@gmail.com", "Gal"],
      ["Harshita", 19, "26/09/2002", "har@gmail.com", "Mng"],
    ];
    var table = document.createElement("table");
    table.setAttribute("class", "table");
    var tHead = document.createElement("thead");
    tHead.setAttribute("class", "table-success");
    var tr = document.createElement("tr");
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");
    var th4 = document.createElement("th");
    var th5 = document.createElement("th");
    var text1 = document.createTextNode(array[0][0]);
    var text2 = document.createTextNode(array[0][1]);
    var text3 = document.createTextNode(array[0][2]);
    var text4 = document.createTextNode(array[0][3]);
    var text5 = document.createTextNode(array[0][4]);
    th1.appendChild(text1);
    th2.appendChild(text2);
    th3.appendChild(text3);
    th4.appendChild(text4);
    th5.appendChild(text5);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tr.appendChild(th5);
    tHead.appendChild(tr);
    table.appendChild(tHead);
    var tBody = document.createElement("tbody");
    for (var i = 1; i < 6; i++) {
      var tr = document.createElement("tr");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      var td3 = document.createElement("td");
      var td4 = document.createElement("td");
      var td5 = document.createElement("td");
      var text1 = document.createTextNode(array[i][0]);
      var text2 = document.createTextNode(array[i][1]);
      var text3 = document.createTextNode(array[i][2]);
      var text4 = document.createTextNode(array[i][3]);
      var text5 = document.createTextNode(array[i][4]);

      td1.appendChild(text1);
      td2.appendChild(text2);
      td3.appendChild(text3);
      td4.appendChild(text4);
      td5.appendChild(text5);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tBody.appendChild(tr);
      table.appendChild(tBody);
    }
    document.body.appendChild(table);
  })();