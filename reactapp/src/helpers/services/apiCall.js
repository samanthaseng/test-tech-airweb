const apiCall = async function(options) {
    const { route } = options;
    const rawResponse = await fetch(route,
        {
            method: options.method ? options.method : 'GET',
            headers: options.headers ? options.headers : {},
            body: options.body ? options.body : null
        }
    );    
    return await rawResponse.json();
}

export default apiCall;