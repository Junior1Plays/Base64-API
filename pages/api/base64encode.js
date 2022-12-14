async function base64encode(request, response) {
    const string = request.query.string;
    if(!string) return response.send("Missing string content.")
    return response.status(200).send(atob(string));
}
export default base64encode;
