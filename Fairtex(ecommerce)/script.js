    let cartCount= 0;

    function addtocart() {
        cartCount++; 
        document.getElementById("cartCount").innerText = cartCount;
    }






  function signUp() {
  // Get values from input fields
  let username = document.getElementById("signupUser").value;
  let password = document.getElementById("signupPass").value;

  // Validate inputs
  if (username === "" || password === "") {
    alert("Please fill all fields!");
    return;
  }

  // Save credentials to localStorage
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  // Confirmation message
  document.getElementById("message").textContent = "Account created successfully!";
  document.getElementById("message").style.color = "white";

  // Clear inputs
  document.getElementById("signupUser").value = "";
  document.getElementById("signupPass").value = "";
}





  function login() {
  // Get entered credentials
  let username = document.getElementById("loginUser").value;
  let password = document.getElementById("loginPass").value;

  // Validate inputs
  if (username === "" || password === "") {
    alert("Please fill all fields!");
    return;
  }

  // Get stored credentials from localStorage
  let storedUser = localStorage.getItem("username");
  let storedPass = localStorage.getItem("password");

  // Check if credentials match
  if (username === storedUser && password === storedPass) {
    document.getElementById("message").textContent = "Login successful! Welcome " + username + "!";
    document.getElementById("message").style.color = "white";
  } else {
    document.getElementById("message").textContent = "Invalid username or password!";
    document.getElementById("message").style.color = "red";
  }

  // Clear login fields
  document.getElementById("loginUser").value = "";
  document.getElementById("loginPass").value = "";
}