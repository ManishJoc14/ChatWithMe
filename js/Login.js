const form = document.getElementById("form");
let pass = document.getElementById("password");
let loginBtn = document.getElementById("btn");
let errorText = document.querySelector(".errorText");
// console.log(errorText);

form.onsubmit = (e) => {
    e.preventDefault();
}

loginBtn.onclick = () => {
    const xhr = new XMLHttpRequest();
    // console.log("clicked");
    xhr.open("POST", "php/login.php", true);
    xhr.onload = () => {
        let data = xhr.response;

        if (xhr.status == 200) {
            // console.log(data);
            if (data === "loginSuccessful") {
                location.href = "./user.php";
            }else{
                errorText.style.opacity = "1";
                errorText.textContent = data;
                console.log(data);
                pass.value = "";
                setTimeout(() => {
                    errorText.style.opacity="0";
                }, 3000);
            }
        }
    }



    let formData = new FormData(form);
    xhr.send(formData);
}