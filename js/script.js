// type your javascript code below
function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let bmi = getBMI(weight, height).toFixed(1);
    let bmiResult;
    if (bmi < 18.5) {
        bmiResult = "Underweight";
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiResult = "Healthy Weight";
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        bmiResult = "Over Weight";
    }
    else if (bmi >= 30) {
        bmiResult = "Obese";
    }
    setResult(bmi, bmiResult);
}

function getBMI(w, h) {
    h = h / 100;
    return w / (h * h);
}

function setResult(bmi, result) {
    document.getElementById("bmi-value").innerText = bmi;
    document.getElementById("bmi-result").innerText = result;
    let inputBox = document.querySelector(".bmi-box");
    inputBox.setAttribute("hidden", "true");
    let outputBox = document.querySelector(".result-box");
    outputBox.removeAttribute("hidden");
    if (result === "Underweight") {
        outputBox.classList.add("border-info");
    }
    else if (result === "Healthy Weight") {
        outputBox.classList.add("border-success");
    }
    else if (result === "Over Weight") {
        outputBox.classList.add("border-warning");
    }
    else {
        outputBox.classList.add("border-danger");
    }
}












//Type your javascrit code above 