<template>
  <div>
    <Navbar/>
    <Slider/>
    <About/>
    <Skills/>
    <Creating/>
    <Quote/>
    <Project/>
    <Picture/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar/Navbar.vue'
import Slider from '~/components/Slider/Slider.vue'
import About from '~/components/About/About.vue'
import Skills from '~/components/Skills/Skills.vue'
import Creating from '~/components/Creating/Creating.vue'
import Quote from '~/components/Quote/Quote.vue'
import Project from '~/components/Project/Project.vue'
import Picture from '~/components/Picture/Picture.vue'
import Contact from '~/components/Contact/Contact.vue'
import Footer from '~/components/Footer/Footer.vue'
export default {
  components: {
    Navbar,
    Slider,
    About,
    Skills,
    Creating,
    Quote,
    Project,
    Picture,
    Contact,
    Footer
  }
}
</script>

<style>
<<<<<<< HEAD
html{
  scroll-behavior: smooth;
}
=======
>>>>>>> 9e40c6fa72ad751db32cc143e78559749cebd3aa
</style>
