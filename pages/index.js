async function home(request, response) {
    return response.send("<div><h1>Home</h1><a href="/sobre"><p>Acessar página Sobre</p></a></div>")
}
export default home;
