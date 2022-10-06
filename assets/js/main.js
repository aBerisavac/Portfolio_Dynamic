$(document).ready(function(){

    //preloading src-a da bih sprecio bljesak svetlosti pri prvoj promeni slike u background-u.
    img1 = new Image();
    img1.src = "../assets/img/BckgrImg2.jpg";

    //Dinamicki ispis menija

    var meniElementi = new Array (
        ['#', 'first', 'Home'],
        ['#about', 'About'],
        ['#projects', 'Projects'],
        ['#contact', 'Contact'],
        ['assets/pdf/docs.pdf', 'Docs'] 
        );

    var ispis='<ul>';
    for (var i=0; i<meniElementi.length; i++){
        if (i==0){
            ispis+=`<a href=${meniElementi[i][0]}><li id=${meniElementi[i][1]}>${meniElementi[i][2]}</li></a>`
        } else{
            ispis+=`<a href=${meniElementi[i][0]}><li>${meniElementi[i][1]}</li></a>`
        }
    }
    var ispis=ispis+'</ul>';

    var meni1=document.querySelector("#meni");
    meni1.innerHTML+=ispis;

    //Funkcija za dodavanje/oduzimanje klase .active 

    function toggle(i){
        var liElement = document.querySelectorAll("#meni li");
        liElement[i].classList.toggle("liactive");
        var aElement = document.querySelectorAll("#meni a");
        aElement[i].classList.toggle("aactive");
    }

    //Koriscenje gornje funkcije

    var nizZaActive = new Array ("header", "about", "projects", "contact");

    for(var i=0; i<nizZaActive.length; i++){
        document.getElementById(`${nizZaActive[i]}`).addEventListener("mouseenter", toggle.bind(null, i));
        document.getElementById(`${nizZaActive[i]}`).addEventListener("mouseleave", toggle.bind(null, i));
    }

    //NavBar se pokazuje samo kad se skrola nagore ili kada je mis blizu vrha strane:

    window.addEventListener("scroll", logScrollDirection);
    window.addEventListener("mousemove", logMouseMove );


    function logMouseMove(event) {
        var e = e || window.event;	
        mousePos = { x: e.clientX, y: e.clientY };
        if(mousePos.y<130) {
                nav.classList.remove("show")
            } 
    }

    function logScrollDirection() {
        var previous = window.scrollY;
        window.addEventListener('scroll', function(){
            window.scrollY > previous ? nav.classList.add("show") : nav.classList.remove("show");
            previous = window.scrollY;
        });
    }

    //Dinamicki ispis figura:

    var nizFigura = new Array (
        ["Site Skeleton", "html", "For every web site it is necessary to be adept in html coding. My skills with it are adept at least."],

        ["Site soul", "css", "Without css, it would be like looking into the world with both eyes closed. As a web designer I tend to be skilled in the usage of various tools to make your web site interesting."],

        ["Dynamics", "javascript", "Making the web site come alive and giving responsive feedback to the user, amongst many other things, is what javascript does the best."],

        ["Popularity", "seo", "Everyone wants to have their site appear in google searches. Everchanging google parameters are something that a web designer needs to be familiar with."],

        ["Programming", "c", "Make the code work more efficiently and use less memory"],

        ["Editing", "photoshop", "For when you want that logo to look the best it can, or maybe just spice things up, photoshop skills come in handy."],
    );

    var ispis = "";
    for (var i = 0; i<nizFigura.length; i++){
        ispis+=`<figure><figcaption><h4>${nizFigura[i][0]}</h4></figcaption><div id="${nizFigura[i][1]}" class="img"></div><p>${nizFigura[i][2]}</p></figure>`
    }

    var about1=document.querySelector("#about");
    about1.innerHTML+=ispis;

    //Dinamicki ispis projekata:

    var nizProjekata = new Array (
        ["sadnja", "http://sadnjavoca.byethost8.com/index.html"],
        ["portfolio", "http://beri-portfolio.synergize.co"],
        ["portfolioJS", "http://beri-portfolio-js-jquery.synergize.co"]
    );

    var ispis="";
    for (var i=0; i<nizProjekata.length; i++){
        ispis+=`<div id="${nizProjekata[i][0]}" class="aproject"><a href="${nizProjekata[i][1]}"></a></div>`
    }

    var projects1=document.querySelector("#projects>div:nth-child(2)");
    projects1.innerHTML+=ispis;

    //Dinamicki ispis futer elemenata:

    var nizFuter = new Array (
        ["https://www.facebook.com/alexa.berisavac", "fab fa-facebook"],
        ["assets/css/style.css", "fab fa-css3-alt"],
        ["assets/css/style.scss", "fab fa-sass"],
        ["assets/js/main.js", "fab fa-js"],
        ["assets/pdf/docs.pdf", "fas fa-file-pdf"],
        ["assets/xml/sitemap.xml", "fas fa-sitemap"]
    );

    var ispis="";
    for (var i=0; i<nizFuter.length; i++){
        ispis+=`<a href="${nizFuter[i][0]}"><li> <i class="${nizFuter[i][1]}"></i> </li></a>`
    }

    var footer1=document.querySelector("#icons ul");
    footer1.innerHTML+=ispis;

    //Provera Razlicitih Stringova unutar Futera regExpom:

    var reIme = /^[A-Z][a-z]{1,11}(\s[A-Z][a-z]{1,11}){1,2}/;
    var reBroj = /(^\+[\d]{10,13})|(^\+[\d]{3,5}(\s\d{2,4}){1,4})/;
    var reMail = /^\S{1,15}@\S{1,15}$/ //dozvoljavam da unesu bez .com jer moze da bude .yahoo itd. Za detaljnije mejlove bih koristio slozenije regexpove.

    var ime=0;
    var telefon=0;
    var mail=0;

    form.name.addEventListener("blur", function(){
        if(form.name.value.match(reIme)) 
        {
            inputName.textContent="  Name Format is correct.";
            setTimeout(()=>inputName.textContent="",5000);
            ime = 0;
        }  else if(!form.name.value){
            inputName.textContent="  Field is empty.";
            setTimeout(()=>inputName.textContent="",10000);
            ime=0;
        }  else{
            inputName.textContent="  Word begins with a capital letter followed by a non capital.";
            setTimeout(()=>inputName.textContent="",10000);
            ime=1;
        }
    });

    form.phone.addEventListener("blur", function(){
        if(form.phone.value.match(reBroj)) 
        {
            inputPhone.textContent="  Phone Format is correct.";
            setTimeout(()=>inputPhone.textContent="",5000);
            telefon=0;
        }  else if(!form.phone.value){
            inputPhone.textContent="  Field is empty.";
            setTimeout(()=>inputPhone.textContent="",10000);
            telefon=0;
        }  else{
            inputPhone.textContent="  Wrong phone format. Example: +381648586055";
            setTimeout(()=>inputPhone.textContent="",10000);
            telefon=1;
        }
    });

    form.emailaddress.addEventListener("blur", function(){
        if(form.emailaddress.value.match(reMail)) 
        {
            inputMail.textContent="  E-Mail format is correct. You will be asked to verify it.";
            setTimeout(()=>inputMail.textContent="",5000);
            mail=0;
        }  else if(!form.emailaddress.value){
            inputMail.textContent="  Field is empty.";
            setTimeout(()=>inputMail.textContent="",10000);
            mail=0;
        }  else{
            inputMail.textContent="  Write the e-mail correctly. Example: name@yahoo.com";
            setTimeout(()=>inputMail.textContent="",10000);
            mail=1;
        }
    });
    

    form.message.addEventListener("blur", function(){
        if (!(inputText.getAttribute("class")=="white")){  
            if(form.message.value==""){
                inputText.textContent="  Write something if you want to send a message.";
                setTimeout(()=>inputText.textContent="*",10000);
                inputText.setAttribute("class", "white");
                setTimeout(()=>inputText.setAttribute("class", ""),10000);
            }
        }
    });

    //Funkcija za resetovanje elemenata forme prilikom slanja podataka

    function resetuj(){
        var nizReset = new Array();
        nizReset = $('input');
        nizReset.push($('#message')[0]);
        console.log(nizReset);
        for(i=0;i<nizReset.length;i++){
            if (nizReset[i].id!="button"){
                nizReset[i].value="";
                console.log(nizReset[i].id);
            }
        }
    }
    
    //Alert na submit
    button.addEventListener("click", function(){
        if ((form.message.value!="")&&!((ime)||(telefon)||(mail))){
            window.alert("You have successfully sent a message! Thank you for your commitment.");
        } else{
            window.alert("You did not fulfill all the conditions! Please enter the information correctly, or don't fill it at all if you want to keep your privacy.");
        }
        resetuj();
    });

    $('#meni').click(()=>{
          document.querySelector("ul").classList.toggle('show');
        })
        
});
