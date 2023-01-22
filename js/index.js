// Grab page share button
const mainShareBtn = document.querySelector('.share-btn')

// Share the linktree with others
async function shareLinktree() {
    if (navigator.share) {
        navigator.share({
            title: "codemeariver's Linktree",
            url: "https://codemeariver-linktree.netlify.app"
        }).then(() => {
            alert("Thanks for sharing!")
        }).catch(console.error)
    } else {
        // Grab the page URL
        const link = window.location.href

        // Copy the page URL to the clipboard
        try {
            await navigator.clipboard.writeText(link)
            alert("Copied link: " + link + " to the clipboard")
        } catch (err) {
            console.log(err)
        }
    }
}

// Grab all of the share buttons
const tileShareBtns = document.querySelectorAll('.tile-share-btn')

// Copy the selected link text to clipboard
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

mainShareBtn.addEventListener('click', shareLinktree)
tileShareBtns.forEach(shareBtn => shareBtn.addEventListener('click', copyText))