async function base64decode(request, response) {
    const string = request.query.string;
    try {
        let resultado = btoa(string);
        return response.send(resultado);
    } catch {
        return response.send("Error converting Base64 to text.");
    }
}
export default base64decode;
