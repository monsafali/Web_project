let btn = document.getElementById("clickbtn");
    let inputField = document.querySelector(".inputvalue");
    let outputDiv = document.querySelector(".output");

    btn.addEventListener("click", () => {
        let inputValue = inputField.value;
        if (inputValue) {
            // Create a new paragraph element
            let newPara = document.createElement("p");
            newPara.textContent = inputValue;
            
            // Append the new paragraph to the output div
            outputDiv.appendChild(newPara);
            
            // Clear the input field
            inputField.value = "";
        }
    });

    



    // singup

    (function() {
        'use strict';
        window.addEventListener('load', function() {
            var form = document.getElementById('registerForm');
            var loginButton = document.getElementById('loginButton');

            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);

            loginButton.addEventListener('click', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    form.classList.add('was-validated');
                }
            });
        }, false);
    })();





