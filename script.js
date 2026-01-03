const form = document.getElementById('loginForm');
const message = document.getElementById('message');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // form ko submit hone se roke

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if(username === "" || password === "") {
        message.style.color = "red";
        message.textContent = "Please fill all fields!";
    } else {
        message.style.color = "green";
        message.textContent = "Login Successful!";

        // Page ko refresh karke wapas login page par le aana
        setTimeout(() => {
            window.location.reload(); // ye page reload karta hai
        }, 1000);
    }
});
