import React from "react";

export default function AboutCard(props) {
  return (
    <>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="space-y-4 px-4 py-6 rounded-lg">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="text-indigo-500 w-12 h-12 mb-3 inline-block"
            viewBox="0 0 24 24"
          >
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-white">
            {props.num}
          </h2>
          <p class="text-white">{props.para}</p>
        </div>
      </div>
    </>
  );
}
