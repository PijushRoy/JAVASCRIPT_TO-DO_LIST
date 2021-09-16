let input = document.getElementById('inputField')
let button = document.getElementById('button')
let list = document.getElementById('list')
let icon = document.getElementsByClassName('closeIcon')


input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if (input.value === '') {
            document.getElementById('error-message').innerHTML = `Please Provide a value`
        } else {
            let text = e.target.value
            let liElement = createElementList(text)
            list.appendChild(liElement)
            list.insertAdjacentElement('beforeend', liElement)
            e.target.value = ''
            document.getElementById('error-message').innerHTML = ''
        }

    }
})


button.addEventListener('click', function (e) {
    if (input.value === '') {
        document.getElementById('error-message').innerHTML = `Please Provide a value`
    } else {
        let text = input.value
        let liElement = createElementList(text)
        list.appendChild(liElement)
        list.insertAdjacentElement('beforeend', liElement)
        input.value = ''
        document.getElementById('error-message').innerHTML = ``
    }
});



(function () {
    setInterval(() => {
        [...icon].forEach(item => {
            item.addEventListener('click', function (e) {
                let parent = this.parentElement
                parent.remove()
            })
        })
    }, 500)
})()



function createElementList(textValue) {
    let tag = document.createElement('li')
    tag.innerHTML = textValue
    tag.classList.add('list-group-item')

    function closeIcon() {
        let span = document.createElement('span')
        span.className = 'far fa-times-circle closeIcon'
        return span
    }
    let newTag = closeIcon()
    tag.appendChild(newTag)
    return tag
}