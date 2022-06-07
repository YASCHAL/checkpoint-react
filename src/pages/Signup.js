import React from 'react';
import Section from './Section';

const Signup = () => {
    return (
      <div>
         <Section/>
       
            <div class="row w-50  justify-content-center align-items-center mt-3 mx-lg-5">
               <h1>Formulaire</h1>
  <div class="col d-flex justify-content-center align-items-center">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name" required/>
  </div>
  <div class="col d-flex justify-content-center align-items-center">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" required/>
  </div>
</div>
<div class="row w-50  justify-content-center align-items-center mt-3 mx-lg-5">
<div class="col d-flex justify-content-center align-items-center">
    <input type="text" class="form-control" placeholder="E-mail" aria-label="E-mail"required/>
  </div>
  </div>
<div class="row w-50  justify-content-center align-items-center mt-3 mx-lg-5">
<div class="col d-flex justify-content-center align-items-center">
    <input type="text" class="form-control" placeholder="Phone" aria-label="Phone"/>
  </div>
<div class="col d-flex justify-content-center align-items-center">
    <input type="text" class="form-control" placeholder="Ville" aria-label="Ville"/>
  </div>
  </div>
  <div class="row w-50  justify-content-center align-items-center mt-3 mx-lg-5">
<div class="col d-flex justify-content-center align-items-center">
    <input type="text" class="form-control" placeholder="User Name" aria-label="User Name"required/>
  </div>
  </div>
<div class="row w-50  justify-content-center align-items-center mt-3 mx-lg-5">
<div class="col d-flex justify-content-center align-items-center">
    <input type="text" class="form-control" placeholder="Password" aria-label="Password" required/>
  </div>
<div class="col d-flex justify-content-center align-items-center">
    <input type="text" class="form-control" placeholder="Confirme Password" aria-label="password" required/>
  </div>
   <button type="submit" class="btn btn-secondary mx-lg-5 mb-3 mt-3"><a href="/login" className="nav-link text-white"> Sign Up</a></button>
  </div>
  
  <div class="btn-group d-flex w-100 justify-content-center">
         <button type="button" class="btn btn-sm btn-secondary "><a href="/contact" className="nav-link text-white"> Contact</a>
          
         </button>
         <button type="button" class="mx-lg-1 btn btn-sm btn-secondary"><a href="/login" className="nav-link text-white">Home</a>
          
         </button>
         <button type="button" class=" btn btn-sm btn-secondary"><a href="/discover" className="nav-link text-white"> Discover</a>
          
         </button>

       </div>
 
            
      </div>
     
        
    );
};

export default Signup;