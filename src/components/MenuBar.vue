<template>
    <div>
      <div class="container-fluid menu">
        <nav class="navbar navbar-expand-lg my-navbar">
          <a class="navbar-brand" href="#">Mosaique</a>
          <button class="navbar-toggler" type="button" @click="toggleNavbar" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" @click="scrollTo('home')" >  Home</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  aria-current="page"
                  href="#vision"
                  @click="scrollTo('vision')"
                >Vision</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  aria-current="page"
                  href="#work"
                  @click="scrollTo('work')"
                >Work</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  aria-current="page"
                  href="#team"
                  @click="scrollTo('team')"
                >Team</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  aria-current="page"
                  href="#about"
                  @click="scrollTo('about')"
                >About</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </template>
  
  <script>
  import $ from 'jquery';
  import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure Bootstrap's JS is included
  
  export default {
    mounted() {
      this.initializeJQuery();
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      initializeJQuery() {
        $(window).scroll(() => {
          if ($(window).scrollTop() > 60) {
            $('.my-navbar').addClass('navbar-scroll');
          } else {
            $('.my-navbar').removeClass('navbar-scroll');
          }
        });
  
        // Close the navbar when a link is clicked
        // $('.navbar-nav .nav-link').on('click', function () {
        //   $('.navbar-collapse').collapse('hide');
        // });
      },
      scrollTo(section) {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      },
      toggleNavbar() {
      const navbarCollapse = document.getElementById('navbarNavDropdown');
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      } else {
        navbarCollapse.classList.add('show');
      }
    } ,
      handleScroll() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        const scrollPosition = window.scrollY;
        sections.forEach((section, index) => {
          if (
            section.offsetTop <= scrollPosition + 50 &&
            section.offsetTop + section.offsetHeight > scrollPosition + 50
          ) {
            navLinks.forEach((navLink) => {
              navLink.classList.remove('active');
            });
            navLinks[index].classList.add('active');
          }
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .nav-link.active {
    color: #ff0000;
    font-weight: 500;
    /* Change the color to your desired color */
  }
  
  body {
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  
  .menu {
    position: relative;
    width: 100%;
    z-index: 9999;
  }
  
  .my-navbar {
    width: 100%;
    padding: 0px 20px;
    position: absolute;
    top: 20px;
    left: 0;
    z-index: 999;
    /* box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.2); */
    transition: background-color 0.5s;
  }
  
  .navbar-scroll {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: yellow !important;
    padding: 5px 20px;
    transition: 0.5s;
    animation: scroll 0.6s 1;
  }
  
  .nav-item .nav-link {
    font-family: 'Oswald', sans-serif;
    font-size: 15px;
    font-weight: 800;
    text-transform: uppercase;
    margin: 0px 10px;
    position: relative;
    color: black;
  }
  
  .nav-item .nav-link:before {
    position: absolute;
    left: 0;
    content: "";
    bottom: 0;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transform-origin: left;
    background-color: brown;
    transition: 0.5s;
  }
  
  .nav-item .nav-link:hover:before {
    transform: scaleX(1);
    transform-origin: right;
  }
  
  .navbar-brand {
    text-transform: capitalize;
    font-size: 35px;
    color: #2f3542;
    font-style: italic;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
  }
  
  @keyframes scroll {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0%);
    }
  }
  </style>
  