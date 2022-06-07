import React from 'react';
import Nav from './Nav';
import Section from './Section';

const Login = () => {
    return (
        <>
        <Section/>
         <div className='login'>
             <div class="mb-5 w-100 d-flex justify-content-center mt-5" >
            <form >
                 <label htmlFor="name" className="form-label text-white">Nom d'utilisateur</label>
                 <input type="text" class="form-control" id="name" />
                 <label htmlFor="inputPassword" class="form-label text-white">Mot de passe</label>
                 <input type="password" class="form-control" id="inputPassword" />
                 <button type="submit" class="btn btn-primary mb-3 mt-3">Se connecté</button>
            </form>
        </div>
         <div class="btn-group d-flex w-100 justify-content-center">
         <button type="button" class="btn btn-sm btn-secondary "><a href="/contact" className="nav-link text-white"> Contact</a>
          
         </button>
         <button type="button" class="mx-lg-1 btn btn-sm btn-secondary"><a href="/sign-up" className="nav-link text-white"> Sign Up</a>
          
         </button>
         <button type="button" class=" btn btn-sm btn-secondary"><a href="/discover" className="nav-link text-white"> Discover</a>
          
         </button>

       </div>
        </div>
       
        
        </>
       
    );
};

export default Login;