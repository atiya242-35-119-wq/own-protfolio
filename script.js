/*==========================
      Smooth Scroll
==========================*/

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            window.scrollTo({

                top:target.offsetTop-80,

                behavior:"smooth"

            });

        }

    });

});


/*==========================
      Hero Animation
==========================*/

const hero=document.querySelector(".hero-text");

window.addEventListener("load",()=>{

    hero.style.opacity="0";

    hero.style.transform="translateY(40px)";

    hero.style.transition="1s";

    setTimeout(()=>{

        hero.style.opacity="1";

        hero.style.transform="translateY(0)";

    },100);

});


/*==========================
      Section Animation
==========================*/

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    sections.forEach(section=>{

        const top=window.scrollY;

        const offset=section.offsetTop-250;

        if(top>=offset){

            section.classList.add("show");

        }

    });

});


/*==========================
      Active Navbar
==========================*/

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        if(window.scrollY>=section.offsetTop-120){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.style.color="white";

        if(link.getAttribute("href")=="#"+current){

            link.style.color="#38bdf8";

        }

    });

});


/*==========================
      Contact Form
==========================*/

const form=document.querySelector(".message-box form");

form.addEventListener("submit",function(e){

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

});


/*==========================
      Scroll Top Button
==========================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};