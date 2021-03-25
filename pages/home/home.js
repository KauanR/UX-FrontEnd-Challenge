const DAYS_OF_THE_WEEK = [
    'domingo',
    'segunda-feira',
    'terça-feira',
    'quarta-feira',
    'sexta-feira',
    'sábado'
]

const MONTHS = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'
]

this.refreshHour()

setInterval(() => {
    this.refreshCounter()
    this.refreshHour()
}, 1000)

function refreshCounter() {
    const COUNTER = document.getElementById('refresh-counter')

    if(COUNTER.innerText > 1)
        COUNTER.innerText = COUNTER.innerText - 1
    else
        location.reload()

}

function refreshHour() {
    const DATE = new Date()
    
    const HOUR_DISPLAY = document.getElementById('hour-display')
    const DAY_DISPLAY = document.getElementById('day-display')

    const FORMATTED_HOURS = DATE.getHours().toString().length === 1 ? '0' + DATE.getHours() : DATE.getHours()
    const FORMATTED_MINUTES = DATE.getMinutes().toString().length === 1 ? '0' + DATE.getMinutes() : DATE.getMinutes()
    HOUR_DISPLAY.innerText = `${FORMATTED_HOURS}:${FORMATTED_MINUTES}`

    DAY_DISPLAY.innerText = `${DAYS_OF_THE_WEEK[DATE.getDay()]}, ${DATE.getUTCDate()} de ${MONTHS[DATE.getUTCMonth()]} de ${DATE.getUTCFullYear()}`
}

