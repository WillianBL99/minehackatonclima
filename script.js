let search= document.querySelector(".search");
search.addEventListener("click",()=>{
    const content = document.querySelector(".content");
    const result = document. querySelector(".result");
    result.classList.remove("hidden");
    content.classList.add("hidden");
})