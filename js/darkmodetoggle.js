function setDarkMode() {
    document.body.setAttribute('data-bs-theme', 'dark');
    document.body.style.backgroundColor = '#222';
    document.body.style.color = '#fff';
}

function setLightMode() {
    document.body.setAttribute('data-bs-theme', 'light');
    document.body.style.backgroundColor = '#f0f0f0';
    document.body.style.color = '#000';
}

function calculateFactorial() {
    const input = document.getElementById("numberInput").value;
    const resultDiv = document.getElementById("result");

    let factorial = 1;
    for (let i = 1; i <= input; i++) {
        factorial *= i;
    }

    resultDiv.innerText = `${input}! = ${factorial}`;
}
