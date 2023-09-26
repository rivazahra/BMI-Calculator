function getData(){

    let weight = document.getElementById('berat').value;
    let height = document.getElementById('tinggi').value;

    return{
        weight,height
    }
}

function isNumber(string) {
    if (isNaN(string)) {
      return false;
    }
    return true;
  }
  
  let validasiData = getData()
  function validasiInput(validasiData){
    let weight = document.getElementById('berat').value
    let height = document.getElementById('tinggi').value
    if(validasiData !==null && isNumber(validasiData.weight, validasiData.height)){
        return true
    }

    let hasil = document.getElementById('hasil')
    let bmi = weight / ((height/100) **2)
bmi = bmi.toFixed(1)
    if(bmi <= 18.5){
        hasil.textContent = ` Your BMI is ${bmi} which means You Are Underweight :(`;
    }else if(bmi>=18.5 && bmi <= 24.9){
        hasil.textContent = ` Your BMI is ${bmi} which means You Are Normal`;

    }else if( bmi >=25 && bmi<= 29.9){
        hasil.textContent = ` Your BMI is ${bmi} which means You Are Overweight :(`;

    }else{
        hasil.textContent = ` OMG BMI is ${bmi} which means You Are Obesity, get A DIET`;

    }
  }

  let submit = document.getElementById('check').addEventListener('click',validasiInput)
