document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const first = document.getElementById("firstname").value;
    const last = document.getElementById("lastname").value;
    const Age = document.getElementById("age").value;

    if (!first || !last) {
        alert("Please provide your full name.");
        return;
    }

    if (!Age || Age < 18) {
        alert("You must be 18 years or older to submit this form.")
    }

    const data = {
        firstName: first,
        lastName: last

        
    }

    
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "pforms.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("myForm").innerHTML = " ";
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(data));
    console.log(data);

});