export function scrollToTop() {
    const front = document.getElementById('front')

    front.scrollIntoView({
        behavior: 'smooth'
    })
}
