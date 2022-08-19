var btn = document.getElementById("btn");
var ct = document.getElementById("content");
var tableE = document.getElementById("tb");
var nameHead = document.getElementById("nameHead");
var linkHead = document.getElementById("linkHead");
var changeTable = document.getElementById("changeTable");
var closeBtn = document.querySelector(".fa-close");
var insertTr;
var nameProfessor;
var urlLink;
var tName;
var tUrl;
var textName;
var textUrl;

btn.onclick = function () {

    // changeTable.innerHTML = "<table id=\"tb\"> <tr class=\"headT\"> <th id=\"nameHead\">Name</th> <th id =\"linkHead\">Website Link</th> </tr> </table>";
    if (ct.value === "" || ct.value === "*" ) {
        alert("Sorry No Result Found");
    } else {
        // result.style.display = "block";
        const xhr = new XMLHttpRequest();

        xhr.open('GET', `http://localhost:8000/search?query=${ct.value}`);
    
        xhr.send();
    
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    let data = JSON.parse(xhr.response);
                    // log(data);
                    if (data.length === 0) {
                        alert("Sorry No Result Found");
                    } else {
                        changeTable.style.display = "block";
                        changeTable.innerHTML = "<table id=\"tb\"> </table>";
                        for (const key in data) {
                            nameProfessor = data[key].name;
                            urlLink = data[key].url;
                            insertTr = document.createElement("tr");
                            tName = document.createElement("td");
                            tUrl = document.createElement("td");
                            insertTr.appendChild(tName);
                            insertTr.appendChild(tUrl);
                            textName = document.createTextNode(nameProfessor);
                            textUrl = document.createTextNode(urlLink);
                            tName.appendChild(textName);
                            tUrl.appendChild(textUrl);
                            document.getElementById("changeTable").appendChild(insertTr);
                            tUrl.style.cssText = "border: 1px solid #cad9ea; color: #666; width: 100%; height: 30px; background-color: #fff;"
                            tName.style.cssText = "border: 1px solid #cad9ea; color: #666; width: 100%; height: 30px; background-color: #fff;"
                            tb.style.cssText = "border-collapse : collapse; margin: 0 auto; text-align: center;"
                            nameHead.style.cssText = "background-color: #CCE8EB; width: 100%; height: 30px; border: 1px solid #cad9ea;"
                            linkHead.style.cssText = "background-color: #CCE8EB; width: 100%; height: 30px; border: 1px solid #cad9ea;"

                        }
                    }
                }
            }
        }
    }
}


closeBtn.onclick = function () {
    changeTable.style.display = "none";
}
