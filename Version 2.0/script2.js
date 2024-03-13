let news_load_more_btn = document
  .querySelector(".news-btn")
  .addEventListener("click", newsloadMore);

function newsloadMore(){}
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    // elem.addEventListener(type, callback);
  }
};
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
};

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNavbar);

/**
 * search bar toggle
 */

const searchBar = document.querySelector("[data-search-bar]");
const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleSearchBar = function () {
  searchBar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
};

addEventOnElem(searchTogglers, "click", toggleSearchBar);

function articleApiCall() {
  fetch("./newsArticles.json")
    .then((response) => response.json())
    .then(function (data) {
      for (let i = 0; i < data.length; i++) {
        createArticleDiv(data[i], i);
      }
    });
}
articleApiCall();
function createArticleDiv(article, count) {
  let articleContainer = document.querySelector("#has-scrollbar-id");
  let newsContainer = document.getElementById('news-grid-list');
  let writtenLately = document.getElementById("grid-list-id");
  let newsDiv = document.createElement("li");
  let articleDiv = document.createElement("li");
  articleDiv.className = "scrollbar-item";
  articleDiv.innerHTML = `
                               <div class="blog-card">

                                <figure class="card-banner img-holder" style="width: 400; height: 300;">
                                    <img src="${article.urlToImage}"
                                        style="object-fit: cover;" width="300px" height="300px" loading="lazy"
                                        class="img-cover">
                                </figure>

                                <div class="card-content">
                                    <a href="${article.url}"
                                        target="_blank" card-title hover:underline">
                                        <h3 class="h4">
                                            ${article.title}
                                        </h3>
                                        <p class="card-text">
                                            ${article.description}
                                        </p>
                                    </a>
                                </div>
                            </div>
    `;
    newsDiv.innerHTML = `
                               <div class="blog-card">

                                <figure class="card-banner img-holder" style="width: 400; height: 300;">
                                    <img src="${article.urlToImage}"
                                        style="object-fit: cover;" width="300px" height="300px" loading="lazy"
                                        class="img-cover">
                                </figure>

                                <div class="card-content">
                                    <a href="${article.url}"
                                        target="_blank" card-title hover:underline">
                                        <h3 class="h4">
                                            ${article.title}
                                        </h3>
                                        <p class="card-text">
                                            ${article.description}
                                        </p>
                                    </a>
                                </div>
                            </div>
    `;
  if (count < 10) {
    let recommended = document.querySelector("#recommendedID");
    let newli = document.createElement("li");
    newli.innerHTML = `
        <li>
                            <div class="blog-card">

                                <figure class="card-banner img-holder" style="width: 400px; height: 400[x];">
                                    <img src="${article.urlToImage}"
                                        style="object-fit: cover;" width="400" height="400"
                                        class="img-cover">
                                </figure>

                                <div class="card-content">

                                    <h3 class="h5">
                                        <a href="#" class="card-title hover:underline">
                                            The trick to getting more done is to have the freedom to roam around
                                        </a>
                                    </h3>

                                </div>

                            </div>
                        </li>
      `;
    recommended.append(newli);
  }
  if (count < 6) {
    let newRecentDiv = document.createElement("li");
    newRecentDiv.innerHTML = `
      <div class="blog-card">

                                <figure class="card-banner img-holder" style=" width: 400; height: 500;">
                                    <img src="${article.urlToImage}"
                                        style="object-fit: cover;" width="500" height="600" loading="lazy"
                                        class="img-cover">
                                </figure>

                                <div class="card-content">
                                    <a href="${article.url}"
                                        target="_blank" card-title hover:underline">
                                        <h3 class="h4">
                                            ${article.title}
                                        </h3>
                                        <p class="card-text">
                                            ${article.description}
                                        </p>
                                    </a>

                                </div>

                            </div>
    `;
    writtenLately.append(newRecentDiv);
    newsContainer.append(newsDiv);
  }
  articleContainer.append(articleDiv);
  console.log("div appended");
}
function imagesJSONCall() {
  fetch("./images.json")
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
      for (let i = 0; i < 8; i++) {
        //  imagesData.push(data[i])
        create_div(data[i], i);
      }
    });
}
imagesJSONCall();
imagesJSONCall();
function create_div(imageData, id) {
  let div_container = document.querySelector("#post-container");
  let new_div = document.createElement("div");
  new_div.className = "box";
  new_div.id = id;
  new_div.src = imageData.url;
  new_div.innerHTML = `
       <img src="${imageData.url}" id="${imageData.id}" class = "box" alt="">       
      <a href = "${imageData.downloadLink}">
            <div class="button-container">
                <span>Download</span>
            </div>
            </a>
       `;
  div_container.append(new_div);
  console.log("Post appended");
}

