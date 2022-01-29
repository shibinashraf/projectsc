const h1 = document.getElementById('quote');
const div = document.querySelector('.tags');
url = 'https://quotes15.p.rapidapi.com/quotes/random/';
const save = document.querySelector('.share');
const buttons = document.querySelectorAll('.button');
const refresh = document.querySelector('.save');

const getData = () => {
    fetch(url, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'quotes15.p.rapidapi.com',
            'x-rapidapi-key': '8923a54497msh4015df3814afd0cp1c6ab1jsn6cc39eee125e'
        }
    }).then(response => response.json())
    .then(data => {
        h1.textContent = data.content;
    })
}

getData();

buttons.forEach(button => {
    button.addEventListener('mouseover', ()=> {
        button.style.transform  = "scale(1.2)";
        button.style.cursor = "pointer";
    })

    button.addEventListener('mouseleave', ()=> {
        button.style.transform = "scale(1)";
    })
    
    button.addEventListener('onmousemove', ()=> {
        button.style.transform = "scale(1)";
    })
})

save.addEventListener('click', ()=> {
    navigator.clipboard.writeText(h1.textContent);
    save.style.transform = "scale(0.9)";
})

refresh.addEventListener('click', ()=>{
    h1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <path d="M43 50A7 7 0 0 0 57 50A7 7.5 0 0 1 43 50" fill="#ffffff" stroke="none">
      <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50.25;360 50 50.25"></animateTransform>
    </path>
    <!-- [ldio] generated by https://loading.io/ --></svg>`;
    refresh.style.transform = "rotate(90deg)";
    refresh.style.transform = "scale(0.9)";
    getData();
})