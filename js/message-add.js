document.addEventListener("DOMContentLoaded", (event)=>{
    let form = document.getElementsByTagName("form");
    console.log(form);
    document.getElementById('submit').addEventListener('click', (event) => {
        event.preventDefault();
        let name = document.getElementById('contact-form-message').value;
        let email = document.getElementById('contact-form-email').value;
        let message = document.getElementById('contact-form-message').value;
        let clone = document.querySelector('template').content.cloneNode(true);
        console.log(clone);
        clone.querySelector('.message-content').value = message;
        console.log(message);
    });
});