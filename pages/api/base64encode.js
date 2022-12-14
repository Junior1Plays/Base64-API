async function base64encode(request, response) {
    const body = JSON.parse(request.body)
    const string = body.string;
    if(!string) return response.send("String is missing.");

    try {
        return response.send(btoa(string));
    } catch(ex) {
        return response.send(ex);
    }
}

export default base64encode;
