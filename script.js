function getData() {
  let weight = document.getElementById("berat").value;
  let height = document.getElementById("tinggi").value;

  return {
    weight,
    height,
  };
}

function isNumber(string) {
  if (isNaN(string)) {
    return false;
  }
  return true;
}

let validasiData = getData();
let hasil = document.getElementById("hasil");

// function validasiInput(validasiData){
//     if (validasiData !== null && isNumber(validasiData.weight, validasiData.height) ) {
//       return true;
//     }else{
//         return false
//     }

// }
function submit() {

  let weight = document.getElementById("berat").value;
  let height = document.getElementById("tinggi").value;

  if (!isNumber(weight) || !isNumber(height)) {
    hasil.textContent = "Weight and height must be valid numbers.";
    return;
  }

  let bmi = weight / (height / 100) ** 2;
  bmi = bmi.toFixed(1);
  let category = "";

   if (weight.trim() === "" || height.trim() === "") {
    hasil.textContent = `Weight and height can't be empty`;
    return;
  } else if (bmi <= 18.5) {
    category = `<span style="font-weight: bold;">Underweight 😣</span>`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = '<span style="font-weight: bold;">Normal 😃 </span>';
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = '<span style="font-weight: bold;">Overweight 😣</span>';
  } else if (bmi >= 30) {
    category = '<span style="font-weight: bold;">Obesity, GET ON DIET 😱 </span>';
  } else if (weight == "" && height == "") {
    hasil.textContent = "Periksa input sekali lagi";
  }

  hasil.innerHTML = ` Your BMI is ${bmi} which means You Are ${category}`;
}

let btnsubmit = document.getElementById("check").addEventListener("click", submit);
