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
                    Dummy Project
                    </h3>
                <p className="text-md text-gray-800 font-mono" > is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.{""}</p>
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
                    Dummy Project
                    </h3>
                <p className="text-md text-gray-800 font-mono" > is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.{""}</p>
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
                    Dummy Project
                    </h3>
                <p className="text-md text-gray-800 font-mono" > is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.{""}</p>
                        </div>
        </div>
        </div>
    
    </div>
       </>

       );
}