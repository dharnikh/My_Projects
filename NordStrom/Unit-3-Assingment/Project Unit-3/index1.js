var displayName  = JSON.parse(localStorage.getItem("userName"));

var loggedIn = JSON.parse(localStorage.getItem("is_loggedIn"));

var windowsize = window.innerWidth;
// console.log(windowsize)
if(windowsize < 750) {
    document.querySelector("#nav").innerHTML = `<input type="search" placeholder="Search for product or brands">`

}

if (loggedIn == "true" && displayName != null) {
    var userDataArr = JSON.parse(localStorage.getItem("userDataList"));
    for(let i = 0; i < userDataArr.length; i++) {
        if(userDataArr[i].userFirstName == displayName) {
            var lastname = userDataArr[i].userLastName
        }
    }
    document.querySelector("#displayHere").innerHTML = "Hi,"+ " " + displayName  
    document.querySelector("#displayHere").removeAttribute("href")
    document.querySelector("#fullName").innerHTML = displayName + " " + lastname
    document.querySelector("#sign").innerHTML = ""  
    document.querySelector("#changeHere").innerHTML = "Log Out";

    document.querySelector("#logoutDiv").addEventListener("click", logoutFunction);

    function logoutFunction() {
        localStorage.setItem("is_loggedIn", JSON.stringify("false"));
        localStorage.setItem("cartList", JSON.stringify([]));
        localStorage.setItem("userName", JSON.stringify(""));
        localStorage.setItem("userEmail", JSON.stringify(""));
        alert("Log Out Successfully")
        location.reload()
    }
}

var cartproduct = JSON.parse(localStorage.getItem("cartList")) || [];
var len=document.querySelector("#cart-len");
len.innerText=cartproduct.length;