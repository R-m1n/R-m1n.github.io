var lang = document.documentElement.lang

function isValid(value) {
    return !(value == null || typeof value == 'undefined' || value.length == 0);
}

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}

function clearField(field) {
    field.value = ""
}

(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });

    document.querySelector(".submit-btn").addEventListener("click", (e) => {
        var name = document.getElementById("user-name")
        var email = document.getElementById("user-email")
        var subject = document.getElementById("subject")
        var message = document.getElementById("message")

        if (!isValid(name.value)) {
            clearField(name)
            if (lang == "en") alert("Please enter a name!")
            if (lang == "tr") alert("Lütfen bir isim giriniz!")

            return
        }

        if (!(isValid(email.value) && isEmail(email.value))) {
            clearField(email)
            if (lang == "en") alert("Please enter another email!")
            if (lang == "tr") alert("Lütfen başka bir email girin!")

            return
        }

        if (!isValid(subject.value)) {
            clearField(subject)
            if (lang == "en") alert("Please enter a subject!")
            if (lang == "tr") alert("Lütfen bir konu giriniz!")

            return
        }

        if (!isValid(message.value)) {
            clearField(message)
            if (lang == "en") alert("Please write your message!")
            if (lang == "tr") alert("Lütfen mesajınızı yazınız!")

            return
        }

        $.ajax({
            url: 'sendEmail.php',
            method: 'POST',
            dataType: 'json',
            data: {
                name: name.value,
                email: email.value,
                subject: subject.value,
                body: message.value
            }
        });

        if (lang == "en") alert("Message sent successfully.")
        if (lang == "tr") alert("Mesaj başarıyla gönderildi.")

        clearField(name)
        clearField(email)
        clearField(subject)
        clearField(message)
    })

})();