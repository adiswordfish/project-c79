pizzarecomarray = ["Margherita","Farm House","CHEESE N CORN", "Deluxe Veggie", "Peppy Paneer"]

function getmenu(){
    var htmldata
    htmldata ="<ol class='pizzarecomarray'>"
    pizzarecomarray.sort()
    for(var i=0;i<pizzarecomarray.length;i++){
        htmldata = htmldata+'<li>' + pizzarecomarray[i] + '</li>'
    }
    htmldata = htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
    var htmldata;
    var item = document.getElementById("add_item").value;
    pizzarecomarray.push(item)
    pizzarecomarray.sort()
    htmldata ="<section class='cards'>"
    for(var i=0;i<pizzarecomarray.length;i++){
        htmldata = htmldata+'<div class="card">' +"<img src='images/pizzaImg.png'>"+ "</img>"+ pizzarecomarray[i] + '</div>'
    }
    htmldata = htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}