const stateForm = document.getElementById('form2');
const Details = document.getElementById('details2');

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

const getState= async(state) => {
    
    const base = 'https://api.covidindiatracker.com/state_data.json';
    const response = await fetch(base);
    const data  =await response.json();
    return data;

};

const updateui = (data,state) => {

    console.log(state);
    const stateDets = data.stateDets;
    console.log(stateDets);
    for(i = 0; i < stateDets.length; i++){
        if(stateDets[i].state.toLowerCase() == state.toLowerCase()){
            console.log(stateDets[i]);
            obj = stateDets[i];
        }
    }

Details.innerHTML = `
<div class="row">
<div class="col-lg-12">
    
<h2>${state.toUpperCase()}</h2>
    
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
                <span class="value">${numberWithCommas(obj.confirmed)}</span>
                <div class="frequency"></div>
            </div>
            <hr class="cell-divide-hr">
            
            
        </div>
    </div> 
    

   <!-- Card-->
   <div class="card">
    <div class="card-body">
        <div class="card-title">ACTIVE</div>
        
        <hr class="cell-divide-hr">
        <div class="price">
            <span class="value">${numberWithCommas(obj.active)}</span>
            <div class="frequency"></div>
        </div>
        <hr class="cell-divide-hr">
        
        
    </div>
</div> 


   <!-- Card-->
   <div class="card">
    <div class="card-body">
        <div class="card-title">RECOVERED</div>
        
        <hr class="cell-divide-hr">
        <div class="price">
            <span class="value">${numberWithCommas(obj.recovered)}</span>
            <div class="frequency"></div>
        </div>
        <hr class="cell-divide-hr">
        
        
    </div>
</div> 

<!-- Card-->
<div class="card">
    <div class="card-body">
        <div class="card-title">DEATHS</div>
        
        <hr class="cell-divide-hr">
        <div class="price">
            <span class="value">${numberWithCommas(obj.deaths)}</span>
            <div class="frequency"></div>
        </div>
        <hr class="cell-divide-hr">
        
        
    </div>
</div> 




</div> 
</div> `
};


const updateState = async(state) => {

  const stateDets = await getState(state);
    return{ stateDets };

};

// execution starts from here
stateForm.addEventListener('submit',e => {

    console.clear();//clears the console each time a new place is entered
    e.preventDefault(); //to prevent default action of reloading of page
    //get state value
    const state = stateForm.state.value.trim();
    console.log(state);
    stateForm.reset();
    //update the UI with new country
    updateState(state)
        .then(data => updateui(data,state))
        .catch(err => console.log(err));

})
