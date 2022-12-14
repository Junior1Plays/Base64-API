async function base64encode(request, response) {
    const string = request.query.string;
    try {
        let resultado = btoa(string);
        return response.send(resultado);
    } catch {
        return response.send("Error converting text to Base64.");
    }
}
export default base64encode;
