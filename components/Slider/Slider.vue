<template>
  <div>
    <section id="slider">
      <Snowf
        :amount="200"
        :size="4"
        :speed="1.5"
        :wind="0"
        :opacity="0.8"
        :swing="1"
        :image="null"
        :zIndex="null"
        :resize="true"
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
                </h2>
              </div>
            </div>
          </b-col>
          <b-col md="6">
            <div class="paragraph text-center mt-5">
              <h5 class="developer-mark">Web Developer & Web Designer</h5>
            </div>
            <div class="chevron mt-5">
              <a href="#about">
                <div class="icon">
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
html {
  scroll-behavior: smooth;
}
#slider {
  margin-top: 57px;
  background-image: url('https://mdbootstrap.com/img/Photos/Others/forest1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  z-index: 0;
  height: 600px;
}
.name-text .heading h2 {
  margin-top: 3rem;
  font-size: 5.5rem;
  font-weight: 300;
  line-height: 1.2;
  color: #464646;
}
.paragraph h5 {
  font-weight: 700;
  font-size: 1.25rem;
  padding: 0.4rem 0;
  text-transform: uppercase;
  background-color: rgba(248, 192, 67, 0.7);
}
.chevron {
  width: 47px;
  height: 47px;
  margin: auto;
  background-color: #464646;
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: 50%;
  padding: 0;
  cursor: pointer;
  text-align: center;
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
    font-size: 2.5rem;
  }
}
</style>
