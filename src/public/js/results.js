const IMAGE_BUFFER = new Set()

window.addEventListener("load", function () {
    let images = document.querySelectorAll(".results-image")
    images.forEach(image => {
        image.addEventListener("click", (e) => {
            if (!e.target.selected) {
                e.target.selected = true
                e.target.closest("div").classList.toggle("selected")
                IMAGE_BUFFER.add(e.target.src)
            } else {
                e.target.selected = false
                e.target.closest("div").classList.toggle("selected")
                IMAGE_BUFFER.delete(e.target.src)
            }
            console.log(IMAGE_BUFFER)
        })
    })

    const SubmitButton = document.getElementById("submit")
    SubmitButton.addEventListener("click", (e) => {
        console.log(JSON.stringify({ "results": Array.from(IMAGE_BUFFER) }))
        fetch("/upload", {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "results": Array.from(IMAGE_BUFFER)
            })
        }).then(res => {
            window.location.href = "/"
        })
    })
})