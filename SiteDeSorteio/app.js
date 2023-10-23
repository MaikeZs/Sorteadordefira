async function sortear() {
    const total = Number(document.querySelector('#TotalResultadoInput').value)

    const valormenor = Number(document.querySelector('#ValorMenorInput').value)
    

    const valormaior = Number(document.querySelector('#valorMaiorInput').value)
    
    for(let j = 0; j < 30; j++) {

    const elementohtml2 = document.querySelector ('.results-values')
    elementohtml2.innerHTML = ''

   for(let i = 0; i < total; i++) {
    const resultado = Math.floor(Math.random() * (valormaior - valormenor + 1)) + valormenor

    const elementohtml = document.createElement('div')
    elementohtml.classList.add('results-value')
    elementohtml.innerText = resultado

    elementohtml2.append(elementohtml)

   }
   await wait(30)
}
   
}

function wait(tempo) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), tempo )
    })
}