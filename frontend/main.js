import "animate.css";

// fetching content :
async function getContent(type, action) {
  let PROJECT_ID = "lvr4mint";
  let DATASET = "production";
  //   let type = "hero"
  let QUERY = encodeURIComponent(`*[_type == "${type}"]`);
  let CONTENT;
  let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
  let raw = await fetch(URL);
  let result = await raw.json();
  action(result);
}
function fetchHero(content) {
  let { header, description } = content.result[0];
  const headerDiv = document.querySelector("#header");
  headerDiv.textContent = header;
  addHtmlToDom('<span class="wave">👋</span>', "header");

  const descriptionDiv = document.querySelector("#description");
  let finalResult = description
    .split(" ")
    .map((element) => {
      if (element.indexOf("#") != -1) {
        element = element.split("#").splice(-1,1).join("");
        element = `<span class="heighlight text-warning">${element}</span>`;
      }
      return element;
    })
    .join(" ");
  descriptionDiv.innerHTML = finalResult;
}
function fetchProjects(content) {
  content.result.forEach((element, index) => {
    let id;
    let statusHtml;
    if (index < 3) {
      id = "firstRow";
    } else {
      id = "secoundRow";
    }

    let { project: name, description, codeLink, demoLink,status } = element;
    statusHtml = !status ? '<span class="not_done">not done</span>':""
    let htmlCard = `
            <div class="card col-md-3 col-10 card border-primary py-1 mb-4">
            <div class="card-body">
              <h3 class="card-title fw-bold py-1">${name}</h3>
              ${statusHtml}
              <p class="card-text py-3 text-muted">
              ${description}
              </p>
              <div class="btns">
              <a href="${demoLink}" target="_blank" class="btn btn-dark btn-md">Demo</a>
              <a href="${codeLink}" target = "_blank" class="btn btn-dark btn-md">🍮 Github</a>
              </div>
            </div>
          </div>
            `;
    addHtmlToDom(htmlCard, id);
  });
}
function fetchContact(content) {
  content.result.forEach((element, index) => {
    let id = "contact_container";
    let { socialMedia, username, link } = element;
    let htmlCard = `
            <div class="row px-3 align-items-center">
            <li class="item py-2 col-md-4 col px-1"><h3>${socialMedia}:</h3></li>
            <a class=" col mb-1" href="${link}">${username}</a>
          </div>
            `;
    addHtmlToDom(htmlCard, id);
  });
}
function fetchReviews(content) {
  content.result.forEach((element) => {
    let id = "reviews_container";
    let { name, comment } = element;
    let htmlCard = `
    <div class="skill-box px-3 py-3 col-10 col-md-3 my-2 my-md-0">
    <div class="skill-small-box p-2 px-3">
      ${name}
    </div>
    <div class="mb-0 mt-3 px-0">
      ${comment}
    </div>
   </div>
            `;
    addHtmlToDom(htmlCard, id);
  });
}
function addHtmlToDom(html, elementId) {
  let targetElement = document.getElementById(elementId);
  let temp = document.createElement("div");
  temp.innerHTML = html;
  while (temp.firstChild) {
    targetElement.appendChild(temp.firstChild);
  }
}

getContent("hero", fetchHero);
getContent("project", fetchProjects);
getContent("contact", fetchContact);
getContent("reviews", fetchReviews);

// animation:
const header = document.querySelector(".hJS");
let i = 0;
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((element) => {
      i++;
      if (i <= 2) {
        element.target.classList.toggle("animate__fadeInUp");
      }
    });
  },
  {
    margin: 5,
  }
);
observer.observe(header);
