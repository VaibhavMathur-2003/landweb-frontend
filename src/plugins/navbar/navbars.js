export const navbar1 = {
  content: `
      <div class="app-bar">
        <div class="menu-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="white" d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zm0-5v2h18V8H3zm0-3h18V3H3v2z" />
          </svg>
        </div>
        <nav class="nav-items">
          <a href="#" class="nav-item logo">LOGO</a>
          <a href="#" class="nav-item">Products</a>
          <a href="#" class="nav-item">Pricing</a>
          <a href="#" class="nav-item">Blog</a>
        </nav>
        <div class="avatar">
          <img src="/static/images/avatar/2.jpg" alt="Avatar" width="40" height="40">
        </div>
      </div>
    `,
  style: `<style>
      body {
        margin: 0;
        font-family: 'Arial', sans-serif;
      }
  
      .app-bar {
        display: flex;
        background-color: #2196f3; /* Material UI's primary color */
        color: white;
        padding: 10px 20px;
      }
  
      .logo {
        font-size: 20px;
        font-weight: bold;
        text-decoration: none;
        color: inherit;
      }
  
      .menu-icon {
        display: none; /* Hidden on desktop */
      }
  
      .nav-items {
        display: flex;
        gap: 20px;
      }
  
      .nav-item {
        text-decoration: none;
        color: inherit;
        padding: 10px;
        border-radius: 5px;
        transition: background-color 0.3s;
      }
  
      .nav-item:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
  
      .avatar {
        cursor: pointer;
        margin-left: auto; /* Pushes the avatar to the right */
      }
  
      /* Media query for responsive design */
      @media only screen and (max-width: 768px) {
        .logo {
          display: none; /* Hidden on mobile */
        }
        
        .menu-icon {
          display: block; /* Displayed on mobile */
          cursor: pointer;
        }
  
        .nav-items {
          display: none; /* Hidden on mobile */
          flex-direction: column;
          position: absolute;
          top: 70px;
          left: 20px;
          background-color: #2196f3; /* Material UI's primary color */
          padding: 10px;
          border-radius: 5px;
        }
  
        .nav-items.active {
          display: flex; /* Displayed when active */
        }
  
        .nav-item {
          width: 100%;
          text-align: center;
        }
      }
    </style>`,
  label: `<i class="fa fa-arrows-h"></i>`,
};

export const navbar2 = {
  content: `
  <nav class="bg-gray-800">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
   
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
 
          <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span class="absolute -inset-1.5"></span>
          <span class="sr-only">View notifications</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button>

        <div class="relative ml-3">
          <div>
            <button type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">Open user menu</span>
              <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            </button>
          </div>

        
        </div>
      </div>
    </div>
  </div>

  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
    </div>
  </div>
</nav>
`,
  style: `
      <style>
      </style>
    `,
  label: `<i class="fa fa-arrows-h"></i>`,
};

export const navbar3 = {
  content: `
  <header>
    <nav>
      <div class="logo">
        <a href="#">Logo</a>
      </div>
      <label for="menu-toggle" class="menu-icon">&#9776;</label>
      <ul class="nav-links">
        <li><a href="#">Inspiration</a>
          <ul class="sub-menu">
            <li><a href="#">Explore Design Work</a></li>
            <li><a href="#">New &amp; Noteworthy</a></li>
          </ul>
        </li>
        <li><a href="#">Find Work</a>
          <ul class="sub-menu">
            <li><a href="#">Job Board</a></li>
            <li><a href="#">Freelance Projects</a></li>
          </ul>
        </li>
        <li><a href="#">Learn Design</a></li>
        <li><a href="#">Hire Designers</a></li>
      </ul>
      <div class="auth-buttons">
        <a href="#" class="sign-in">Sign In</a>
        <a href="#" class="sign-up">Sign Up</a>
      </div>
    </nav>
  </header>
  `,
  style: `<style>
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
  
  header {
    background-color: #ffffff;
    padding: 20px;
    border-bottom: 1px solid #ccc;
  }
  
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    text-align: center;
  }
  
  .logo a {
    text-decoration: none;
    color: #000000;
    font-size: 20px;
    font-weight: bold;
  }
  
  .menu-icon {
    display: none;
    cursor: pointer;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0px;
  }
  
  .nav-links li {
    position: relative;
  }
  
  .nav-links li a {
    text-decoration: none;
    color: #000000;
    padding: 10px 20px;
    display: block;
  }
  
  .sub-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #ffffff;
    border: 1px solid #ccc;
    display: none;
  }
  
  .nav-links li:hover .sub-menu {
    display: block;
  }
  
  .sub-menu li {
    width: 200px;
  }
  
  .auth-buttons a {
    text-decoration: none;
    color: #000000;
    margin-left: 20px;
    padding: 10px 20px;
    border: 1px solid #000000;
  }
  
  .auth-buttons a.sign-up {
    background-color: #ff69b4;
    color: #ffffff;
  }
  
  .auth-buttons a:hover {
    background-color: #000000;
    color: #ffffff;
  }
  
  /* Media Queries */
  @media only screen and (max-width: 768px) {
    .nav-links {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: #ffffff;
      border: 1px solid #ccc;
      padding: 10px 0;
    }
  
    .nav-links li {
      width: 100%;
      text-align: center;
    }
  
    .nav-links li:hover .sub-menu {
      display: none;
    }
  
    .menu-icon {
      display: block;
    }
  
    #menu-toggle {
      display: none;
    }
  
    #menu-toggle:checked ~ .nav-links {
      display: flex;
    }
  
    .logo {
      text-align: center;
      order: 1;
    }
  }
      </style>`,
  label: `<i class="fa fa-arrows-h"></i>`,
};

export const navbar4 = {
  content: `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>  `,
  style: `<style>
  
  </style>`,
  label: `<i class="fa fa-arrows-h"></i>`,
};
