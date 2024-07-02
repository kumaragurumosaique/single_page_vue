<template>
    <div>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./assets/images/リキシャ.jpg" class="d-block w-100 slider-img" alt="...">
            <div class="carousel-caption d-block d-md-block"> <!-- Centered caption -->
              <h2 class="slider-en">Green Rickshaw. Greener Tomorrow.</h2>
              <h3 class="slider-jp">環境を考慮した新しいハイブリッドシステムの開発<br>緑のある明日へ</h3>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./assets/images/2.jpg" class="d-block w-100 slider-img" alt="...">
            <div class="carousel-caption d-block d-md-block"> <!-- Centered caption -->
              <h2 class="slider-en">Aiming to create a beautiful city</h2>
              <h3 class="slider-jp">きれいな街づくりを目指す</h3>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./assets/images/iot-slider.jpg" class="d-block w-100 slider-img" alt="...">
            <div class="carousel-caption d-block d-md-block"> <!-- Centered caption -->
              <h2 class="slider-en">Smart Firm</h2>
              <h3 class="slider-jp">未来のスマート農業</h3>
            </div>
          </div>
          <div class="carousel-item overlay" style="background: rgba(0, 0, 0, 0.2);">
            <img src="./assets/images/6.jpg" class="d-block w-100 slider-img" alt="...">
            <div class="carousel-caption d-block d-md-block"> <!-- Centered caption -->
              <h2 class="slider-en">Life and technology on IoT</h2>
              <h3 class="slider-jp">新しい暮らし作りのために<br>繋がる技術</h3>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeSection',
  }
  </script>
  
  <style scoped>
  .slider-img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }
  
  .carousel-caption {
    position: absolute;
    top: 55%; /* Align to the vertical center */
    left: 50%; /* Align to the horizontal center */
    transform: translate(-50%, -50%);
    text-align: center; /* Ensure text alignment */
    padding: 20px; /* Optional: Add padding */
    width:50%;
  }
  .overlay {
      position: relative; /* Ensure relative positioning for overlay */
    }
    .overlay::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.2); /* Semi-transparent black overlay */
    }
    .carousel-control-prev,
  .carousel-control-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5); /* Background color */
    width: 50px; /* Width of the button */
    height: 50px; /* Height of the button */
    border-radius: 50%; /* Make it round */
    border: none;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .carousel-control-prev:hover,
  .carousel-control-next:hover {
    background-color: rgba(0, 0, 0, 0.8); /* Darken background on hover */
  }
  
  .carousel-control-prev .fas,
  .carousel-control-next .fas {
    font-size: 20px; /* Adjust icon size */
  }
  
   
  </style>
  