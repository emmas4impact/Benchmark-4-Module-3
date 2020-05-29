const url ="https://striveschool.herokuapp.com/api/movies/"

const username ='user9'
const password = 'sP4YMKhBpqQHAPJN'
const headers =new Headers({
    "Content-Type" : "application/json",
    'Authorization': 'Basic ' + btoa(username + ":" + password),
});


getMovies = async (categories) =>{
    let response = await fetch(url + categories, {
        method :'GET', 
        headers: headers,
    });
    return await response.json();   //this is returning the reuslt of the promise in an usable way
    
}

getMovie= async (id) =>{
    let response = await fetch(url + "/id/" + id, {
        method :'GET', 
        headers: headers,
    });
    return await response.json();   //this is returning the reuslt of the promise in an usable way
}


saveMovie = async (movieEvent) => {
    let response = await fetch(url, {
        method :'POST', //use to save request
        body: JSON.stringify(movieEvent), //convert over agendaEvent to string
        headers: headers,
    });
    console.log(response);
    return response;
};

editMovie = async (id, movieEvent) => {
    let response = await fetch(url + id, {
        method :'PUT', //use to save request
        body: JSON.stringify(movieEvent), //convert over agendaEvent to string
        headers: headers,
    });
    console.log(response)
    return response;
};

deleteMovie = async (id) => {
    let response = await fetch(url + id ,{
        method :'DELETE', //use to delete request
         headers: headers,
    });
    return response;
};

