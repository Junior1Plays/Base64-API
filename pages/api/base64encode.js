async function base64encode(request, response) {
    const string = request.query.string;
    try {
        let resultado = atob(string);
        return response.send(string);
    } catch {
        return response.send("Error converting text to Base64.");
    }
}
export default base64encode;
