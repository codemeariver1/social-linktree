// Grab all of the share buttons
const shareBtns = document.querySelectorAll('.tile-share-btn')

async function copyText(e) {
    // Prevent the button from going to the site
    e.preventDefault()

    // Check clicked link for resume, if so, discontinue
    const btnName = this.previousElementSibling.textContent
    if (btnName === "Resume") {
        alert("Can't download the linked file at the moment")
        return
    }

    // Grab the selected link
    const link = this.getAttribute('link')

    // Copy the link to the clipboard
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied link: " + link + " to the clipboard")
    } catch (err) {
        console.log(err)
    }
}

shareBtns.forEach(shareBtn => shareBtn.addEventListener('click', copyText))