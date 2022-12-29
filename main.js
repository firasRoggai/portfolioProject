import * as bootstrap from "bootstrap";
import 'animate.css';
// animation:
const header = document.querySelector(".hJS")
let i = 0;
const observer = new IntersectionObserver(entries => {
    entries.forEach(element => {
        i++
        if(i<=2){
        element.target.classList.toggle("animate__fadeInUp")
    }
     })
},{
    margin: 5
})
observer.observe(header)
