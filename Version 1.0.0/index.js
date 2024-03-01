let imagesData = [];

let articlesData = [];

let div_container = document.getElementById('container');

let button_action = document.getElementById('add-element');

let article_Container = document.getElementById('articleContainer');

let categories_checkBox = document.querySelectorAll('#categories')

let check = false;

let check_counter = 0;

let site_reload_using_logo = document.querySelector('.site-name').addEventListener('click', ()=>{
    window.location.reload();
})
let imageCall = document.querySelector('.images').addEventListener('click', removeAllArticles)

let articleCall = document.querySelector('.articles').addEventListener('click', removeAllImages)

function removeAllArticles(){
    let value = document.querySelectorAll('.articleCSS')
            for(let i = 0; i<value.length; i++){
                    value[i].remove();
            }
            let categories = document.querySelector('.aside').style.display = "none"
            imagesJSONCall();
}
function removeAllImages(e){
    let data = document.querySelectorAll('.box');
    for(let i = 0; i<data.length; i++){
        data[i].remove();
    }
    let categories = document.querySelector('.aside').style.display = "block"
        // removeArticles();
        articleApiCall();
        addArticles(e);

}
function addArticles(e){
    if(e.target.checked){
        checkBoxSearch(e)
        }
        else{
            removeArticles(e);
        }
}
categories_checkBox.forEach((e)=>{
    e.addEventListener('click',removeAllImages)
})
function removeArticles(e){
    let value = document.querySelectorAll('.articleCSS')
            for(let i = 0; i<value.length; i++){
                if(value[i].id==e.target.name){
                    value[i].remove();
                }
            }
    return;
}
// button_action.addEventListener("click", create_div);

function create_div(imageData, id){
    let new_div = document.createElement('div')
    new_div.className="box";
    new_div.id = id;
    new_div.innerHTML = `
       <img src="${imageData.url}" id="${imageData.id}" class = "box" alt="">
            <div class="button-container">
                <span>Comment</span>
            </div>
       
    `
    addImageClickListener(new_div,);
    div_container.append(new_div);
    console.log("Div appended")
}

function imagesJSONCall(){
    fetch('Data/images.json')
    .then((response)=> response.json())
    .then(function(data){
        imagesData=data;
        console.log(typeof data)
        console.log(data.length)
        for(let i = 0; i<imagesData.length; i++){
          //  imagesData.push(data[i])
          console.log(imagesData[i])
            create_div(imagesData[i], i)
        }
    })
    // .then(function(data){
    //     for(let i = 0; i<data.length; i++){
    //         console.log(imagesData[i])
    //         create_div(imagesData[i])
    //     }
    // }
    // )
};
// imagesJSONCall();

//Devindra Hardawar
function checkBoxSearch(boxChecked){
    let value = document.querySelectorAll('.articleCSS')
    for(let i = 0; i<articlesData.length; i++){
        if(articlesData[i].category==boxChecked.target.name){
            createArticleDiv(articlesData[i])
        }
    }
}
function search(){
    let search_ = document.getElementById('searchElement')
    data = search_.value;
    console.log(data)
    articlesDataArraySearch(data)
    // // let ans = articlesDataArraySearch(data);
    // let author = document.getElementById("author_name")
    // // data = data.replace(/[.*+?^${}()|[\]\\]g,"\\$&");
    // let pattern = new RegExp(`${data}`,"gi");
    // author.innerHTML = author.textContent.replace(pattern, match =>`<mark>${match}</mark>`)
}
function articlesDataArraySearch(data){
    for(let i = 0; i<articlesData.length; i++){
        if(data==articlesData[i].author){
            let value = document.querySelectorAll('.articleCSS')
            for(let i = 0; i<value.length; i++){
                value[i].style.display = "none";
            }
            createArticleDiv(articlesData[i])
            return;
        }
    }
}
function articleApiCall(){
    var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2024-04-31&' +
          'sortBy=popularity&' +
          'apiKey=12b2fc22613b448b871d3ec8df23c330';

var req = new Request(url);

fetch('Data/articles.json')
    .then((response)=>response.json())
    .then(function(data){
        console.log(data);
        for(let i = 0; i<data.length; i++){
            check = true;
            createArticleDiv(data[i]);
        }
    })
    let categories = document.querySelector('.aside').style.display = "block"
};
articleApiCall();

function createArticleDiv(article){
    let newArticleDiv = document.createElement('div')
    console.log(article)
    newArticleDiv.className = "articleCSS"
    newArticleDiv.id = article.category;
    newArticleDiv.innerHTML = `
        <div class="author_name" id = "author_name">${article.author}</div>
        <br>
            <div class="title">${article.title}</div>
            <br>
            <div class="title">${article.description}</div>
            <br>
            <img src = "${article.urlToImage}" width = "500px" height = "250px">
            <a href = "${article.url}" target = "blank">Link to Article</a>
        <div><hr></div>
    `
    article_Container.append(newArticleDiv);
    
}

let addImageClickListener = function(childDiv){
     childDiv.addEventListener('click',()=>console.log(childDiv.id))
}

let pushToImagesArray = function(event){
    let img=event.target;
    console.log("pushToImagesArray::"  +  img.id)
    let obj = {
        "id":imagesData.length+1,
        "url":img.src
    }
    imagesData.push(obj)
    create_div(obj);
    
    // console.log(image_src)
     console.log(imagesData.length)
}

