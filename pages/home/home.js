setInterval(() => this.refreshCounter(), 1000)

function refreshCounter() {
    const COUNTER = document.getElementById('refresh-counter')

    if(COUNTER.innerText > 1)
        COUNTER.innerText = COUNTER.innerText - 1
    else
        location.reload()

}

