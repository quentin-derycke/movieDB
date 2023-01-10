

const Api = () => {



    fetch(`http://api.themoviedb.org/3/search/movie?api_key=f33cd318f5135dba306176c13104506a&query=${request}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            <input className="input is-rounded" onChange={request} />
            console.log(data);
        })
        .catch(function (error) {
            console.log(error);
        })


};

export default SearchApi;