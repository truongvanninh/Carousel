var imgs = ["img/img01.png","img/img02.png", "img/img03.png", "img/img04.png", "img/img05.jpg"]
var status=0
var time = 3000
var len=imgs.length-1 
var run = this.setInterval(right, time);

// Indicators
window.onload = function(e){  
    var li='<ul><li class="item active" onclick="select('+ 0 +')"></li>'
    for(j=1; j<=len; j++) {  li = li + '<li onclick="select('+ j +')"></li>' }
    li=li+'</ul>' 

    var indicator=document.getElementById("indicators")
    indicator.innerHTML = li; 
}
// Remove active class in indicators
function removeActive() {
    for(j=0; j<=len; j++) {
        var element = document.getElementsByTagName("li")[j];
        element.classList.remove("active");
    }
}
function select(j) { 
    status=j
    removeActive()
    showImg(j)
     
    this.delay()
}
function delay() {
    clearInterval(run)
    run = this.setInterval(right, time);   
}
function showImg(i) { 
    var indicator = document.getElementsByTagName("li")[status];
    indicator.classList.add("active");
    link=imgs[status]
    var item=`<div class="item active"> <img src="` + link + `" alt="Image">
        </div>` 
    
    var inner=document.getElementById("inner")
    inner.innerHTML = item
}

// Control
function left() {  
    removeActive() 
    if(status==0) { 
        status=len
    } else status=status-1 
    this.showImg(status)
    this.delay()
}
function right() {
    removeActive() 
    if(status==len) {
        status=0
    } else ++status;  
    this.showImg(status) 
    this.delay()
}
