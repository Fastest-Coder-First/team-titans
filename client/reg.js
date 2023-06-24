


const setTheme = (theme) => {
    const root = document.querySelector(":root");
    root.style.setProperty("--background", theme.background);
    root.style.setProperty("--color", theme.color);
    root.style.setProperty("--primary-color", theme.primaryColor);
    root.style.setProperty("--glass-color", theme.glassColor);
};

const displayThemeButtons = () => {
    const btnContainer = document.querySelector(".theme-btn-container");
    themes.forEach((theme) => {
        const div = document.createElement("div");
        div.className = "theme-btn";
        div.style.cssText = `background: ${theme.background}; width: 25px; height: 25px`;
        btnContainer.appendChild(div);
        div.addEventListener("click", () => setTheme(theme));
    });
};

displayThemeButtons();

            function validateForm() {
                var password = document.getElementById("password").value;
                var confirmPassword = document.getElementById("confirmPassword").value;

                if (password !== confirmPassword) {
                    alert("Passwords do not match. Please check and try again.");
                    return false;
                }
            }
            function validateForm() {
                var username = document.querySelector('input[type="text"][placeholder="USERNAME"]').value;
                var company = document.querySelector('input[type="text"][placeholder="COMPANY"]').value;
                var email = document.querySelector('input[type="email"][placeholder="EMAIL"]').value;
                var password = document.getElementById('password').value;
                var confirmPassword = document.getElementById('confirmPassword').value;
              
                // Validate input fields (example validation)
                if (username.trim() === '') {
                  alert('Please enter a username');
                  return;
                }
              
                if (company.trim() === '') {
                  alert('Please enter a company');
                  return;
                }
              
                if (email.trim() === '') {
                  alert('Please enter an email');
                  return;
                }
              
                if (password.trim() === '') {
                  alert('Please enter a password');
                  return;
                }
              
                if (confirmPassword.trim() === '') {
                  alert('Please confirm your password');
                  return;
                }
              
                if (password !== confirmPassword) {
                  alert('Passwords do not match');
                  return;
                }
              
                // Create an object with the form data
                var formData = {
                  username: username,
                  company: company,
                  email: email,
                  password: password
                };
              
                // Send the form data to the server
                fetch('http://127.0.0.1:5000/register', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(formData)
                })
                .then(function(response) {
                  if (response.ok) {
                    // Registration successful
                    alert('Registration successful');
                    // Do something with the response data if needed
                  } else {
                    // Registration failed
                    alert('Registration failed');
                  }
                })
                .catch(function(error) {
                  // Error occurred during the request
                  console.error('Error:', error);
                });
              }
              