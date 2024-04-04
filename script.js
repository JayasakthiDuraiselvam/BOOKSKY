var addpopupbutton = document.getElementById("add-popup-button")
function change() {
    var popupoverlay = document.getElementById("over").style.display = "block";
    var popupbox = document.getElementById("boxy").style.display = "block";

}


var cancelpopup = document.getElementById("cancel-popup")

cancelpopup.addEventListener("click", function (event) {
    event.preventDefault()
    var popupoverlay = document.getElementById("over").style.display = "none";
    var popupbox = document.getElementById("boxy").style.display = "none";
})

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.querySelector(".book-title-input")
var bookauthorinput=document.querySelector(".book-author-input")
var bookdescriptioninput=document.querySelector(".book-description-input")


addbook.addEventListener("click",function(event){

    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebook(event)" class="button">Delete</button>`
    container.append(div)
    var popupoverlay = document.getElementById("over").style.display = "none";
    var popupbox = document.getElementById("boxy").style.display = "none";

})

function deletebook(){
    event.target.parentElement.remove()
}

var resetall=document.getElementById("resetall")

resetall.addEventListener("click",function(event){
    event.preventDefault()
    booktitleinput.value=""
    bookauthorinput.value=""
    bookdescriptioninput.value=""
})

    