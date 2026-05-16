var t1 = gsap.timeline();


t1.from("h2",{
    y:-80,
    duration:1,
    delay:0.2,
    opacity:0,

})

// t1.from("h4",{
//     y:-80,
//     duration:1,
//     opacity:0,
//     stagger:0.3,
// })



// page 2 
gsap.to("#page2 h1",{
    x:"-60%",
    scrollTrigger:{
        trigger:"#page2",  // jab v hum pin property use krenge to taget parent ko krenge
        start:"top 0%",
        scrub:2,
        pin:true,
        end: "top -100%"
    }
})


// cursor js 
var main = document.querySelector("body")
var cursor = document.querySelector("#cursor")
var image = document.querySelector(".card")

main.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        x:dets.x,
        y:dets.y,
    })
})




var cards = document.querySelectorAll(".card")

cards.forEach(function(card){

    card.addEventListener("mouseenter", function(){

        cursor.innerHTML = "View More"

        gsap.to("#cursor",{
            scale:2,
            backgroundColor:"rgba(255,255,255,0.4)",
            duration:0.3
        })

    })

    card.addEventListener("mouseleave", function(){

        cursor.innerHTML = ""

        gsap.to("#cursor",{
            scale:1,
            backgroundColor:"#fff",
            duration:0.3
        })

    })

})