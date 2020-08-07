const stateForm = document.getElementById('form2');
const Details = document.getElementById('details2');



const getState= async(state) => {
    
    const base = 'https://api.covidindiatracker.com/state_data.json';
    const query = state;

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

    //console.log(stateDets);

    Details.innerHTML = `
    <thead>
    <tr>
      <th>Categories</th>
      <th>Census</th>
    </tr>
  </thead>
  <div class="text-uppercase text-center details">
  <tbody>
    <tr>
      <td>State</td>
      <td>${state}</td>
    </tr>
    <tr>
      <td>Active</td>
      <td>${obj.active}</td>
    </tr>
    <tr>
      <td>Recovered</td>
      <td>${obj.recovered}</td>
    </tr>
    <tr>
      <td>Deaths</td>
      <td>${obj.deaths}</td>
    </tr>
    <tr>
      <td>Confirmed</td>
      <td>${obj.confirmed}</td>
    </tr>
  </tbody>
</div>`;  
};


const updateState = async(state) => {

    //console.log(country);
    const stateDets = await getState(state);
    return{ stateDets };
};


// execution starts from here

stateForm.addEventListener('submit',e => {

    console.clear();
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



// remember to add this placeholder afterwards

/* <img src="${countryDets.countryInfo.flag}" class="time card-img-top"> */





// getCountry('')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));