// ==UserScript==
// @name         Obis:Sorter&DarkMode
// @icon         https://lms.ktun.edu.tr/pluginfile.php/1/theme_remui/faviconurl/1589613162/imageedit_1_7336125810.png
// @version      2.9.3.14
// @description  try to take over the world!
// @author       Acido
// @match        *://*.ktun.edu.tr/Ogrenci/*
// @downloadURL   https://github.com/Acidooo/obis-dark-mode/raw/master/Obis-Sorter%26DarkMode.user.js
// @updateURL     https://github.com/Acidooo/obis-dark-mode/raw/master/Obis-Sorter%26DarkMode.user.js
// @grant        GM_addStyle
// ==/UserScript==
/*jshint esversion: 6 */


GM_addStyle ( `

// .table-responsive {
// background: url('http://www.pxleyes.com/images/contests/kiwis/fullsize/sourceimage.jpg') no-repeat center center fixed !important;
// -webkit-background-size: cover !important;
// -moz-background-size: cover !important;
// -o-background-size: cover !important;
// background-size: cover !important;
// }

.text-center {
border: 1px solid #ddd;
padding: 8px;
line-height: 1.42857143;
vertical-align: top;
border-top: 1px solid #ddd;
}

body {
//     font-family: Avenir;
//     font-weight: 500;
-webkit-font-smoothing: antialiased;
background: #444;
color: #ffffff;
font-family: 'Open Sans';
}

table {
margin: auto;
}

table td {
border-top: 1px solid #eee;
}

td,
th {
padding: 10px;
}

button {
border: 0;
background: 0;
font: inherit;
//     font-weight: 500;
//     color: #1a94f1;
}

button:focus {
outline: 2px line #555;
outline-offset: 2px;
}

button::after {
content: "";
display: inline-block;
vertical-align: middle;
margin-left: 8px;
height: 0;
width: 0;
border: 5px solid transparent;
border-top-color: currentColor;
border-width: 4px 4px 0 4px;
transform: translateY(-50%) rotate(180deg);
transition: transform 0.3s ease;
}

button[data-order="true"]::after {
transform: translateY(-50%) rotate(0deg);
}

.skin-1 .breadcrumbs { background-color: #333; }

.page-content { background-color: #444; }

.main-container:before { background-color: #444; }

table.bg-red { background: #ff0000; }

pre code, table { background-color: #444; background:#444; }

table-striped{ background:#444; }

.table > thead > tr{ background-image: linear-gradient(to bottom,#444 0,#999 100%); color: #ffffff; }

.alert-info{ background-color: #d7effbd6; }

/* ANASAYFA */

.profile-info-row:first-child{ background-color: #444; }

.profile-info-row:first-child .profile-info-name, .profile-info-row:first-child .profile-info-value { background-color: #333; }

.profile-user-info-striped { background-color: #444; }

.profile-user-info-striped .profile-info-name { background-color: #333;color:#aaa; }

.profile-info-value{ background-color: #444; }

.alert-danger { background-color: #444;color: #ff1414; }

.btn.btn-white, .btn.btn-white.no-hover:active, .btn.btn-white.no-hover:hover {    background-color: #444 !important; }

.profile-info-value.text-center{ background-color: #444 !important; color:#7fb3f3 !important;}

.hrcgreen{ color: #05ec05 !important; }

tr:nth-child(even) { background-color: #555; }


` );//END GM_addStyle

var url = window.location;
var table = document.getElementById("dynamic-table");

if(window.location.href === "http://obis.ktun.edu.tr/Ogrenci/SonYilNotlari" || window.location.href === "http://obis2.ktun.edu.tr/Ogrenci/SonYilNotlari" || window.location.href === "http://obis3.ktun.edu.tr/Ogrenci/SonYilNotlari" ){
    for (var r = 0, n = table.rows.length; r < n; r++) {
        for (var c = 0, m = table.rows[parseInt(r)].cells.length; c < m; c++) {
            //             console.log(table.rows[r].cells[4].innerHTML)
            if( parseInt(table.rows[parseInt(r)].cells[4].innerHTML) !== null )
            {
                var sonuc = parseInt( table.rows[parseInt(r)].cells[4].innerHTML) * 0.4;
                var aa = (82 - sonuc) / 0.6;
                var cc = (50 - sonuc) / 0.6;
                if(!isNaN(sonuc)){
                    table.rows[parseInt(r)].cells[5].innerHTML = parseInt(Math.round(sonuc)).toString();
                    if(aa > 100){
                        table.rows[parseInt(r)].cells[6].innerHTML = "Maalesef";
                    }
                    else{
                        table.rows[parseInt(r)].cells[6].innerHTML = parseInt(Math.round(aa)).toString();
                    }
                    table.rows[parseInt(r)].cells[7].innerHTML = parseInt(Math.round(cc)).toString();
                }
            }
        }
    }
    var vize = document.getElementById("dynamic-table").rows[0].cells;
    vize[5].innerHTML = "%40";
    vize[6].innerHTML = "AA Almak İçin";
    vize[7].innerHTML = "CC Almak İçin";
}


try {
  var elements = document.querySelectorAll("[id=dynamic-table]");
    // console.log(element)
    for(var i=0; i<elements.length; i++) {
        elements[parseInt(i)].classList.remove("table-striped");
    }
}
catch(err) {
    console.warn("obis script:" + err);
}

var footer = document.querySelectorAll("div.footer-content");
footer[0].innerHTML = `<p style="font-size: 12px">
           Dark Mode by
           <a href="https://github.com/Acidooo" style="color:#5CFF00" >Acido</a>
         </p>`

/* document.getElementById("dynamic-table").style.backgroundImage="url('https://image.prntscr.com/image/RGfyz2IvSViDS4gsa8Pvvg.png')";

function sortFilter01(){
    const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

    const comparer = (idx, asc) => (a, b) => ((v1, v2) =>
                                              v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
                                             )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

    document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
        const table = th.closest('table');
        const tbody = table.querySelector('tbody');
        Array.from(tbody.querySelectorAll('tr'))
            .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
            .forEach(tr => tbody.appendChild(tr) );
    })));
} */

// var x = document.querySelectorAll('[class=profile-info-value text-center]');

// for (i = 0; i < x.length; i++) {
//   x[i].style.backgroundColor = "#444";
// }


// var element = document.getElementById("dynamic-table");


// Update the UI

function setup(table) {
    var body = table.querySelector("tbody");
    var head = table.querySelector("thead");
    var each = [].forEach;
    var map = [].map;
    var sort = [].sort;
    var slice = [].slice;

    // Inject the sorting buttons into the header cells
    if (body && head) {
        var headers = head.querySelectorAll("th");

        each.call(headers, function (cell, index) {
            var text = cell.innerText;

            var button = document.createElement("button");
            button.setAttribute("type", "button");
            button.innerText = text;
            button.dataset.order = false;

            button.addEventListener(
                "click",
                function () {
                    var order = this.dataset.order === "true";

                    // Sort based on the index and current order
                    var sorted = sorter(index, order);

                    // Update the UI
                    render(sorted);

                    // Set new order for next click
                    this.dataset.order = !order;
                },
                false
            );

            cell.innerHTML = "";
            cell.appendChild(button);
        });
    }


    function render(sorted) {
        // Debugging
        /* console.log(map.call(sorted, function(row) {
                return row.querySelectorAll('td')[index].innerText;
            }));*/
        // Clear the table contents
        body.innerHTML = "";
        // Re-inject the sorted rows
        each.call(sorted, function (row) {
            body.appendChild(row);
        });
    }

    // Get text from column
    function getText(element, index) {
        return element.querySelectorAll("td")[parseInt(index)].innerText;
    }

    // Perform sorting of data based on column index
    function sorter(index, order) {
        // Loop through each row to build a list of cells in column
        var rows = body.querySelectorAll("tr");
        // Sort by content
        return sort.call(slice.call(rows, 0), function (a, b) {
            // Get text content
            var content = {
                a: getText(a, index),
                b: getText(b, index)
            };

            // Parse numeric values
            var numeric = {
                a: parseInt(content.a.replace(/,/g, "")),
                b: parseInt(content.b.replace(/,/g, ""))
            };

            // How to sort
            var properties = {
                a: !isNaN(numeric.a) ? numeric.a : content.a,
                b: !isNaN(numeric.b) ? numeric.b : content.b
            };

            if (order) {
                if (properties.a > properties.b) {
                    return 1;
                } else if (properties.a < properties.b) {
                    return -1;
                }
            } else {
                if (properties.a > properties.b) {
                    return -1;
                } else if (properties.a < properties.b) {
                    return 1;
                }
            }

            return 0;
        });
    }
}

if(window.location.href === "http://obis.ktun.edu.tr/Ogrenci/SonYilNotlari" || window.location.href === "http://obis2.ktun.edu.tr/Ogrenci/SonYilNotlari" || window.location.href === "http://obis3.ktun.edu.tr/Ogrenci/SonYilNotlari"){
    setup(document.getElementById("dynamic-table"));
}

