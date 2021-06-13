const ratio = .8
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.reveal').forEach(function (r) {
    observer.observe(r)
})



const burger = document.querySelector('.burger')
const navigation = document.querySelector('.navigation')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    navigation.classList.toggle('open')
})
