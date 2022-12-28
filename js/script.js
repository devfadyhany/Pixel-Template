window.onscroll = function(){
    if(window.scrollY > 20){
        document.getElementById('nav').classList.add('navon');
        document.getElementById('nav').classList.remove('navoff');
    }else{
        document.getElementById('nav').classList.remove('navon');
        document.getElementById('nav').classList.add('navoff');
    }
    scrollFunction()
};

function valid1 (){
    var x = document.getElementById('email').value;

    if (x == ''){
        document.getElementById('email').classList.add('error');
    }else {
        document.getElementById('email').classList.remove('error');
    }
}

var mybutton = document.getElementById("myBtn");

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}