

const data =[
    {
        id:1,
        question:"What are accordion components?",
        answer:"Accordion components are user intrface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand collapse action."
    },
    {
        id:2,
        question:"What are they used for?",
        answer:"Accordion components are user intrface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand collapse action."
    }, 
    {
        id:3,
        question:"Accordion as a musical instrument?",
        answer:"Accordion components are user intrface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand collapse action."
    },
    {
        id:4,
        question:"Can I create an accordion component with a diffrent framework?",
        answer:"Accordion components are user intrface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand collapse action."
    }

]

const accordionWrapper = document.querySelector(".accordion");


function createAccordionData(){
    accordionWrapper.innerHTML=data.map((dataItem)=>`
        <div class="accordion_item">
        <div class="accordion_title">
            <h3>${dataItem.question}</h3>
            <i class="fa-solid fa-arrow-up"></i>
        </div>
        <div class="accordion_content">
            <p>${dataItem.answer}</p>
            
        </div>
        </div>
    `).join("")
}

createAccordionData();

getAccordionTitles = document.querySelectorAll(".accordion_title");

getAccordionTitles.forEach(currentItem=>{
    currentItem.addEventListener("click",(event)=>{
        if(currentItem.classList.contains('active')){
            currentItem.classList.remove('active');
        }
        else{
            const getAlreadyAddeddActiveClass = document.querySelectorAll(".active");
            getAlreadyAddeddActiveClass.forEach(currentActiveItem=>{
                currentActiveItem.classList.remove("active");
            })
            currentItem.classList.add("active")
        }
    })
})
