function fetchJobs(name) {
    return fetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data')

    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
}

export {fetchJobs};