// ----------------------
//         WORLD
// ----------------------



// ----------------------
//         STATE
// ----------------------
// const stateForm = document.querySelector('form');

// const updateui = (data) => {

//   const stateDets = data.stateDets;
//   console.log(stateDets);
  
// };

// details.innerHTML = `
//     <h5 class="my-3">country name</h5>
//     <div class="my-3">Covid condition</div>
//     <div class="display-4 my-4">
//     <span>PATients</span>
//     </div>`;

// const updateState = async(state) => {

//       //console.log(country);
//       const stateDets = await getCountry(state);
//       return{ stateDets };
//   };
  
//   countryForm.addEventListener('submit',e => {
  
//       console.clear();
//       e.preventDefault(); //to prevent default action of reloading of page
  
//       //get country value
//       const state = stateForm.state.value.trim();
//       stateForm.reset();
  
//       //update the UI with new country
//       updateCountry(state)
//           .then(data => updateui(data))
//           .catch(err => console.log(err));
//   })




//   navbar scroll behaviour

$(document).scroll(function(){
    $('.navbar').toggleClass('scrolled', $(this).scrollTop() > $('.navbar').height())
  });

  
  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
    document.getElementById("navbar").style.transition = "1s";
  }
  prevScrollpos = currentScrollPos;
}