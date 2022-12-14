async function base64decode(request, response) {
    const string = request.query.string;
    if(!string) return response.send("Missing string content.")
    return response.status(200).send(btoa(string));
}
export default base64decode;
