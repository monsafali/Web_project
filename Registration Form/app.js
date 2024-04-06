
document.getElementById("unselectLink").addEventListener("click", function(event) {
                  event.preventDefault(); // Prevent the default behavior of the link
              
                  // Uncheck both Yes and No radio buttons
                  document.getElementById("yesOption").checked = false;
                  document.getElementById("noOption").checked = false;
              });
    
function focusInput() {
    document.getElementById('emailInput').focus();
    document.getElementById('NameInput').focus();
    document.getElementById('LNameInput').focus();  
    document.getElementById('specificInput').focus();
    document.getElementById('city').focus();
    document.getElementById('Postal').focus();
}

function focusInput(inputId) {
    document.getElementById(inputId + 'Input').focus();
  }

  function cancelForm() {
    // Here you can add code to handle canceling the form, for example, resetting input fields or closing a modal.
    document.getElementById("myForm").reset(); // This resets the form fields to their default values.
  }



function focusInput(inputId) {
    document.getElementById(inputId + 'Input').focus();
  }

  function cancelForm() {
    document.getElementById("myForm").reset();
  }

  function validateForm() {
    var CivilCRM = document.getElementById('CivilCRM').value;
    var second = document.getElementById('second').value;
    var skill = document.getElementById('skill').value;
    var email = document.getElementById('emailInput').value;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('LNameInput').value;
    var address = document.getElementById('specificInput').value;
    var city = document.getElementById('city').value;
    var Postal = document.getElementById('Postal').value;
    var countryhome = document.getElementById('countryhome').value;
    var statehome = document.getElementById('statehome').value;

    if ( CivilCRM ==='' || second ==='' || skill ==='' ||fname === '' || lname === '' || address === '' || email ==='' || city ==='' || Postal ==='' || countryhome ==='' || statehome ==='') {
      alert('Please fill in all required fields.');
      return false; // Prevent form submission
    }

    // If all fields are filled, the form will be submitted
    return true;
  }