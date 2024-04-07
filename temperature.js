const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value ;
   // console.log(numberTemp);

   const tempSelected = document.getElementById('temp_diff');
   const valueTemp = temp_diff.options[tempSelected.selectedIndex].value; //selected index property sets or returns the index of the selected options in a drop down list.k
   //console.log(valueTemp);

   const celToFah = (cel) => {
    let Fahrenheit = Math.round((cel * 9/5) + 32);
    return  Fahrenheit;
   }

   const FahTocel = (Fah) => {
    let celsius = Math.round((Fah - 32) * 5/9);
    return  celsius;
   }

   let result;

   if (valueTemp == 'cel'){
    result = celToFah(numberTemp);
    document.getElementById('resultContainer').innerHTML= `= ${result}Fahrenheit`;
   }else{
    result = FahTocel(numberTemp);
    document.getElementById('resultContainer').innerHTML= `= ${result}celsius`;

   }

}