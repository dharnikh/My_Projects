var name = JSON.parse(localStorage.getItem("userName"));
document.querySelector("#PlaceName").innerText = "Hi,"+ " " + name
document.querySelector("#showfirstName").innerText = "Welcome," + " "+ name + "!"

var windowsize = window.innerWidth;
// console.log(windowsize)
if(windowsize < 750) {
    document.querySelector("#nav").innerHTML = `<input type="search" placeholder="Search for product or brands">`

}

document.querySelector("#next").addEventListener("click", messageFunction)
function messageFunction() {
    document.querySelector("#imgDiv2").innerHTML = ""
    document.querySelector("#EM1").innerHTML = ""
    document.querySelector("#EM2").innerHTML = ""
    document.querySelector("#imgDiv3").innerHTML = ""
    document.querySelector("#endDiv").innerHTML = ""
    var h3 = document.createElement("h3")
    h3.innerText = "Call us to update your Nordy Club account"
    h3.style.marginTop = "-100px"
    var p = document.createElement("p")
    p.innerText = "Looks like we might not have the right info for your account. Give us a call at 1888.665.8779, and we'll sort it out for you."
    p.style.fontSize = "12px"
    document.querySelector("#emptyDiv").append(h3, p);
}
var cartproduct = JSON.parse(localStorage.getItem("cartList")) || [];
var len=document.querySelector("#cart-len");
len.innerText=cartproduct.length;