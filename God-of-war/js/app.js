//DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {

    let tl = new TimelineMax();

    tl.fromTo('.bg-loader', 1, 
        {width: '100%' }, 
        {width: '0%', delay: 3, ease: Expo.easeInOut})

    tl.fromTo('.bg-video', 1.5, 
        {width: '0%', opacity: 0}, 
        {width: '100%', opacity: 1, ease: Expo.easeInOut}, '-=1')

    tl.fromTo('.logo', 1.5, 
        {y: -50, opacity: 0}, 
        {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    tl.fromTo('.hamburguer', 1, 
        {y: -50, opacity: 0}, 
        {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    tl.fromTo('.nav-list', 1, 
        {y: -50, opacity: 0}, 
        {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    tl.fromTo('.nav-social', 1, 
        {y: -50, opacity: 0}, 
        {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    tl.fromTo('.jogo', 1, 
        {x: -50, opacity: 0}, 
        {x: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    tl.fromTo('.item-2', 1, 
        {x: -50, opacity: 0}, 
        {x: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    tl.fromTo('.item-3', 1, 
        {x: -50, opacity: 0}, 
        {x: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')
        
    tl.fromTo('.item-4', 2, 
        {x: -500, opacitx: 0}, 
        {x: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.8') 

    tl.fromTo('.item-5', 1, 
        {y: -50, opacity: 0}, 
        {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5') 
 
});


