// Your code goes here
const navItems = document.querySelectorAll("nav a");

navItems.forEach( (element) => {
    element.addEventListener('click', () => {
        event.preventDefault();
    });
});

// 1. Double click funbus changes text to blue
const funBusHeader = document.querySelector(".logo-heading");

funBusHeader.addEventListener('dblclick', () => {
    funBusHeader.style.color  = "dodgerblue";
});

// 2. Changes images transparency when grabbed
const allImages = document.querySelectorAll("img");
console.log(allImages)
allImages.forEach((element) => {
    element.addEventListener('dragstart', () => {
        element.style.opacity = "0.1";
    });
    element.addEventListener('dragend', () => {
        element.style.opacity = "1.0";
    });
});

// 3. Prints in console when page is loaded
window.addEventListener('load', () => {
    console.log('page is fully loaded');
});

// 4. Changes footer colors on mouseover
const footer = document.querySelector(".footer");
footer.addEventListener('mouseover', () => {
    footer.style.backgroundColor = "dodgerblue";
});

// 5. Changes text on selection
const allPText = document.querySelectorAll("p");
console.log(allPText);
allPText.forEach((element) => {
    element.addEventListener('select', () => {
        alert(element.textContent);
    });
});

// 6. Scrolls to bottom of page on keypress b
window.addEventListener("keydown", event => {
    if(event.keyCode == 66){
        window.scrollTo(0,document.body.scrollHeight);
    }
});

// 7. Prevents text from being copied from the page
document.addEventListener('copy', (event) =>{
    event.clipboardData.setData('text/plain', "No copy");
    event.preventDefault();
});

// 8. Fun bus header increases font size everytime you scroll
let fontSize = 4
window.addEventListener('scroll', () => {
    fontSize+=.01;
    funBusHeader.style.fontSize = `${fontSize}rem`;
  });

// 9. alert when resize window with dimensions
window.onresize = () => {
    const hight = window.innerHeight;
    const width  = window.innerWidth;
    alert(`New width is ${width} new hight is ${hight}`)
}

// 10. Makes buttons at the bottem of the page set the page display to none
const button = document.querySelectorAll(".btn");
button.forEach((element) => {
    element.addEventListener("click", () =>{
        document.querySelector("body").style.display = "none";
    });
});
