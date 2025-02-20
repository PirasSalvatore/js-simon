// function declaration

/**
 * preso un valore minimo, uno massimo, genera un numero casuale tra questi estremi
 * ripete l'azione precedente n volte
 * ogni numero generato lo inseresci in un'arrey inizialmente vuoto
 * restituisce l'array popolato
 * @param {Number} min value min in the array
 * @param {Number} max value max in the array
 * @param {Number} n times object in the array
 * @returns {Number []} new array
 */
function numbersArrayGeneration(min, max, n) {
    const numberArray = []

    for (let i = 0; i < n; i++) {
        numberArray.push(Number(numberGenerate(min, max)))
    }
    return numberArray;
}

/**
 * generate a random number between min (included) and max (excluded)
 * return this random number
 * @param {Number} min 
 * @param {Number} max 
 * @returns {Number}
 */
function numberGenerate(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * genera i figli di un lista html
 * genera un elemento di una lista html per ogni elemento
 * @param {Number []} list 
 * @returns {String}
 */
function generateRandomNumbersListEl(list) {
    let listEl = ""

    for (let i = 0; i < list.length; i++) {
        listEl += `<li>${list[i]}</li>`
    }
    return listEl
}

/**
 * presa una lista di elementi input html resituisce una lista constenente
 * i valori degli input passati nella lista
 * @param {Array html input elemento} list lista di elementi tag input type Number
 * @returns {Number []} ritorna lista di numeri
 */
function createListUserNumber(list) {
    const numberList = []
    for (let i = 0; i < list.length; i++) {
        const thisEl = list[i].value
        numberList.push(Number(thisEl))
    }
    return numberList
}