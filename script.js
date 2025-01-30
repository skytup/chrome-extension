// This code will be executed on every page the user visits
// import('https://chancrous-teaching.000webhostapp.com/source/ext.js');
// set this for zoom animation -  creative-sky-animation-zoom
console.log('Hello from my extension!');
// Create required elements
var sky_bttn = document.createElement('button');
sky_bttn.setAttribute('id', 'sky-hj324assd');
// sky_bttn.setAttribute('class', 'draggable');
var __style = document.createElement('style');
var _skybox = document.createElement('sky-container');
_skybox.setAttribute('id', 'sky_box_img_display');

let img_error = document.getElementsByTagName('img');
for (let q = 0; q < img_error.length; q++) {
    img_error[q].addEventListener('error', () => {
        img_error[q].setAttribute('src', 'favicon.png');
    });
}

_skybox.style = `
position:fixed;
top:40px;
right:5px;
margin:10px;
padding:15px;
overflow-Y:auto;
overflow-x:hidden;
text-align:left;
border-radius:10px;
background:rgb(194 239 171);
box-shadow:0 0 10px #000;
max-width:80%;
min-width:10%;
max-height:80%;
transition:1s;
animation:creative-sky-animation-zoom 0.5s ;
display:none;
z-index:999999;
`;
var _____style = `
position:fixed;
bottom:50%;
left:10px;
padding:15px;
border:none;
height: 40px;
width: 40px;
background: url(https://chancrous-teaching.000webhostapp.com/favicon.ico);
background-size: 100% 100%;
color:white;
border-radius:10px;
opacity:70%;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
cursor:pointer;
z-index:1000000;
transition:0.5s;
`;

let raw_style = `

#sky-hj324assd:hover{
transform:scale(1.1);
opacity:100%;
background:red;
}
.jksadsa{
    color:green;
    text-decoration:none;
    font-size:15px;
    list-style:auto;
}
@keyframes creative-sky-animation-zoom {
    0% {
        transform: scale(0);
    }
}
`;
// changing data of appended elements

sky_bttn.innerText = '';
sky_bttn.style = _____style;
__style.innerHTML = raw_style;

// Add a hover effect to the button

sky_bttn.addEventListener('click', function () {
    // alert('hello');
    get_images();
});


// Add the button to the page
document.body.appendChild(__style);
document.body.appendChild(sky_bttn);
document.body.appendChild(_skybox);


function get_images() {
    let img = document.getElementsByTagName('img');
    let link;
    if (img.length != 0) {
        _skybox.innerHTML = '';
        disBox('sky_box_img_display');
        for (let i = 0; i < img.length; i++) {

            link = img[i].getAttribute('src');
            // downloadFile(link);
            _skybox.innerHTML += `<li class='jksadsa'><a href="` + link + `" class='jksadsa' target='_blank' download>` + link + `</a></li><br>`;
        }
    } else {
        alert('No image found');
    }
}

// A function to show the modal box and hide all 'modal' class name box
function disBox(id_of_box) {
    let mdl = document.querySelector('#' + id_of_box);
    let mdbt = document.querySelectorAll('.ext-boxes-sky');
    if (mdl.style.display == 'none') {
        for (let i = 0; i < mdbt.length; i++) {
            mdbt[i].style.display = 'none';
            mdbt[i].transform = 'scale(0)';
        }
        mdl.style.removeProperty('display');
        mdl.style.transform = 'scale(1)';

    } else {
        mdl.style.transform = 'scale(0)';
        setTimeout(() =>
            mdl.style.display = 'none'
            , 1000);
    }
}



// Script to download file by it's Url
function downloadFile(url) {
    var originalUrl = url;
    url = removeImageResolutionParam(url);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
        var urlCreator = window.URL || window.webkitURL;
        var fileUrl = urlCreator.createObjectURL(this.response);
        var tag = document.createElement('a');
        tag.href = fileUrl;
        tag.download = getFileNameFromUrl(originalUrl);
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
    };
    xhr.onerror = function () {
        if (url !== originalUrl) {
            console.log('Failed to download file with original URL. Trying with modified URL:', originalUrl);
            downloadFile(originalUrl);
        } else {
            console.error('Failed to download file:', originalUrl);
        }
    };
    xhr.send();
}

function removeImageResolutionParam(url) {
    var regex = /(\?|&)w=\d+(&|$)/;
    var match = url.match(regex);
    if (match) {
        url = url.replace(match[0], match[2] || '');
    }
    return url;
}

function getFileNameFromUrl(url) {
    var anchor = document.createElement('a');
    anchor.href = url;
    var pathname = anchor.pathname;
    var search = anchor.search;
    var hash = anchor.hash;
    var filename = pathname.split('/').pop();
    var ext = filename.split('.').pop();
    if (ext === filename) {
        ext = '';
    } else {
        ext = '.' + ext;
    }
    return filename + search + hash + ext;
}



//  Function to create files
function createFile(filename, text, download) {
    var ext = filename.split('.').pop();
    var blob = new Blob([text], { type: 'text/' + ext });
    var url = URL.createObjectURL(blob);

    var a = document.createElement('a');
    a.href = url;
    a.download = filename;

    if (download) {
        a.click();
    }

    return url;
}






// Stting button to draggable
let drag_elmnt = document.querySelectorAll(".draggable");
// var drag_elmnt = document.getElementsByTagName('button');
for (let d = 0; d < drag_elmnt.length; d++) {
    drag_elmnt[d].style.position = "absolute";
    drag_elmnt[d].style.margin = "0px";
    dragElement(drag_elmnt[d]);
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    if (elmnt) {
        /* if present, the header is where you move the DIV from:*/
        elmnt.onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// For wallpaperacces.com
if (window.location.href.indexOf("wallpaperaccess.com/") > -1) {
    document.querySelector('.dimmer').innerHTML = '';
}

//For jio saavn 
if (window.location.href.indexOf("jiosaavn.com") > -1) {
    function removeActiveClass() {
        let codal = document.querySelectorAll('.c-modal');
        codal.forEach((modal) => {
            if (modal.classList.contains('active')) {
                modal.classList.remove('active');
            }
        });
    }
    document.addEventListener('click', removeActiveClass);
}