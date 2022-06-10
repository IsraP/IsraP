// onload = () => {
//     setTimeout(showAnim2, 5500)
// }

// function showAnim2() {
//     const divAnim1 = document.getElementById('anim1')
//     const divAnim2 = document.getElementById('anim2')
    
//     divAnim1.innerHTML = '';
//     divAnim2.classList = ['typewriter2']
// }

onload = () => {
    const divAnim = document.getElementById('animDiv')
    const h1Anim = document.getElementById('anim')

    setTimeout( () => {
        divAnim.classList.remove("typewriter")
        divAnim.classList.add("typewriter2")
        h1Anim.innerHTML = "> Hey there, I'm IsraP!"
    }, 5000)

    setTimeout( () => {
        divAnim.classList.remove("typewriter2")
        divAnim.classList.add("typewriter3")
        h1Anim.innerHTML = "> Hey there, I'm Israel Péres!"
    }, 7500)
}