
const celsiusInput = document.getElementById ('celsius');
const fahrenheitInput = document.getElementById ('fahrenheit');
const resulttoF = document.getElementById ('resulttoF');
const resulttoC = document.getElementById ('resulttoC');

const btnCtoF = document.getElementById ('btnCtoF');
const btnFtoC = document.getElementById ('btnFtC');
const btnClear = document.getElementById ('btnClear');

// conver C to F;
function convertCtoF () {
    const celcius = celsiusInput.value.trim();

    
    if (celcius === "") {
        alert ("Enter the value in celcius !")
        return;       
    }
    
    const result = (celcius * 9/5) + 32;
    resulttoF.value = result.toFixed(2);    
}

// conver F to C;
function convertFtoC () {
    const fahrenheit = fahrenheitInput.value.trim();

    if (fahrenheit === "") {
        alert ("Enter the value in Fahrenheit !");  
        return true;
    }

    const result = (fahrenheit - 32) * 5/9;
    resulttoC.value = result.toFixed (2);
    console.log("entry");
    
}

btnCtoF.addEventListener ('click', convertCtoF);
btnFtoC.addEventListener ('click', convertFtoC);


// clear fields;
btnClear.addEventListener ('click', ()=> {
    celsiusInput.value = "";
    fahrenheitInput.value = "";
    resulttoF.value = "";
    resulttoC.value = "";
})


// show and hide option;
document.getElementById ('showHide').addEventListener ('click', ()=> {
    const formula = document.getElementById ('formula');

    if (formula.style.display === 'block') {
        formula.style.display = 'none';        
    } else {
        formula.style.display = 'block'        
    }
})

