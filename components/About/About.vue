<template>
  <div>
    <section id="about">
      <b-container>
        <b-row>
          <b-col md="8" offset-md="2">
            <div class="heading mb-5">
              <div class="main-heading text-uppercase text-center mt-5 pt-5 mb-5">
                <h2>
                  about
                  <strong>me</strong>
                </h2>
              </div>
              <div class="para text-center mb-5">
                <p>{{ aboutPara }}</p>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4" sm="12" class="mb-5">
            <div>
              <b-card class="card-body text-center hoverable">
                <font-awesome-icon class="card-icon mb-4" :icon="['fas', 'laptop']"/>
                <h5 class="text-uppercase mb-4">Freelancer</h5>
                <p class="card-text">{{ secPara }}</p>
              </b-card>
            </div>
          </b-col>
          <b-col md="4" sm="12" class="mb-5">
            <div>
              <b-card class="card-body text-center hoverable developer">
                <font-awesome-icon class="card-icon mb-4" :icon="['fas', 'code']"/>
                <h5 class="text-uppercase mb-4">Developer</h5>
                <p class="card-text">{{ secPara }}</p>
              </b-card>
            </div>
          </b-col>
          <b-col md="4" sm="12" class="mb-5">
            <div>
              <b-card class="card-body text-center hoverable">
                <font-awesome-icon class="card-icon mb-4" :icon="['fas', 'pencil-alt']"/>
                <h5 class="text-uppercase mb-4">Designer</h5>
                <p class="card-text">{{ secPara }}</p>
              </b-card>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import { aboutPara } from '@/data/index.js'
export default {
  computed: {
    aboutPara() {
      return aboutPara.para
    },
    secPara() {
      return aboutPara.secPara
    }
  }
}
</script>

<style scoped>
.heading .main-heading h2 {
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.2;
}
.card {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border: 0;
  font-weight: 400;
  padding: 10px 10px;
}
.developer {
  background-color: #f7d27e !important;
}
.heading .para p {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  color: #52575be3;
}
.card-body h5 {
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.2;
}
.card-text {
  color: #4f4f4f !important;
  font-weight: 300;
  font-size: 1rem;
}
.card-icon {
  font-size: 3em;
}
.card:hover {
  box-shadow: 0 2px 5px 0 rgba(196, 187, 187, 0.69),
    0 2px 10px 0 rgba(27, 25, 25, 0.78);
  transition: all 0.55s ease-in-out;
}
@media (min-width: 300px) and (max-width: 576px) {
.card-text {
  display: inline !important;
  } 
}
</style>
