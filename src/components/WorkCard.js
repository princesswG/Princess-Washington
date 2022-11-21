import React from "react";
// import WorkCard from "./components/WorkCard.js"

export function WorkCard(){
    return(
    <>

            {/* <!-- Work --> */}
            <div id="work" class="bg-[#B2B2B2] h-auto my-6 py-8 rounded-lg border-4">
            <div class="flex justify-center">
                <h3 class="border-4 w-25  border-dashed px-4 py-4">Work</h3>
              </div>

              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">SNS Company</summary>
                <p><i>SNS Company is a E-commerence Company that does online businesses, building websites, and Food Services to all.
                </i><br/>THANKS!!!
                </p>
              </details>

              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">SNS Tech</summary>
                <p><i>I'm a Figma Designer, a Front-End Developer and Projects Manager as well.
                  <br/>THANKS!!!</i></p>
              </details>

              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">Self-Employed</summary>
                <p><i>I'm Self-Employed, Sometimes Work from home, sell things online, and also use my skills I learn form my parents to earn cash for myself.
                  <br/>THANKS!!!</i></p>
              </details>

            </div></>
    )
}
