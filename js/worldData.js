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
    <div class="row">
    <div class="col-lg-12">
        
    <h2>${(countryDets.country).toUpperCase()}</h2>
        
    </div> 
</div> 
<div class="row">
    <div class="col-lg-12">

        <!-- Card-->
        <div class="card">
            <div class="card-body">
                <div class="card-title">CASES</div>
                
                <hr class="cell-divide-hr">
                <div class="price">
                    <span class="value">${countryDets.cases}</span>
                    <div class="frequency"></div>
                </div>
                <hr class="cell-divide-hr">
                
                
            </div>
        </div> <!-- end of card -->
        <!-- end of card -->

       <!-- Card-->
       <div class="card">
        <div class="card-body">
            <div class="card-title">ACTIVE</div>
            
            <hr class="cell-divide-hr">
            <div class="price">
                <span class="value">${countryDets.active}</span>
                <div class="frequency"></div>
            </div>
            <hr class="cell-divide-hr">
            
            
        </div>
    </div> <!-- end of card -->
    <!-- end of card -->

       <!-- Card-->
       <div class="card">
        <div class="card-body">
            <div class="card-title">RECOVERED</div>
            
            <hr class="cell-divide-hr">
            <div class="price">
                <span class="value">${countryDets.recovered}</span>
                <div class="frequency"></div>
            </div>
            <hr class="cell-divide-hr">
            
            
        </div>
    </div> <!-- end of card -->
    <!-- end of card -->
    <!-- Card-->
    <div class="card">
        <div class="card-body">
            <div class="card-title">DEATHS</div>
            
            <hr class="cell-divide-hr">
            <div class="price">
                <span class="value">${countryDets.deaths}</span>
                <div class="frequency"></div>
            </div>
            <hr class="cell-divide-hr">
            
            
        </div>
    </div> <!-- end of card -->
    <!-- end of card -->
    <!-- Card-->
    <div class="card">
        <div class="card-body">
            <div class="card-title">TODAY+</div>
            
            <hr class="cell-divide-hr">
            <div class="price">
                <span class="value">${countryDets.todayCases}</span>
                <div class="frequency"></div>
            </div>
            <hr class="cell-divide-hr">
            
            
        </div>
    </div> <!-- end of card -->
    <!-- end of card -->


    </div> <!-- end of col -->
</div> <!-- end of row -->`;  
};


const updateCountry = async(country) => {

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

