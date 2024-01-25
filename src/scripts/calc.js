let inputCalc = document.getElementById('inputCalc');
let result = document.getElementById('result');
let historicContainerDiv = document.getElementById('historicContainer');

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let resultado = eval(inputCalc.value);


        let objectToSave = {
            calc: inputCalc.value,
            result: resultado
        }

        let previousValues = JSON.parse(window.localStorage.getItem('historic')) || [];

        previousValues.push(objectToSave);
        historicContainerDiv.innerHTML += `
            <div class="itemResult">
                <div>${objectToSave.calc}</div>
                <div>${objectToSave.result}</div>
            </div>
            `

        window.localStorage.setItem('historic', JSON.stringify(previousValues));

        result.innerText = resultado;
    }
})



