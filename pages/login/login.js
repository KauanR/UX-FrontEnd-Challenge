document.getElementById('submit-btn').addEventListener('click', event => {
    event.preventDefault()

    const USER = document.getElementById('user')
    const PASSWORD = document.getElementById('password') 
    const ERROR_MESSAGE = document.getElementById('error-message')

    if(USER.value === 'email.usuario@compasso.com.br' && PASSWORD.value === '123456789') {
        USER.classList.remove('invalid')
        PASSWORD.classList.remove('invalid')
        ERROR_MESSAGE.classList.add('hidden')
        window.location.href = window.location.origin + '/UX-FrontEnd-Challenge/pages/home/home.html'
    } else {
        USER.classList.add('invalid')
        PASSWORD.classList.add('invalid')
        ERROR_MESSAGE.classList.remove('hidden')
    }
})
