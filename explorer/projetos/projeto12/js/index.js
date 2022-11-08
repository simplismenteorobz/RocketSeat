const routes = {
    "/explorer/projetos/projeto12/index.html": "/explorer/projetos/projeto12/pages/home.html",
    "/universe": "/explorer/projetos/projeto12/pages/universe.html",
    "/exploration": "/explorer/projetos/projeto12/pages/exploration.html",
    404: "/explorer/projetos/projeto12/pages/404.html"
}

function route(event){
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    handle()
}

function handle(){
    const {pathname} = window.location
    const route = routes[pathname] || routes[404]
    const back = document.querySelector("#body")

    fetch(route)
    .then(data => data.text())
    .then(html => {
        document.querySelector("#app").innerHTML = html
    })

    console.log(pathname)
    
    switch(pathname){
        case "/universe":
            back.style.backgroundImage = "url(./img/mountains-universe02.png)"; 
            break
        case "/exploration":
            back.style.backgroundImage = "url(./img/mountains-universe-3.png)"
            break
        default:
            back.style.backgroundImage = "url(./img/mountains-universe-1.png)"
    }
}

handle()
 
window.route = () => route()
window.onpopstate = () => handle()












