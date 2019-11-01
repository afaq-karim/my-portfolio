<template>
  <div>
    <section id="slider">
<<<<<<< HEAD
      <Snowf
        :amount="200"
        :size="4"
        :speed="1.5"
        :wind="0"
        :opacity="0.8"
        :swing="1"
        :image="null"
        :zIndex="null"
        :resize="null"
        color="#fff"
      />
      <b-container>
        <b-row class="justify-content-center">
          <b-col md="12" xs="12">
            <div class="name-text mt-5">
              <div class="heading text-center pt-5">
                <h2>
                  <vue-typer
                    text="I am Afaq Karim"
                    erase-style="backspace"
                    caret-animation="smooth"
                    :type-delay="100"
                    :pre-type-delay="100"
                  ></vue-typer>
=======
      <b-container>
        <b-row align-v="center">
          <b-col md="12">
            <div class="name-text mt-5">
              <div class="heading text-center pt-5">
                <h2>
                  I am
                  <span>Afaq Karim</span>
>>>>>>> 9e40c6fa72ad751db32cc143e78559749cebd3aa
                </h2>
              </div>
            </div>
          </b-col>
<<<<<<< HEAD
          <b-col md="6">
            <div class="paragraph text-center mt-5">
              <h5 class="developer-mark">Web Developer & Web Designer</h5>
            </div>
            <div class="chevron mt-5">
              <a href="#about">
                <div class="icon">
=======
          <b-col md="6" offset-md="3">
            <div class="paragraph text-center mt-5">
              <h5 class="developer-mark">Web Developer & Graphic Designer</h5>
            </div>
            <div class="chevron mt-5">
              <a href="#about">
                <div class="icon" href="#about">
>>>>>>> 9e40c6fa72ad751db32cc143e78559749cebd3aa
                  <font-awesome-icon :icon="['fas', 'angle-down']"/>
                </div>
              </a>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
<<<<<<< HEAD
import Snowf from 'vue-snowf'
import { VueTyper } from 'vue-typer'

export default {
  components: {
    Snowf,
    VueTyper
  }
}
</script>

<style>
=======
export default {}
</script>

<style scoped>
>>>>>>> 9e40c6fa72ad751db32cc143e78559749cebd3aa
html {
  scroll-behavior: smooth;
}
#slider {
  margin-top: 57px;
<<<<<<< HEAD
  background-image: url(../../assets/images/forest1.jpg);
=======
  background-image: url('../../assets/images/forest1.jpg');
>>>>>>> 9e40c6fa72ad751db32cc143e78559749cebd3aa
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  z-index: 0;
  height: 600px;
<<<<<<< HEAD
=======
  background-blend-mode: color;
  background-color: rgba(255, 255, 255, 0.67) !important;
>>>>>>> 9e40c6fa72ad751db32cc143e78559749cebd3aa
}
.name-text .heading h2 {
  margin-top: 3rem;
  font-size: 5.5rem;
  font-weight: 300;
  line-height: 1.2;
  color: #464646;
}
<<<<<<< HEAD
.paragraph h5 {
  font-weight: 700;
  font-size: 1.25rem;
  padding: 0.4rem 0;
=======
.name-text .heading span {
  font-weight: 400;
}
.paragraph h5 {
  font-weight: 700;
  font-size: 1.25rem;
  padding: 0.4rem 0rem;
>>>>>>> 9e40c6fa72ad751db32cc143e78559749cebd3aa
  text-transform: uppercase;
  background-color: rgba(248, 192, 67, 0.7);
}
.chevron {
  width: 47px;
  height: 47px;
<<<<<<< HEAD
  margin: auto;
=======
>>>>>>> 9e40c6fa72ad751db32cc143e78559749cebd3aa
  background-color: #464646;
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: 50%;
  padding: 0;
  cursor: pointer;
<<<<<<< HEAD
  text-align: center;
=======
  margin-left: 240px;
>>>>>>> 9e40c6fa72ad751db32cc143e78559749cebd3aa
}
.chevron:hover {
  transition: 0.7s ease-in-out;
  background-color: #343435;
}
.chevron a {
  color: #fff;
  visibility: visible;
  animation-name: fadeIn;
  animation-delay: 0.4s;
}
.chevron .icon {
  line-height: 47px;
  text-align: center;
  color: #fff;
}
<<<<<<< HEAD
.vue-typer .custom.char.typed {
  color: #464646;
}
@media (min-width: 350px) and (max-width: 768px) {
  #slider {
    height: 500px;
    margin-top: 30px;
  }
  #slider .name-text {
    margin-top: 2rem !important;
  }
  #slider .name-text .heading h2 {
    margin-top: 0 !important;
    font-size: 3rem;
  }
}
=======
>>>>>>> 9e40c6fa72ad751db32cc143e78559749cebd3aa
</style>
