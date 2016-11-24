const API_URL = 'http://opendata.brussels.be/api/records/1.0/search/?dataset=playgrounds&refine.code_postal=1000';


export function getData() {
    fetch(API_URL)
    .then( response => {
        console.log(response);
    });
}