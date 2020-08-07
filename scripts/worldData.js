
const countryForm = document.getElementById('form1');
const details = document.getElementById('details1');

const getCountry = async(country) => {
    
    const base = 'https://disease.sh/v3/covid-19/countries/';
    const query = country;

    const response = await fetch(base+country);
    
    const data  =await response.json();

    return data;

};

const updateUI = (data) => {

    const countryDets = data.countryDets;
    console.log(countryDets);

    details.innerHTML = `
    <thead>
    <tr>
      <th>Categories</th>
      <th>Census</th>
    </tr>
  </thead>
  <div class="text-uppercase text-center details">
  <tbody>
    <tr>
      <td>Country</td>
      <td>${countryDets.country}</td>
    </tr>
    <tr>
      <td>Active</td>
      <td>${countryDets.active}</td>
    </tr>
    <tr>
      <td>Recovered</td>
      <td>${countryDets.recovered}</td>
    </tr>
    <tr>
      <td>Deaths</td>
      <td>${countryDets.deaths}</td>
    </tr>
    <tr>
      <td>New Cases per day</td>
      <td>${countryDets.todayCases}</td>
    </tr>
  </tbody>
</div>`;  
};


const updateCountry = async(country) => {

    //console.log(country);
    const countryDets = await getCountry(country);
    return{ countryDets };
};


// execution starts from here

countryForm.addEventListener('submit',e => {

    console.clear();
    e.preventDefault(); //to prevent default action of reloading of page

    //get country value
    const country = countryForm.country.value.trim();
    console.log(country);
    countryForm.reset();

    //update the UI with new country
    updateCountry(country)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
})



// remember to add this placeholder afterwards

/* <img src="${countryDets.countryInfo.flag}" class="time card-img-top"> */

