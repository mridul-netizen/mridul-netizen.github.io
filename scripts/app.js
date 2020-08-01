const countryForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data) => {

    const countryDets = data.countryDets;
    console.log(countryDets);
    
};

details.innerHTML = `
    <h5 class="my-3">country name</h5>
    <div class="my-3">Covid condition</div>
    <div class="display-4 my-4">
    <span>PATients</span>
    </div>`;

const updateCountry = async(country) => {

    //console.log(country);
    const countryDets = await getCountry(country);
    return{ countryDets };
};

countryForm.addEventListener('submit',e => {

    console.clear();
    e.preventDefault(); //to prevent default action of reloading of page

    //get country value
    const country = countryForm.country.value.trim();
    countryForm.reset();

    //update the UI with new country
    updateCountry(country)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
})