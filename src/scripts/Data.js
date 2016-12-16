const API_URL = 'https://opendata.brussels.be/api/records/1.0/search/?dataset=playgrounds&refine.code_postal=1000';


export function getData() {
    return fetch(API_URL)
        .then( response => {
            return response.json();
        });
}