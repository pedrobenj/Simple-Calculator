const historicButton = document.getElementById('historicButton');
const historicContainer = document.getElementById('historicContainer');

historicButton.addEventListener('click', ()=>{
    // mostrar o container do resultado
    historicContainer.style.display = historicContainer.style.display === "none" ? "flex" : "none";

    // ocultar a div do resultado
    result.style.display = result.style.display === "flex" ? "none" : "flex";

    // pegar historico do local storage
    let values = JSON.parse(window.localStorage.getItem('historic')) || [];
    
    // colocar o historico dentro do container

    if (result.style.display === "flex") {
        historicContainer.innerHTML == "";
    } else {
        values.forEach(eachValue => {
            historicContainer.innerHTML += `
            <div class="itemResult">
                <div>${eachValue.calc}</div>
                <div>${eachValue.result}</div>
            </div>`
        });
    }
    

})

