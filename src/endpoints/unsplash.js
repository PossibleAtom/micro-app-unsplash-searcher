export async function fetchUnsplashAPIdata(apiKey, searchTerms) {
    if (apiKey) {
        return new Promise(function (resolve, reject) {
            const request = new XMLHttpRequest();
            const requestUrl = `https://api.unsplash.com/${searchTerms ? `search/photos?query=${searchTerms}&` : 'photos?'}client_id=${apiKey}&per_page=30`;
            request.open('GET', requestUrl);
            request.onload = function () {
                if (request.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error('https://api.unsplash.com/photos didn\'t load successfully; error code:' + request.statusText));
                }
            };

            request.onerror = function () {
                reject(Error('There was a network error.'));
            };

            request.send();
        });
    }
    return new Error('No API key. Please edit .env to include a valid unsplash API key.');
}
