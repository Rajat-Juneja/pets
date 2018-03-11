window.addEventListener("load",bindEvents);

// PARALLAX
$('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});

var child;
var click;
var quote;
var author;
var navbar;
var searchbar;
var topbar;
// SERVICES PAGE    
var serbar;



function bindEvents(){
    console.clear();
     click = document.getElementsByClassName('sayphoto');
     child = click[0].childNodes;
     quote = document.getElementsByClassName("say");
     author = document.getElementsByClassName("sayname");
     quote[0].innerText = object.data[1].quote;
     author[0].innerText = "-" + object.data[1].author;
     var j=0;
     for(var i =1;i<child.length;i+=2){
        //  console.log(child[i].src);
            child[i].src=object.data[j].url;
        // console.log(child[i].src);
     j++;
        }
    for(var i=1;i<child.length;i+=2){
        child[i].addEventListener('click',callMe);
    }
    navbar = document.getElementsByClassName("navbar");

    searchbar = document.getElementsByClassName("mainbar");


    setInterval(function(){
        var searching = searchbar[0].getBoundingClientRect();
        topbar = navbar[0].getBoundingClientRect();
        if(!searchbar[0].classList.contains("serbar")){
        if(topbar.bottom>searching.top){
        
            setInterval(checkForSearch,10);
        
        }
    }
    },10);

    // SERVICES PAGE
    serbar = document.getElementsByClassName("serbar");
    serbar[0].firstElementChild.childNodes[3].classList.add("chosenblue");
    for(let i=1;i<serbar[0].firstElementChild.childNodes.length;i+=2){
        // console.log(serbar[0].firstElementChild.childNodes[1]);
        serbar[0].firstElementChild.childNodes[i].addEventListener('click',changeInColor);
    }

    setInterval(function(){
        var searching = serbar[0].getBoundingClientRect();
        topbar = navbar[0].getBoundingClientRect();
        if(topbar.bottom>searching.top){
        
            setInterval(checkForSerbar,10);
        
        }
    
    },10);
}

function callMe(){
    for(var i=1;i<child.length;i+=2){
        child[i].classList.remove("selected");
    }
    this.classList.add("selected");
    var id = this.getAttribute("myvalue");
    quote[0].innerText = object.data[id].quote;
     author[0].innerText = "-" + object.data[id].author;

}

function checkForSearch(){
    var check = true
    if(window.innerWidth<768){
        check=false;
    }
    if(check){
    if(window.pageYOffset>=291){
        
        searchbar[0].style.width = "100%" ;
        searchbar[0].style.position = "fixed";
        searchbar[0].style.borderRadius = "0px";
        searchbar[0].style.boxShadow = "none";
        var x;
        var y;
        if(window.innerWidth>=1200){
        searchbar[0].style.top = "24.5%";
        searchbar[0].firstElementChild.lastElementChild.firstElementChild.style.bottom="10.5%";}
        else if(window.innerWidth>=992 && window.innerWidth<1200){
            searchbar[0].style.top = "21.6%";
            searchbar[0].firstElementChild.lastElementChild.firstElementChild.style.bottom="4.5%";
        }
        else if(window.innerWidth>768 && window.innerWidth<992){
            searchbar[0].style.top = "19.6%";
            x=21.6;
            
            searchbar[0].firstElementChild.lastElementChild.firstElementChild.style.bottom="0.5%";
        }
        if(navbar[0].lastElementChild.classList.contains("show") && window.innerWidth<992 && window.innerWidth>768){
           
            if(window.innerWidth>880){
                y=35;
                console.log("Inside");
            }
            else if(window.innerWidth>810){
                y=32;
            }
            else{
                y=30;
            }
            x+=y;
            searchbar[0].style.top = x+"%";
            
        }
        searchbar[0].style.backgroundColor="#556CFF";
        searchbar[0].style.color="white";
        searchbar[0].firstElementChild.style.maxWidth = "80%";
        searchbar[0].firstElementChild.firstElementChild.firstElementChild.src="images/dog icon white.png";
        searchbar[0].firstElementChild.firstElementChild.lastElementChild.style.backgroundColor = "#4B5FE4";
        searchbar[0].firstElementChild.firstElementChild.lastElementChild.style.color = "white";
        searchbar[0].firstElementChild.firstElementChild.lastElementChild.style.fontWeight = "500";
        searchbar[0].firstElementChild.childNodes[3].firstElementChild.src = "images/breediconwhite.png";
        searchbar[0].firstElementChild.childNodes[3].lastElementChild.style.backgroundColor = "#4B5FE4";
        searchbar[0].firstElementChild.childNodes[3].lastElementChild.style.color = "white";
        searchbar[0].firstElementChild.childNodes[3].lastElementChild.style.fontWeight = "500";
        searchbar[0].firstElementChild.childNodes[5].firstElementChild.src = "images/location icon white.png";
        searchbar[0].firstElementChild.childNodes[5].childNodes[7].style.backgroundColor = "#4B5FE4";
        if(!searchbar[0].firstElementChild.childNodes[5].childNodes[7].className.includes("formInvalid")){
        searchbar[0].firstElementChild.childNodes[5].childNodes[7].className += " formInvalid";}
        searchbar[0].firstElementChild.childNodes[5].childNodes[7].style.color= "white";
        searchbar[0].firstElementChild.childNodes[5].childNodes[7].style.fontWeight = "500";
        for(let i=1;i<6;i+=2){
            searchbar[0].firstElementChild.childNodes[i].firstElementChild.style.width = "10%";
            searchbar[0].firstElementChild.childNodes[i].firstElementChild.style.height = "25%";                
            }
        searchbar[0].firstElementChild.lastElementChild.childNodes[7].style.backgroundColor = "white";
        searchbar[0].firstElementChild.lastElementChild.childNodes[7].style.color = "#556CFF";
        searchbar[0].firstElementChild.lastElementChild.childNodes[7].style.fontWeight = "900";
        searchbar[0].firstElementChild.lastElementChild.childNodes[7].style.boxShadow = "1px 1px 7px 0px black";
        
        }
    }


    if(!check || window.pageYOffset<291){
        searchbar[0].style.width = "72%" ;
        searchbar[0].style.position = "absolute";
        searchbar[0].style.borderRadius = "10px";
        searchbar[0].style.padding="2%";
        searchbar[0].style.boxShadow = "0px 0px 14px 1px black";
        searchbar[0].style.top = "100%";
        searchbar[0].style.backgroundColor="white";
        searchbar[0].style.color="black";
        searchbar[0].firstElementChild.style.maxWidth = "100%";
        searchbar[0].firstElementChild.firstElementChild.firstElementChild.src="images/dog icon.png";
        searchbar[0].firstElementChild.firstElementChild.lastElementChild.style.backgroundColor = "rgba(211,211,211,0.4)";
        searchbar[0].firstElementChild.firstElementChild.lastElementChild.style.color = "rgba(100,100,100,1)";
        searchbar[0].firstElementChild.firstElementChild.lastElementChild.style.fontWeight = "900";
        searchbar[0].firstElementChild.childNodes[3].firstElementChild.src = "images/breedicon.png";
        searchbar[0].firstElementChild.childNodes[3].lastElementChild.style.backgroundColor = "rgba(211,211,211,0.4)";
        searchbar[0].firstElementChild.childNodes[3].lastElementChild.style.color = "rgba(100,100,100,1)";
        searchbar[0].firstElementChild.childNodes[3].lastElementChild.style.fontWeight = "900";
        searchbar[0].firstElementChild.childNodes[5].firstElementChild.src = "images/location icon.png";
        searchbar[0].firstElementChild.childNodes[5].childNodes[7].style.backgroundColor = "rgba(211,211,211,0.4)";
        if(searchbar[0].firstElementChild.childNodes[5].childNodes[7].className.includes("formInvalid")){
        searchbar[0].firstElementChild.childNodes[5].childNodes[7].className -= " formInvalid";}
        searchbar[0].firstElementChild.childNodes[5].childNodes[7].style.color= "rgba(100,100,100,1)";
        searchbar[0].firstElementChild.childNodes[5].childNodes[7].style.fontWeight = "900";
        for(let i=1;i<6;i+=2){
            searchbar[0].firstElementChild.childNodes[i].firstElementChild.style.width = "11%";
            searchbar[0].firstElementChild.childNodes[i].firstElementChild.style.height = "29%";                
        }
        searchbar[0].firstElementChild.lastElementChild.childNodes[7].style.backgroundColor = "#556CFF";
        searchbar[0].firstElementChild.lastElementChild.childNodes[7].style.color = "white";
        searchbar[0].firstElementChild.lastElementChild.childNodes[7].style.fontWeight = "500";
        searchbar[0].firstElementChild.lastElementChild.childNodes[7].style.boxShadow = "0px 0px black";
    }
}

    if(window.innerWidth<768){
    searchbar[0].firstElementChild.childNodes[1].firstElementChild.style.width="10% !important";



}

// SERVICES PAGE
    function addClass(){
        for(var i=1;i<serbar[0].firstElementChild.childNodes.length;i+=2){
            serbar[0].firstElementChild.childNodes[i].classList.remove("chosen");
    }
    this.classList.add("chosen");
    // console.log(object.service[0].option);
    var x = this.getAttribute("myvalue");
    serbar[0].lastElementChild.firstElementChild.firstElementChild.innerText = object.service[x].option;
}

function checkForSerbar(){
    
    var check = true
    if(window.innerWidth<768){
        check=false;
    }
    if(check){
    if(window.pageYOffset>=275){
        serbar[0].classList.add("blueShade");
        serbar[0].style.width = "100%" ;
        if(window.innerWidth>810){
        serbar[0].firstElementChild.style.width = "85%";
        serbar[0].lastElementChild.style.width = "90%";}
        else{
            serbar[0].firstElementChild.style.width = "95%";
            serbar[0].lastElementChild.style.width = "100%";
        }
        serbar[0].style.position = "fixed";
        serbar[0].style.color="white";
        serbar[0].style.backgroundColor="#556CFF";
        serbar[0].style.borderRadius = "0px";
        serbar[0].style.boxShadow = "none";
        if(window.innerWidth>=1200){
        serbar[0].style.top = "27.5%";
    }
        else if(window.innerWidth>=992 && window.innerWidth<1200){
            serbar[0].style.top = "25.6%";
        }
        else if(window.innerWidth>=768 && window.innerWidth<992){
            serbar[0].style.top = "24%";
        }
        for(let i=1;i<serbar[0].lastElementChild.childNodes.length-3;i+=2){
            if(i==3){
                serbar[0].lastElementChild.childNodes[i].childNodes[5].style.backgroundColor = "#4B5FE4";
                serbar[0].lastElementChild.childNodes[i].childNodes[5].style.color = "#C6CEFB";
            }
            else{
                serbar[0].lastElementChild.childNodes[i].lastElementChild.style.color = "#C6CEFB";
                serbar[0].lastElementChild.childNodes[i].lastElementChild.style.backgroundColor = "#4B5FE4";
        }
        }
     for(let i=1;i<serbar[0].firstElementChild.childNodes.length;i+=2){
        serbar[0].firstElementChild.childNodes[i].style.color = "#A8B5FF";
        serbar[0].firstElementChild.childNodes[i].style.borderColor = "#A8B5FF";

        // serbar[0].firstElementChild.childNodes[i].addEventListener('click',changeInBlueBg);
    }
    serbar[0].lastElementChild.lastElementChild.lastElementChild.style.backgroundColor = "white";
    serbar[0].lastElementChild.lastElementChild.lastElementChild.style.color = "#556CFF";
    serbar[0].lastElementChild.lastElementChild.lastElementChild.style.fontWeight = "900";
    serbar[0].lastElementChild.lastElementChild.lastElementChild.style.boxShadow = "1px 1px 7px 0px black";
    for(let i=1;i<serbar[0].firstElementChild.childNodes.length;i+=2){
        if(serbar[0].firstElementChild.childNodes[i].classList.contains("chosenblue")){
            // console.log("inside");
            serbar[0].firstElementChild.childNodes[i].classList.remove("chosenblue");
            serbar[0].firstElementChild.childNodes[i].classList.add("chosenwhite")
        }
    }

    // if(window.innerWidth<840){
    //     serbar[0].lastElementChild
    // }
    }
}
//         searchbar[0].firstElementChild.style.maxWidth = "80%";
//         searchbar[0].firstElementChild.firstElementChild.lastElementChild.style.backgroundColor = "royalblue";
//         searchbar[0].firstElementChild.firstElementChild.lastElementChild.style.color = "white";
//         searchbar[0].firstElementChild.firstElementChild.lastElementChild.style.fontWeight = "500";
//         searchbar[0].firstElementChild.childNodes[3].lastElementChild.style.backgroundColor = "royalblue";
//         searchbar[0].firstElementChild.childNodes[3].lastElementChild.style.color = "white";
//         searchbar[0].firstElementChild.childNodes[3].lastElementChild.style.fontWeight = "500";
//         searchbar[0].firstElementChild.childNodes[5].childNodes[7].style.backgroundColor = "royalblue";
//         if(!searchbar[0].firstElementChild.childNodes[5].childNodes[7].className.includes("formInvalid")){
//         searchbar[0].firstElementChild.childNodes[5].childNodes[7].className += " formInvalid";}
//         searchbar[0].firstElementChild.childNodes[5].childNodes[7].style.color= "white";
//         searchbar[0].firstElementChild.childNodes[5].childNodes[7].style.fontWeight = "500";
//         for(let i=1;i<6;i+=2){
//             searchbar[0].firstElementChild.childNodes[i].firstElementChild.style.width = "10%";
//             searchbar[0].firstElementChild.childNodes[i].firstElementChild.style.height = "25%";                
//             }
//         searchbar[0].firstElementChild.lastElementChild.childNodes[7].style.backgroundColor = "white";
//         searchbar[0].firstElementChild.lastElementChild.childNodes[7].style.color = "#556CFF";
//         searchbar[0].firstElementChild.lastElementChild.childNodes[7].style.fontWeight = "900";
//         searchbar[0].firstElementChild.lastElementChild.childNodes[7].style.boxShadow = "1px 1px 7px 0px black";
        
//         }
//     }


    if(!check || window.pageYOffset<275){
        serbar[0].classList.remove("blueShade");
        serbar[0].style.position = "absolute";
        serbar[0].style.width = "72%" ;
        serbar[0].firstElementChild.style.width = "100%";
        serbar[0].lastElementChild.style.width = "100%";
        serbar[0].style.borderRadius = "10px";
        serbar[0].style.padding="2%";
        serbar[0].style.boxShadow = "0px 0px 14px 1px black";
        serbar[0].style.top = "100%";
        serbar[0].style.backgroundColor="white";
        serbar[0].style.color="black";
        serbar[0].firstElementChild.style.maxWidth = "100%";

        for(let i=1;i<serbar[0].lastElementChild.childNodes.length-3;i+=2){
            if(i==3){
                serbar[0].lastElementChild.childNodes[i].childNodes[5].style.backgroundColor = "rgba(211,211,211,0.4)";
                serbar[0].lastElementChild.childNodes[i].childNodes[5].style.color = "rgba(100,100,100,1)";
            }
            else{
                serbar[0].lastElementChild.childNodes[i].lastElementChild.style.color = "rgba(100,100,100,1)";
                serbar[0].lastElementChild.childNodes[i].lastElementChild.style.backgroundColor = "rgba(211,211,211,0.4)";
        }
        }

        for(let i=1;i<serbar[0].firstElementChild.childNodes.length;i+=2){
            serbar[0].firstElementChild.childNodes[i].style.color = "rgba(100,100,100,0.8)";
            serbar[0].firstElementChild.childNodes[i].style.borderColor = "rgba(100,100,100,1)";
        }

            serbar[0].lastElementChild.lastElementChild.lastElementChild.style.backgroundColor = "#556CFF";
            serbar[0].lastElementChild.lastElementChild.lastElementChild.style.color = "white";
            serbar[0].lastElementChild.lastElementChild.lastElementChild.style.fontWeight = "500";
            serbar[0].lastElementChild.lastElementChild.lastElementChild.style.boxShadow = "0px 0px black";

            for(let i=1;i<serbar[0].firstElementChild.childNodes.length;i+=2){
                if(serbar[0].firstElementChild.childNodes[i].classList.contains("chosenwhite")){
                    // console.log("inside");
                    serbar[0].firstElementChild.childNodes[i].classList.remove("chosenwhite");
                    serbar[0].firstElementChild.childNodes[i].classList.add("chosenblue")
                }
            }

    }
//         searchbar[0].firstElementChild.firstElementChild.lastElementChild.style.backgroundColor = "rgba(211,211,211,0.4)";
//         searchbar[0].firstElementChild.firstElementChild.lastElementChild.style.color = "rgba(100,100,100,1)";
//         searchbar[0].firstElementChild.firstElementChild.lastElementChild.style.fontWeight = "900";
//         searchbar[0].firstElementChild.childNodes[3].lastElementChild.style.backgroundColor = "rgba(211,211,211,0.4)";
//         searchbar[0].firstElementChild.childNodes[3].lastElementChild.style.color = "rgba(100,100,100,1)";
//         searchbar[0].firstElementChild.childNodes[3].lastElementChild.style.fontWeight = "900";
//         searchbar[0].firstElementChild.childNodes[5].childNodes[7].style.backgroundColor = "rgba(211,211,211,0.4)";
//         if(searchbar[0].firstElementChild.childNodes[5].childNodes[7].className.includes("formInvalid")){
//         searchbar[0].firstElementChild.childNodes[5].childNodes[7].className -= " formInvalid";}
//         searchbar[0].firstElementChild.childNodes[5].childNodes[7].style.color= "rgba(100,100,100,1)";
//         searchbar[0].firstElementChild.childNodes[5].childNodes[7].style.fontWeight = "900";
//         for(let i=1;i<6;i+=2){
//             searchbar[0].firstElementChild.childNodes[i].firstElementChild.style.width = "11%";
//             searchbar[0].firstElementChild.childNodes[i].firstElementChild.style.height = "29%";                
//         }
//         searchbar[0].firstElementChild.lastElementChild.childNodes[7].style.backgroundColor = "#556CFF";
//         searchbar[0].firstElementChild.lastElementChild.childNodes[7].style.color = "white";
//         searchbar[0].firstElementChild.lastElementChild.childNodes[7].style.fontWeight = "500";
//         searchbar[0].firstElementChild.lastElementChild.childNodes[7].style.boxShadow = "0px 0px black";
//     }
// }

    }

function changeInColor(){
    // console.log("inside");
    // console.log(this);
    var x = this.getAttribute("myvalue");
    for(let i=1;i<this.parentElement.childNodes.length;i+=2){
        this.parentElement.childNodes[i].classList.remove("chosenblue");
        this.parentElement.childNodes[i].classList.remove("chosenwhite");
    }
    if(!this.parentElement.parentElement.classList.contains("blueShade")){
        this.classList.add("chosenblue");
        
        this.parentElement.nextElementSibling.firstElementChild.firstElementChild.innerText = object.service[x].option;
    }
    else{
        this.classList.add("chosenwhite");
        this.parentElement.nextElementSibling.firstElementChild.firstElementChild.innerText = object.service[x].option;
    }
}
