import React from "react";
import Section from "./Section";

const Discover = () => {
  return (
    <div>
      <Section />
      <div class="mt-5">
          <h3 className=" text-dark text-center">Lorem ipsum dolor sit amet.</h3>
      <p className="lead text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        eligendi, repudiandae alias voluptate, nemo quaerat cum laboriosam,
        repellendus inventore incidunt enim asperiores reiciendis dolorem
        accusamus laudantium! Nesciunt, illo quo ipsum, officiis est ex, odit
        quas consectetur deleniti eligendi sequi! Necessitatibus, deserunt?
        Saepe officiis perspiciatis a tenetur obcaecati aliquam incidunt tempora
        beatae voluptatem itaque exercitationem unde reiciendis magnam eos nam
        sint possimus dignissimos veritatis, recusandae laudantium asperiores
        laboriosam? Facere officia porro, consequatur optio libero quos. Nostrum
        exercitationem quasi perspiciatis voluptas corporis voluptatum
        aspernatur excepturi molestiae! Commodi quas natus aperiam dolorum
        dignissimos ullam eaque labore at nobis inventore corrupti fugit
        pariatur iste explicabo aut quisquam odio, repellendus magni rerum neque
        magnam doloribus veritatis? Nihil omnis, illo nulla ut dolores fuga
        voluptates repellendus?
      </p>
      </div>
      
      <div class="btn-group d-flex w-100 justify-content-center mt-5">
         <button type="button" class="btn btn-sm btn-secondary "><a href="/contact" className="nav-link text-white"> Contact</a>
          
         </button>
         <button type="button" class="mx-lg-1 btn btn-sm btn-secondary"><a href="/sign-up" className="nav-link text-white"> Sign Up</a>
          
         </button>
         <button type="button" class=" btn btn-sm btn-secondary"><a href="/login" className="nav-link text-white"> Login</a>
          
         </button>

       </div>
    </div>
  );
};

export default Discover;
