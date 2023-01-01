var arbicv_var =document.getElementById("ar")
var en_var =document.getElementById("en")
var h51 =document.getElementById("h51")
var parg1 = document.getElementById("parg1")
var h52 =document.getElementById("h52")
var parg2 = document.getElementById("parg2")
var h53 =document.getElementById("h53")
var parg3 = document.getElementById("parg3")
var h54 =document.getElementById("h54")
var parg4 = document.getElementById("parg4")
var h31 =document.getElementById("h31")
var parg5 = document.getElementById("parg5")


en_var.onclick=()=>{
    lang("englis")
    localStorage.setItem("lang","englis")
}

arbicv_var.onclick=()=>{
    lang("arbic")
   localStorage.setItem("lang","arbic")
}



function lang(lang_sit){

    if(lang_sit === "englis" ){

        h51.innerHTML="software"
        parg1.innerHTML=`You can now benefit from a unique experience to develop your professional expertise, benefiting from advanced courses`
    
        h52.innerHTML=`encrypt information`
        parg2.innerHTML=`Keep your information private with our data encryption website`
        h53.innerHTML=`Coding`
        parg3.innerHTML=`Write your code and try it on our website`
        h54.innerHTML=`radio`
        parg4.innerHTML=`Listen to your favorite radio stations with ease`
        h31.innerHTML=`Husseini Software`
        parg5.innerHTML=`We dream to develop something new that will benefit the whole world`
    
    }
    else if(lang_sit === "arbic" ){
    h51.innerHTML="البرمحيات";
    parg1.innerHTML="يمكنك الان للاستفاده من تجربه فريد لتطوير خبراتك المهنيه الاستفاده من كورسات متطوره";
    h52.innerHTML=`تشفير المعلومات`
    parg2.innerHTML=`حافظ علي سريه معلوماتك مع موقعنا الخاص بتشفير البيانات`
    h53.innerHTML=`كتابه الاكواد`
    parg3.innerHTML=`قم بكتابه اكوادك وتجربته من خلال موقعنا`
    h54.innerHTML=`الراديو`
    parg4.innerHTML=`استمع الي محطات الراديو المفضله اليك بكل سهوله`
    h31.innerHTML=` الحسيني  للبرمجيات`
    parg5.innerHTML=`نحلم لتطوير شيء جديد يستفيد منه جميع العالم`

}
}

class width1{

    constructor(){
   this.header=document.getElementById("header");
this.card =document.getElementById("card");
    if(screen.width<700){
        header.style.display="block";
        this.card.style.width = screen.width+ "px";
    }
 
}
}
onload= new width1();




onload =()=>{
    lang(localStorage.getItem("lang"));
  
  };