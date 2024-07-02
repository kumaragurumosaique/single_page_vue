<template>
    <section id="work">
        <div class="title-word text-center">
          W
        </div>
  <div class="text-center title-content">
    私たちの事業
  </div>
      <div class="container-carousel container-fluid mt-5">
        <!-- <h1>Slick Carousel Center mode</h1> -->
        <div class="slider">
          <div class="slide">
            <div class=" content-flex">
              <div class="content-img w-75">
                <img src="./assets/images/1 copy.jpg" class="work-img" alt="Slide 1">
              </div>
              <div class="content-2 ms-4 w-25  text-dark text-start">
                <h3 class="mt-4 mt-sm-3 mt-md-3">ゴミ処理器の開発</h3>
                <p class="mt-4 mt-sm-3 mt-md-4">
                  ゴミは発展途上国が直面する最大の問題の1つです。野外投棄、焼却、埋め立てなどの既存の廃棄物処理方法はすべて、大きな欠点があることが証明されています。亜臨界水廃棄物処理は、世界の廃棄物処理危機の解決策となる可能性があります。当社は、有機廃棄物、プラスチック廃棄物、医療廃棄物など、あらゆる種類の廃棄物を処理できる機器の開発をしております。処理される廃棄物に応じて、副産物は肥料または燃料として使用できます。
                </p>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class=" content-flex">
              <div class="content-img w-75">
                <img src="./assets/images/リキシャ.jpg" class="work-img auto-img" alt="Slide 1">
              </div>
              <div class="content-2 ms-4 w-25  text-dark text-start">
                <h3 class="mt-4 mt-sm-3 mt-md-3">ハイブリッドリキシャの開発</h3>
                <p class="mt-4 mt-sm-3 mt-md-4">
                    大気汚染の問題を克服するために、私たちは従来の IC エンジン人力車を電動モーターを導入したハイブリッド人力車に改造する取り組みを行っています。
これにより、大気中への二酸化炭素の放出を最小限に抑えることができます。充電ステーションが不足しているため、移動可能な充電ステーションを開発しています。
これらのステーションは IoT 対応ネットワークであり、自動車の所有者が消耗したバッテリーをフル充電されたバッテリー パックと交換するのに役立ちます。
                </p>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class=" content-flex">
              <div class="content-img w-75">
                <img src="./assets/images/iot-img-1.jpg" class="work-img" alt="Slide 1">
              </div>
              <div class="content-2 ms-4 w-25 text-dark text-start">
                <h3 class="mt-4 mt-sm-3 mt-md-3">スマート都市、スマート農業推進</h3>
                <p class="mt-4 mt-sm-3 mt-md-4">
                    IoTなどの革新技術を活用して、農業経営、気候変動（干ばつ、洪水など）、労働者不足、作物栽培のリテラシー、政府の計画など、インドの農家が直面している問題の解決を目指しています。
IoTデバイスとデータ分析は、「節電」「最適な水使用」「水監視システム」「気象データ活用」「ローン監視システム」などに使用されます。
                </p>
              </div>
            </div>
          </div>
           <div class="slide">
            <div class=" content-flex">
              <div class="content-img w-75">
                <img src="./assets/images/robot-arm.png" class="work-img" alt="Slide 1">
              </div>
              <div class="content-2 ms-4 w-25 text-dark text-start">
                <h3 class="mt-4 mt-sm-3 mt-md-3">3Dプリンターを使用した義手の開発</h3>
                <p class="mt-4 mt-sm-3 mt-md-4">
                    IoTなどの革新技術を活用して、農業経営、気候変動（干ばつ、洪水など）、労働者不足、作物栽培のリテラシー、政府の計画など、インドの農家が直面している問題の解決を目指しています。
IoTデバイスとデータ分析は、「節電」「最適な水使用」「水監視システム」「気象データ活用」「ローン監視システム」などに使用されます。
                </p>
              </div>
            </div>
          </div>
          
          <div class="slide">
            <div class=" content-flex">
              <div class="content-img  w-75">
                <img src="./assets/images/5.jpg" class="work-img" alt="Slide 1">
              </div>
              <div class="content-2 ms-4  w-25  text-dark text-start">
                <h3 class="mt-4 mt-sm-3 mt-md-3">日本語教育、キャリア教育</h3>
                <p class="mt-4 mt-sm-3 mt-md-4">
                    日本でキャリアをスタートさせたいと夢見る人たち。日本語が話せるだけでは日本に行って働くことはできないので、私たちは言語とライフスキルの発達とともに技術スキルの向上に真剣に取り組んでいます。
                </p>
              </div>
            </div>
          </div>
          <!-- Add more slides as needed -->
        </div>
      </div>
    </section>
  </template>
  
<script>
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";

export default {
  mounted() {
    this.initializeCarousel();
  },
  methods: {
    initializeCarousel() {
      $(".slider").slick({
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 1,
        speed: 1000,
        focusOnSelect: true,
        prevArrow:
          '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow:
          '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: "0px",
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: "0px",
              slidesToShow: 1,
            },
          },
        ],
      });
    },
  },
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
#work{
    padding: 100px 0;
}
.container-carousel {
  max-width: 1700px;
  margin: 0 auto;
}
.content-flex{
    display: flex;
    flex-direction: row;
}
.content-img{
    width: 100%;
}
.content-2{
    width: 25%;
}

body {
  background-color: grey;
 
}

.slick-center .slide-h3 {
  color: #fff;
}



.slide-h3 {
  margin: 0;
  padding: 0;
  background: #fff;
}
.slide-h3 h3 {
  font-weight: 900;
}
/* .slide-h3 img {
    max-width: 100%;
    height: 100%;
    margin-bottom: 0;
} */

.work-img {
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  height: 100%;
}

.slider div {
  margin-right: 5px;
}

.slick-slide {
  opacity: 0.6;
}

.slick-center {
  opacity: 1;
}

.slick-prev,
.slick-next {
  font-size: 24px !important;
  line-height: 1 !important;
  width: 50px !important;
  height: 50px !important;
  background-color: #333 !important;
  border-radius: 50% !important;
  border: 1px solid #333 !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  color: white !important;
  position: absolute !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  z-index: 1000 !important;
  cursor: pointer !important;
}

.slick-prev {
  left: 30px !important;
}

.slick-next {
  right: 30px !important;
}

.slick-prev:hover,
.slick-next:hover {
  background-color: #555 !important;
  border-color: #555 !important;
}

.slick-prev:before,
.slick-next:before {
  display: none !important;
}

.slick-prev i,
.slick-next i {
  font-size: 20px !important;
}
</style>
