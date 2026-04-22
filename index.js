let yearBox = document.getElementById("year");
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
yearBox.textContent = `${months[new Date().getMonth()]} - ${new Date().getFullYear()}`

// let experience = document.getElementById('experiance').children
// console.log(experience)
// experience.forEach(element => {
//     addEventListener(element, () => {
//         console.log('hover')
//     })
// });


// let btn;
let projects = [...document.querySelectorAll('.project')]
console.log(projects)

projects.forEach((e) => {
    let btn = document.createElement('button')
    let img = document.createElement('img')
    img.src = 'icons/open_in_new.svg'
    img.alt = 'openNewTab'
    btn.appendChild(img)

    Object.assign(btn.style, {
        padding: '0', 
        margin: '0', 
        border: '0', 
        backgroundColor: 'transparent', 
        position: 'absolute', 
        right: '0px', 
        // bottom: '0',
        display: 'none'
    })
    // btn.style.bottom = '5%'

    if (!getComputedStyle(e).position || getComputedStyle(e).position === 'static') {
        e.style.position = 'relative'
    }

    e.insertAdjacentElement("beforeend", btn)

    e.addEventListener('mouseenter', ()=> {
        btn.style.removeProperty('display')
    })
    e.addEventListener('mouseleave', ()=> {
        btn.style.display = 'none'
    })
})
