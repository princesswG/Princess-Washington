import React from "react";
import {Navbar} from "../components/Navbar.js";

export default function Projects() {
  return (
    <>
    <Navbar/>
    
    <div className="py-8 px-4 md:px-20 md:py-16 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className=" overflow-hidden rounded-lg" >
    <div className="w-full">
            <img 
            className="rounded-t-lg" 
            src="https://picsum.photos/400/200"  
            alt=""/>
        </div>
        <div className="bg-gray-100 px-8 py-4 font-mono font-medium">
                <h3 className="py-2 md:py-4 font-bold text-2xl">
                    My First Project
                    </h3>
                <p className="text-md text-gray-800 font-mono" > This is my first project and is comming very soon... THANKS!!!{""}</p>
                        </div>
        </div>
        <div className="rounded-lg">
    <div className="w-full">
            <img 
            className="rounded-t-lg" 
            src="https://picsum.photos/400/200"  
            alt=""/>
        </div>
        <div className="bg-gray-100 px-8 py-4 font-mono font-medium">
                <h3 className="py-2 md:py-4 font-bold text-2xl">
                    My Second Project
                    </h3>
                <p className="text-md text-gray-800 font-mono" > This is my second project and is comming very soon. THANKS!!!{""}</p>
                        </div>
        </div>
        <div className="rounded-lg">
    <div className="w-full">
            <img 
            className="rounded-t-lg" 
            src="https://picsum.photos/400/200"  
            alt=""/>
        </div>
        <div className="bg-gray-100 px-8 py-4 font-mono font-medium">
                <h3 className="py-2 md:py-4 font-bold text-2xl">
                    My Third Project
                    </h3>
                <p className="text-md text-gray-800 font-mono" >This is my Third Project and is comming very soon.. THANKS!!!{""}</p>
                        </div>
        </div>
        </div>
    
    </div>
       </>

       );
}