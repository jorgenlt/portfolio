const urlResult = document.querySelector("#url-result");
const linkInput = document.getElementById("linkinput");
const myInput = document.getElementById("myinput");
const message = document.getElementById("message");
const copied = document.querySelector("#copied");

const show = () => urlResult.style.visibility = "visible";

const clearValue = () => linkInput.value = '';

urlResult.addEventListener("click", () => {
    copied.classList.remove("d-none");
    setTimeout(() => {
        copied.classList.add("d-none");
    }, 1500 );
});

myInput.addEventListener('click', () => {
    const link = linkInput.value;
    const data = {
        "domain":"url.jorgenlt.me",
        "originalURL": link,
        "allowDuplicates":false
    };
    fetch('https://api.short.cm/links/public', {
    method: 'post',
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': 'pk_0Un0di4WhxYgCjwn'
    },
    body: JSON.stringify(data)
    })
    .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then((data) => {
        message.innerHTML = data.shortURL;
        show();
        new ClipboardJS("#url-result");
        clearValue();
    })
    .catch((error) => {
        console.error('Error:', error);
    })
});

