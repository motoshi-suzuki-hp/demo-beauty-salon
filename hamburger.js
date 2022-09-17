// ボタン、メニュー、モーダル要素の取得
var btn = document.getElementById("button");
var menu = document.getElementById("menu_sp");
var modal = document.getElementById("modal");

    
// ボタンがクリックされたらclassを追加
btn.addEventListener("click",function(){
    menu.classList.toggle("add-menu_sp");
    modal.classList.toggle("add-modal_sp");
    btn.classList.toggle("active");


    var btntop = document.getElementById("btn-top");
    var btnabout = document.getElementById("btn-about");
    var btnmenu = document.getElementById("btn-menu");
    var btngallary = document.getElementById("btn-gallary");
    var btncontact = document.getElementById("btn-contact");
    var btninstagram = document.getElementById("btn-instagram");
    var btntwitter = document.getElementById("btn-twitter");

    btntop.addEventListener("click",function(){
        menu.classList.remove("add-menu_sp");
        modal.classList.remove("add-modal_sp");
        btn.classList.remove("active");
    });

    btnabout.addEventListener("click",function(){
        menu.classList.remove("add-menu_sp");
        modal.classList.remove("add-modal_sp");
        btn.classList.remove("active");
    });

    btnmenu.addEventListener("click",function(){
        menu.classList.remove("add-menu_sp");
        modal.classList.remove("add-modal_sp");
        btn.classList.remove("active");
    });

    btngallary.addEventListener("click",function(){
        menu.classList.remove("add-menu_sp");
        modal.classList.remove("add-modal_sp");
        btn.classList.remove("active");
    });
    btncontact.addEventListener("click",function(){
        menu.classList.remove("add-menu_sp");
        modal.classList.remove("add-modal_sp");
        btn.classList.remove("active");
    });

    btninstagram.addEventListener("click",function(){
        menu.classList.remove("add-menu_sp");
        modal.classList.remove("add-modal_sp");
        btn.classList.remove("active");
    });
    btntwitter.addEventListener("click",function(){
        menu.classList.remove("add-menu_sp");
        modal.classList.remove("add-modal_sp");
        btn.classList.remove("active");
    });


});

