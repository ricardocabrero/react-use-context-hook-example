import { gsap } from 'gsap';

function transitionOpacity(ref, start, end, time) {
    return gsap.fromTo(ref, {opacity: start}, {opacity: end, duration: time});
}

function transitionFromLeft(ref, start, end, time) {
    return gsap.fromTo(ref, {x: start}, {x: end, duration: time});
}

export {
    transitionOpacity,
    transitionFromLeft,
}