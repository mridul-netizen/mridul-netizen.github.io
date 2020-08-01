
const getCountry = async(country) => {
    
    const base = 'https://disease.sh/v3/covid-19/countries/';
    const query = country;

    const response = await fetch(base+country);
    
    const data  =await response.json();

    return data;

};

// getCountry('')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));