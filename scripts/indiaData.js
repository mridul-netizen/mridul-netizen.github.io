const getCountry = async(country) => {
    
    const base = 'https://disease.sh/v3/covid-19/countries/';//api badalna hai
    const query = country;

    const response = await fetch(base+country);
    
    const data  =await response.json();

    return data;

};
