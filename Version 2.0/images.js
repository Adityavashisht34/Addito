function imagesJSONCall() {
  fetch("images.json")
    .then((response) => response.json())
    .then(function (data) {
      imagesData = data;
      for (let i = 0; i < imagesData.length; i++) {
        //  imagesData.push(data[i])
        create_div(imagesData[i], i);
      }
    });
  // .then(function(data){
  //     for(let i = 0; i<data.length; i++){
  //         console.log(imagesData[i])
  //         create_div(imagesData[i])
  //     }
  // }
  // )
}
function create_div(imageData, id) {
    let div_container = document.querySelector('.container');
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
  console.log("Div appended");
}

imagesJSONCall();
imagesJSONCall();
imagesJSONCall();
imagesJSONCall();
