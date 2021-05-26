function increaseFontSize(){
    var text = document.getElementById("container");
    var textBtn = document.getElementById("text-size");
    text.style.fontSize = "150%";
    textBtn.style.fontSize = "100%";
}

function decreaseFontSize(){
    var text = document.getElementById("container");
    var textBtn = document.getElementById("text-size");
    text.style.fontSize = "100%";
    textBtn.style.fontSize = "100%";
}

function insertAfter(referenceNode, newNode) {
    referenceNode.insertBefore(newNode, referenceNode.nextSibling);
  }

function myFunction(){
    data.forEach(function (e) {
        const newDiv = document.createElement("div");
        const textDiv = document.createElement("div");
        const newImg = document.createElement("img");
        const pTag = document.createElement("p");
    
        newDiv.setAttribute("data-aos-duration", "3000");
        newDiv.setAttribute("data-aos-anchor-placement", "center-bottom");
        newDiv.setAttribute("class", "aos-init");
        newDiv.setAttribute("data-aos-offset", "500")
        newImg.setAttribute("src", e.image);
        textDiv.setAttribute("class", "text");
       
        newDiv.appendChild(textDiv);
        
        pTag.setAttribute("class", "text-front");
        pTag.innerHTML = e.text;
        textDiv.appendChild(pTag);
        const currentDiv =  document.getElementById("container");
        currentDiv.appendChild(newDiv);
       
    
    
        if (e.id%2 == 0){
            newDiv.setAttribute("id", "test2");
            newDiv.setAttribute("data-aos", "fade-left");
            newImg.setAttribute("class", "front-2");
            newDiv.insertBefore(newImg, newDiv.nextSibling);
        }
        else {
            newDiv.setAttribute("id", "test");
            newDiv.setAttribute("data-aos", "fade-right");
            newImg.setAttribute("class", "front-1");
            newDiv.insertBefore(newImg, newDiv.firstChild);
        }
        AOS.init();
    });
}

