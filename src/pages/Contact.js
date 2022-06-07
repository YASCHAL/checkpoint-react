import React from "react";
import Section from "./Section";

const Contact = () => {
  return (
      <div>
          <Section />
           <div class="mt-5">
      
      <h3 className=" text-dark text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas in ab ad
        ducimus soluta voluptas qui omnis consequuntur nisi necessitatibus illum
        inventore, eveniet beatae vel!
      </h3>
      <p className="lead text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsam
        accusamus iusto nemo fuga voluptates in fugit, culpa expedita magnam et
        architecto odit, eos aliquid voluptatem. Magni, velit! Optio fugit
        consequatur dolorum voluptatem vero nihil odit illo quod, explicabo
        dolores eveniet fugiat, molestias consequuntur delectus. Quo
        reprehenderit dolorum cupiditate non!
      </p>
      </div>
      <div class="btn-group d-flex w-100 justify-content-center mt-5">
         <button type="button" class="btn btn-sm btn-secondary "><a href="/login" className="nav-link text-white">Login</a>
          
         </button>
         <button type="button" class="mx-lg-1 btn btn-sm btn-secondary"><a href="/sign-up" className="nav-link text-white"> Sign Up</a>
          
         </button>
         <button type="button" class=" btn btn-sm btn-secondary"><a href="/discover" className="nav-link text-white"> Discover</a>
          
         </button>

       </div>
      </div>
   
    
  );
};

export default Contact;
