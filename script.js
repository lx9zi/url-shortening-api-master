
const icon = document.querySelector('#icon');
const NavOpen = document.querySelector('.nav-open');

const shortBtn = document.querySelector('.shorten');
const inp = document.querySelector('input');


icon.addEventListener('click', () => {
    NavOpen.classList.toggle('active')
})


shortBtn.addEventListener('click', () => {
    if (inp.value == '') {
        inp.style.border = '2px solid red'
    }
    else {
        inp.style.border = 'none'
        shortenUrl(inp.value);
    }
})


async function shortenUrl(url) {
    try {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
        const data = await res.json();
        const newUrl = document.querySelector('.short-link');
        newUrl.classList.add('short')
        newUrl.innerHTML = `
        <p class='underLine'> ${inp.value}</p>
     <p class='link'> ${data.result.short_link}</p>
     <button class="newUrl-btn" >Copy</button>
     `;

        const copyBtn = document.querySelector(".newUrl-btn");
        copyBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(copyBtn.previousElementSibling.innerText);
        });

        inp.value = "";
    } catch (err) {
        console.log(err);
    }
}


