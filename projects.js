let project = document.querySelectorAll(".projectinner"),
            cursor = document.querySelector("#js-cursor"),
         
            images_div = document.querySelectorAll("#js-cursor > div");

            
        project.forEach((x, i)=>{
            x.addEventListener("mouseenter", (e)=>{
                images_div[i].classList.add("--visible");
          
            })
            x.addEventListener("mouseleave", (e)=>{
                images_div[i].classList.remove("--visible");

            })
        })

        document.querySelector(".portfolioprojects").addEventListener("mousemove", (e)=>{
            gsap.to(cursor, {x: e.clientX-60, y: e.clientY-60, duration: .5})
        })
