export const Buttons1 = {
    content: `
      <button type="button" class="custom-button1">Default</button>
    `,
    style: `<style>
      .custom-button1 {
          background-color: #4299e1; /* Blue-700 */
          color: #ffffff; /* White */
          font-size: 0.875rem; /* 14px */
          font-weight: 500; /* Medium */
          border-radius: 0.375rem; /* Rounded-lg */
          padding: 0.625rem 1.25rem; /* px-5 py-2.5 */
          margin-right: 0.5rem; /* me-2 */
          margin-bottom: 0.5rem; /* mb-2 */
          outline: none; /* focus:outline-none */
          border: none; /* No border */
          cursor: pointer; /* Cursor pointer */
      }
      
      .custom-button1:hover {
          background-color: #3182ce; /* Blue-800 */
      }
      
      .custom-button1:focus {
          outline: none;
          box-shadow: 0 0 0 0.1875rem rgba(66, 153, 225, 0.5); /* focus:ring-4 focus:ring-blue-300 */
      }
      
      .custom-button1.dark {
          background-color: #4299e1; /* Blue-600 */
      }
      
      .custom-button1.dark:hover {
          background-color: #3182ce; /* Blue-700 */
      }
      
      .custom-button1.dark:focus {
          box-shadow: 0 0 0 0.1875rem rgba(66, 153, 225, 0.5); /* focus:ring-blue-800 */
      }
    </style>`,
    label: `<i class="fa fa-arrows-h"></i>`,
  };
  

  export const Buttons2 = {
    content: `
      <button type="button" class="custom-button2">Blue</button>
    `,
    style: `<style>
      .custom-button2 {
          background-image: linear-gradient(to right, #3b82f6, #2563eb, #1e40af); /* Blue-500, Blue-600, Blue-700 */
          color: #ffffff; /* White */
          font-size: 0.875rem; /* 14px */
          font-weight: 500; /* Medium */
          border-radius: 0.375rem; /* Rounded-lg */
          padding: 0.625rem 1.25rem; /* px-5 py-2.5 */
          text-align: center; /* Text centered */
          margin-right: 0.5rem; /* me-2 */
          margin-bottom: 0.5rem; /* mb-2 */
          outline: none; /* focus:outline-none */
          border: none; /* No border */
          cursor: pointer; /* Cursor pointer */
      }
      
      .custom-button2:hover {
          background-image: radial-gradient(at bottom right, #3b82f6, #2563eb, #1e40af); /* Blue-500, Blue-600, Blue-700 */
      }
      
      .custom-button2:focus {
          outline: none;
          box-shadow: 0 0 0 0.1875rem rgba(59, 130, 246, 0.5); /* focus:ring-4 focus:ring-blue-300 */
      }
      
      .custom-button2.dark {
          background-image: linear-gradient(to right, #3b82f6, #2563eb, #1e40af); /* Blue-500, Blue-600, Blue-700 */
      }
      
      .custom-button2.dark:hover {
          background-image: radial-gradient(at bottom right, #3b82f6, #2563eb, #1e40af); /* Blue-500, Blue-600, Blue-700 */
      }
    </style>`,
    label: `<i class="fa fa-arrows-h"></i>`,
  };
  

  export const Buttons3 = {
    content: `
      <button class="custom-button3">
        <span class="button-text3">Purple to blue</span>
      </button>
    `,
    style: `<style>
      .custom-button3 {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.125rem; /* p-0.5 */
          margin-bottom: 0.5rem; /* mb-2 */
          margin-right: 0.5rem; /* me-2 */
          overflow: hidden;
          font-size: 0.875rem; /* 14px */
          font-weight: 500; /* Medium */
          color: #4b5563; /* Gray-900 */
          border-radius: 0.375rem; /* Rounded-lg */
          background-image: linear-gradient(to bottom right, #8b5cf6, #3b82f6); /* Purple-600, Blue-500 */
          cursor: pointer;
          outline: none; /* focus:outline-none */
          border: none; /* No border */
      }
      
      .custom-button3:hover .button-text3 {
          color: #ffffff; /* White */
      }
      
      .custom-button3:focus {
          outline: none;
          box-shadow: 0 0 0 0.1875rem rgba(59, 130, 246, 0.5); /* focus:ring-4 focus:ring-blue-300 */
      }
      
      .custom-button3.dark {
          color: #ffffff; /* White */
      }
      
      .custom-button3.dark:hover .button-text3 {
          color: #ffffff; /* White */
      }
      
      .custom-button3.dark:focus {
          box-shadow: 0 0 0 0.1875rem rgba(59, 130, 246, 0.5); /* focus:ring-blue-800 */
      }
      
      .button-text3 {
          position: relative;
          padding: 0.625rem 1.25rem; /* px-5 py-2.5 */
          transition: all 0.15s ease-in; /* transition-all ease-in duration-75 */
          background-color: #ffffff; /* White */
          border-radius: 0.375rem; /* Rounded-md */
      }
      
      .custom-button3.dark .button-text3 {
          background-color: #1f2937; /* Gray-900 */
      }
      
      .button-text3:hover {
          background-color: transparent;
      }
      
      .button-text3.dark {
          background-color: #1f2937; /* Gray-900 */
      }
      
      .group:hover .button-text3 {
          background-color: transparent;
      }
    </style>`,
    label: `<i class="fa fa-arrows-h"></i>`,
  };
  
  export const Buttons4 = {
    content: `
    
<button data-popover-target="popover-company-profile" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Company profile</button>

<div data-popover id="popover-company-profile" role="tooltip" class="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-80 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
    <div class="p-3">
        <div class="flex">
            <div class="me-3 shrink-0">
                <a href="#" class="block p-2 bg-gray-100 rounded-lg dark:bg-gray-700">
                <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite logo">
            </a>
            </div>
            <div>
                <p class="mb-1 text-base font-semibold leading-none text-gray-900 dark:text-white">
                    <a href="#" class="hover:underline">Flowbite</a>
                </p>
                <p class="mb-3 text-sm font-normal">
                    Tech company
                </p>
                <p class="mb-4 text-sm">Open-source library of Tailwind CSS components and Figma design system.</p>
                <ul class="text-sm">
                    <li class="flex items-center mb-2">
                        <span class="me-2 font-semibold text-gray-400">
                            <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                        </span>
                        <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">https://flowbite.com/</a>
                    </li>
                    <li class="flex items-start mb-2">
                        <span class="me-2 font-semibold text-gray-400">
                            <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z"/>
                            </svg>
                        </span>
                        <span class="-mt-1">4,567,346 people like this including 5 of your friends</span>
                    </li>
                </ul>
                <div class="flex mb-3 -space-x-3 rtl:space-x-reverse">
                    <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-5.jpg" alt="">
                    <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-2.jpg" alt="">
                    <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-3.jpg" alt="">
                    <a class="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-400 border-2 border-white rounded-full hover:bg-gray-500 dark:border-gray-800" href="#">+3</a>
                </div>
                <div class="flex">
                    <button type="button" class="inline-flex items-center justify-center w-full px-5 py-2 me-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><svg class="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
    <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
  </svg>Like page</button>
                    <button id="dropdown-button" data-dropdown-toggle="dropdown-menu" data-dropdown-placement="right" class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button"> 
                        <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                        </svg>
                    </button>
                </div>
                <div id="dropdown-menu" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report this page</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Add to favorites</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Block this page</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Invite users</a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div data-popper-arrow></div>
</div>

    `,
    style: `<style>
        </style>`,
    label: `<i class="fa fa-arrows-h"></i>`,
  };
  