import React,{useEffect, useState} from "react";
import { Navbar} from "../../components/Navbar";

import { collection, doc, getDocs } from "firebase/firestore";
import { firestoreDB } from "../../db/firebase";

export default function Blog(){

  const[posts, setPost]= useState([]);

  useEffect(()=>{
    return async()=>{
      const querySnapshot = await getDocs(collection(firestoreDB, "posts"));
      setPost(querySnapshot.docs.map((doc)=>({
        id: doc.id, 
        ...doc.date(),
    }) )
  );

    }
  });
    return(
        <>
        <Navbar/>
       <div class="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
  <div class="absolute inset-0">
    <div class="h-1/3 bg-white sm:h-2/3"></div>
  </div>
  <div class="relative mx-auto max-w-7xl">
    <div class="text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">WELCOME TO MY BLOG SITE!!!</h2>
      <p class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">This is my personal blog site where I frequently post stories, news and and motivations...</p>
    </div>
    <div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
      {
        posts.map(post =>{
          return(
            <>
            </>
          )
        })
      }
      <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt=""/>
        </div>
        <div class="flex flex-1 flex-col justify-between bg-white p-6">
          <div class="flex-1">
            <p class="text-sm font-medium text-indigo-600">
              <a href="#" class="hover:underline">Article</a>
            </p>
            <a href="#" class="mt-2 block">
              <p class="text-xl font-semibold text-gray-900">Start doing something great today Not Tomorrow!!</p>
              <p class="mt-3 text-base text-gray-500"><i>Dream big and explore with everything that's within you, no one will dream for you unless you start doing it yourself...</i></p>
            </a>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
              <a href="#">
                <span class="sr-only">Princess B. Washington</span>
                <img class="h-10 w-10 rounded-full" src="profile.jpg" alt=""/>
              </a>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">
                <a href="https://www.instagram.com/princess_b._washington/" class="hover:underline">Princess B. Washington</a>
              </p>
              <div class="flex space-x-1 text-sm text-gray-500">
                <time datetime="2020-03-16">Mar 16, 2020</time>
                <span aria-hidden="true">&middot;</span>
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}