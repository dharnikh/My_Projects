var Email = JSON.parse(localStorage.getItem("userEmail"));
document.querySelector("#emailPara").innerText = Email;

var windowsize = window.innerWidth;
// console.log(windowsize)
if(windowsize < 750) {
    document.querySelector("#nav").innerHTML = `<input type="search" placeholder="Search for product or brands">`

}

document.querySelector("#showPs").addEventListener("click", toggle);

function toggle() {
    console.log("ok")
    var textinside = document.querySelector("#showPs").innerText;
    console.log(textinside)
    if(textinside == "Show") {
        document.getElementById("password").setAttribute("type", "text")
        document.querySelector("#showPs").innerText = "Hide"
    }
    else if (textinside == "Hide") {
        document.getElementById("password").setAttribute("type", "password")
        document.querySelector("#showPs").innerText = "Show"       
    }
}

document.querySelector("#userDataForm").addEventListener("submit", userDataSubmit)

var userDataArr = JSON.parse(localStorage.getItem("userDataList")) || []
function userDataSubmit() {
    event.preventDefault();

    var userDataObj = {
        userEmail: Email,
        userFirstName: userDataForm.firstName.value,
        userLastName: userDataForm.lastName.value,
        userPassword: userDataForm.password.value,
    };
    console.log(userDataForm.firstName.value)
    if(userDataObj["userFirstName"].length != 0 && userDataObj["userLastName"].length != 0 && userDataObj["userPassword"].length != 0) {
        userDataArr.push(userDataObj)
        // console.log(userDataArr);
        localStorage.setItem("userName", JSON.stringify(userDataForm.firstName.value))
        localStorage.setItem("userDataList", JSON.stringify(userDataArr));
        localStorage.setItem("is_loggedIn", JSON.stringify("true"));
        window.location.href = "signup2.html";
    }
    else {
        alert("Fill required fields")
    }
}
var cartproduct = JSON.parse(localStorage.getItem("cartList")) || [];
var len=document.querySelector("#cart-len");
len.innerText=cartproduct.length;


 

 

