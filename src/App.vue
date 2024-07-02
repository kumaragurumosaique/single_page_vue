<template>
  <div id="app">
    <MenuBar />
    <HomeSection />
    <VisionSection />
    <SlickCarousel />
    <TeamSection />
    <AboutSection />
    <AppFooter />
  </div>
</template>

<script>
import SlickCarousel from './views/WorkSection.vue';
import MenuBar from './components/MenuBar.vue';
import HomeSection from './views/HomeSection.vue';
import VisionSection from './views/VisionSection.vue';
import TeamSection from './views/TeamSection.vue'
import AboutSection from './views/AboutSection.vue'
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    MenuBar,
    HomeSection,
    VisionSection,
    SlickCarousel,
    TeamSection,
    AboutSection,
    AppFooter
  }
};
</script>

<style>
@import '~slick-carousel/slick/slick.css';
@import '~slick-carousel/slick/slick-theme.css';
</style>
