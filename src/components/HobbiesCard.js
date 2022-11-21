import React from "react";

export function HobbiesCard(){
    return(
        <>
          <div id="hobbie" class="bg-[#B2B2B2] h-50 my-6 py-8 rounded-lg border-4">

          <div class="flex justify-center">
                <h3 class="border-4 w-26  border-dashed px-4 py-4">Hobbies</h3>
              </div>
              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">Reading</summary>
                <p><i>I Love reading because the more you read the more innovative you become. 
                  <br/>Reading enable one to understand communication and help you to invent new ideas that will be of great impact to society and the world at large!!!</i></p>
              </details>
              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">Singing</summary>
                <p><i> I found Singing important because it makes me to express my graditude and the joy I'm feeling with in myself.
                  <br/>Singing makes you becomes entertain and makes everyone around you to be happy as well!!</i></p>
              </details>
          </div>
        </>
    )
}