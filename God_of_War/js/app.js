//DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {

    let tl1 = new TimelineMax();

    tl1
        .fromTo('.scroll', 1, { width: '100%' }, {
            width: '0%', delay: 5, ease: Expo.easeInOut
        })

        .fromTo('.bg-video', 2,
            { width: '0%', opacity: 0 },
            {
                width: '100%', opacity: 1, ease: Power3.easeInOut
            }, '-=1')

})