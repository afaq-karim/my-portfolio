<template>
  <div>
    <section id="slider">
      <b-container>
        <b-row align-v="center">
          <b-col md="12">
            <div class="name-text mt-5">
              <div class="heading text-center pt-5">
                <h2>
                  I am
                  <span>Afaq Karim</span>
                </h2>
              </div>
            </div>
          </b-col>
          <b-col md="6" offset-md="3">
            <div class="paragraph text-center mt-5">
              <h5 class="developer-mark">Web Developer & Graphic Designer</h5>
            </div>
            <div class="chevron mt-5">
              <a href="#about">
                <div class="icon" href="#about">
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
export default {}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
#slider {
  margin-top: 57px;
  background-image: url('../../assets/images/forest1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  z-index: 0;
  height: 600px;
  background-blend-mode: color;
  background-color: rgba(255, 255, 255, 0.67) !important;
}
.name-text .heading h2 {
  margin-top: 3rem;
  font-size: 5.5rem;
  font-weight: 300;
  line-height: 1.2;
  color: #464646;
}
.name-text .heading span {
  font-weight: 400;
}
.paragraph h5 {
  font-weight: 700;
  font-size: 1.25rem;
  padding: 0.4rem 0rem;
  text-transform: uppercase;
  background-color: rgba(248, 192, 67, 0.7);
}
.chevron {
  width: 47px;
  height: 47px;
  background-color: #464646;
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: 50%;
  padding: 0;
  cursor: pointer;
  margin-left: 240px;
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
</style>
