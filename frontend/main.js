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
// fetching content :
async function getContent(type,action){
      let PROJECT_ID = "lvr4mint";
      let DATASET = "production";
    //   let type = "hero"
      let QUERY = encodeURIComponent(`*[_type == "${type}"]`);
      let CONTENT;
      let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
      let raw = await fetch(URL)
      let result =  await raw.json()
      action(result)
    }
    function fetchHero(content) {
        let {header,description} = content.result[0];
        const headerDiv = document.querySelector("#header");
        headerDiv.textContent = header;
        const descriptionDiv = document.querySelector("#description");
        descriptionDiv.textContent = description;
    }
    function fetchProjects(content) { 
        content.result.forEach((element,index)=>{
            let id;
            if(index < 3){id = "firstRow"}
            else {id = "secoundRow"}
            let {project : name,description,codeLink,demoLink} = element;
            let htmlCard = `
            <div class="card col-md-3 col-10 card border-primary py-1 mb-4">
            <div class="card-body">
              <h3 class="card-title fw-bold py-1">${name}</h3>
              <p class="card-text py-3 text-muted">
              ${description}
              </p>
              <div class="btns">
              <a href="${demoLink}" target="_blank" class="btn btn-dark btn-md">Demo</a>
              <a href="${codeLink}" target = "_blank" class="btn btn-dark btn-md">🍮 Github</a>
              </div>
            </div>
          </div>
            `
            addHtmlToDom(htmlCard,id)
        })
    }
    function fetchContact(content) { 
        content.result.forEach((element,index)=>{
            let id = "contact_container";
            let {socialMedia,username,link} = element;
            let htmlCard = `
            <div class="row px-3 align-items-center">
            <li class="item py-2 col-md-4 col px-1"><h3>${socialMedia}:</h3></li>
            <a class=" col mb-1" href="${link}">${username}</a>
          </div>
            `
            addHtmlToDom(htmlCard,id)
        })
    }
    function addHtmlToDom(html, elementId) {
        let targetElement = document.getElementById(elementId);
        let temp = document.createElement('div');
        temp.innerHTML = html;
        while (temp.firstChild) {
            targetElement.appendChild(temp.firstChild);
        }
    }
    
    getContent("hero",fetchHero)
    getContent("project",fetchProjects)
    getContent("contact",fetchContact)
    
      // messege : 
// console.log
// ("Hi there !")
// console.log("don't forget to say hi on my twitter :)  @firasRoggai")
