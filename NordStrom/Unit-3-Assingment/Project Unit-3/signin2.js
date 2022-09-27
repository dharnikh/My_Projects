var Email = JSON.parse(localStorage.getItem("userEmail"));
document.querySelector("#emailPara").innerText = Email;
var windowsize = window.innerWidth;
console.log(windowsize)
if(windowsize < 750) {
    document.querySelector("#nav").innerHTML = `<input type="search" placeholder="Search for product or brands">`

}

document.querySelector("#signinBtn").addEventListener("click", loginFunction);
document.querySelector("#showPs").addEventListener("click", toggle);

function toggle() {
    var textinside = document.querySelector("#showPs").innerText;
    console.log(textinside)
    if(textinside == "Show") {
        document.getElementById("inputPassword").setAttribute("type", "text")
        document.querySelector("#showPs").innerText = "Hide"
    }
    else if (textinside == "Hide") {
        document.getElementById("inputPassword").setAttribute("type", "password")
        document.querySelector("#showPs").innerText = "Show"       
    }
}
function loginFunction() {
    var password = document.querySelector("#inputPassword").value;
    var Email = JSON.parse(localStorage.getItem("userEmail")); 
    var arr = JSON.parse(localStorage.getItem("userDataList"))
    var found = true;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i].userEmail == Email && Number(arr[i].userPassword) == Number(password)) {
            alert("Login successful")
            localStorage.setItem("userName", JSON.stringify(arr[i].userFirstName));
            localStorage.setItem("is_loggedIn", JSON.stringify("true"));
            window.location.href = "../index.html"
            break;
        }
        else {
            found = false
        }
    }
    if (found == false) {
        alert("Please enter valid credentials")
    }
}
var cartproduct = JSON.parse(localStorage.getItem("cartList")) || [];
var len=document.querySelector("#cart-len");
len.innerText=cartproduct.length;