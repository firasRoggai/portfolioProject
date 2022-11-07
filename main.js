import * as bootstrap from "bootstrap";
import LocomotiveScroll from 'locomotive-scroll';
const mine = ()=>{
    console.lo("test")
}
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});
