async function base64encode(request, response) {
    const body = JSON.parse(request.body)
    const string = body.string;
    if(!string) return response.send("String is missing.");

    return response.send(btoa(string));
}

export default base64encode;
