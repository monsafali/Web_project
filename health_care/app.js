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








let  labels = document.querySelectorAll('.form-control label')
labels.forEach( label => {
    label.innerHTML = label.innerText
    .split('').map((letter, idx) => `<span style="transition-delay:${idx *50}ms">${letter}</span>`).join('')
})

