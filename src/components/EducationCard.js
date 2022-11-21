import React from "react";

export function EducationCard(){
    return(
        <>
        <div id="education" class="bg-[#
            3EAEAEA] h-50 my-6 py-8 rounded-lg border-4"></div>
            <div class="flex justify-center">
                <h3 class="border-4 w-25  border-dashed px-4 py-4">Education</h3>
              </div>
              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">Bluecrest Unversity College LIBERIA</summary>
                <p><i>Bluecrest Unversity College is a Techology Institution where students who wants to acquire computer skills and computer knowlege goes and become great impact in society and World at large.
                    They Offer IT(Information Techology) and Marketing Skills in Business and Fashion. </i></p>
              </details>

              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">Orange Digital Center LIBERIA</summary>
                <p><i>Orange Digital Center is a learning platform where individuals can have free traning that they can used and become best at whatever they've learn.
                    They also have a coding school that is a technological center to train and animate the tech enthusiasts' community.</i>
                </p>
              </details>
        </>
    )
}