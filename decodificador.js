const text = [...document.querySelectorAll('textarea')];
const btn_cripto = document.querySelector('#btn_cripto');
const btn_descripto = document.querySelector('#btn_descripto');
const div_text = document.querySelector('.texto');
const btn_copy = document.querySelector('#btn_copy')
const alert_copy = document.querySelector('#alert_copy')

const array_text = []

const array_cripto = () => {
    while (array_text.length) {
        array_text.pop();
    }
    for (let i = 0 ; i < text[0].textLength; i++){
        if (text[0].value[i] == 'a') {
            array_text.push('ai')
        } else if (text[0].value[i] == 'e') {
            array_text.push('enter')
        } else if (text[0].value[i] == 'i') {
            array_text.push('imes')
        } else if (text[0].value[i] == 'o') {
            array_text.push('ober')
        } else if (text[0].value[i] == 'u') {
            array_text.push('ufat')
        } else {
            array_text.push(text[0].value[i])
        }
    }
}
// função do descripto
const array_descripto = () => {
    while (array_text.length) {
        array_text.pop();
    }
    for (let i = 0; i < text[0].textLength; i++) {
        if (text[0].value[i] == 'a'){
            i++
            if (text[0].value[i] == 'i') {
                array_text.push('a')
            }
        } else if (text[0].value[i] == 'e'){
            i++
            if (text[0].value[i] == 'n') {
                i++
                if (text[0].value[i] == 't'){
                    i++
                    if (text[0].value[i] == 'e') {
                        i++
                        if (text[0].value[i] == 'r') {
                            array_text.push('e')
                        }
                    }
                }
            }
        } else if (text[0].value[i] == 'i'){
            i++
            if (text[0].value[i] == 'm') {
                i++
                if (text[0].value[i] == 'e'){
                    i++
                    if (text[0].value[i] == 's') {
                        array_text.push('i')
                    }
                }
            }
        } else if (text[0].value[i] == 'o'){
            i++
            if (text[0].value[i] == 'b') {
                i++
                if (text[0].value[i] == 'e'){
                    i++
                    if (text[0].value[i] == 'r') {
                        array_text.push('o')
                    }
                }
            }
        } else if (text[0].value[i] == 'u'){
            i++
            if (text[0].value[i] == 'f') {
                i++
                if (text[0].value[i] == 'a'){
                    i++
                    if (text[0].value[i] == 't') {
                        array_text.push('u')
                    }
                }
            }
        } else {
            array_text.push(text[0].value[i])
        }
    }
}

// botão criptografar
btn_cripto.addEventListener('click', () =>{
    if (text[0].value == '') {
        text[0].placeholder = 'Erro! digite uma palavra antes de criptografar.'
    } else {
        array_cripto()
        if (div_text.parentNode.lastChild.tagName) {
            div_text.parentNode.lastElementChild.remove();
        }
        let p = document.createElement('p')
        p.setAttribute('id','copy_text')
        div_text.style.display = 'none';
        div_text.parentNode.appendChild(p)
        btn_copy.style.display = 'block'
        alert_copy.removeAttribute('class')
        for (let i = 0; i < array_text.length; i++) {
            const element = array_text[i];
            p.innerHTML += element
        }
        text[0].value = ''        
        text[0].placeholder = 'Digite seu texto aqui'
    }
})
// botão descriptografar
btn_descripto.addEventListener('click', () =>{
    if (text[0].value == '') {
        text[0].placeholder = 'Erro! digite uma palavra antes de descriptografar.'
    } else {
        array_descripto()
        if (div_text.parentNode.lastChild.tagName) {
            div_text.parentNode.lastElementChild.remove();
        }
        let p = document.createElement('p')
        p.setAttribute('id','copy_text')
        div_text.style.display = 'none';
        div_text.parentNode.appendChild(p)
        btn_copy.style.display = 'block'
        alert_copy.removeAttribute('class')
        for (let i = 0; i < array_text.length; i++) {
            const element = array_text[i];
            p.innerHTML += element
        }
        text[0].value = ''
        text[0].placeholder = 'Digite seu texto aqui'
    }
})
// botão copiar
btn_copy.addEventListener('click', ()=>{
    div_text.style.display = 'block'
    btn_copy.style.display = 'none'
// animação do copy
    const anima_copy = array_text.some((e) => e == ' ') ? 'Texto copiado!' : 'Palavra copiada!'
    alert_copy.innerHTML = anima_copy
    alert_copy.setAttribute('class','alert_copy_animation')
// função copy para area de trasferencia
    let copy_text = document.querySelector('#copy_text')
    navigator.clipboard.writeText(copy_text.innerHTML)
// fim da função
    if (div_text.parentNode.lastChild.tagName) {
        div_text.parentNode.lastElementChild.remove();
    }
}) 