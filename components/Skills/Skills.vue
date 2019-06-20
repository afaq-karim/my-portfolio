<template>
  <div>
    <section id="skills">
      <b-container>
        <b-row>
          <b-col md="6" sm="12">
            <div class="my-experience mt-5 mb-5 ml-2">
              <div class="heading pt-5 text-uppercase">
                <h4>
                  My
                  <strong>experience</strong>
                </h4>
              </div>
              <div class="details mt-5">
                <div class="row">
                  <font-awesome-icon class="mb-1 mr-3 ml-3" :icon="['fas', 'briefcase']"/>
                  <h5 class="mb-3">Senior Developer</h5>
                </div>
                <strong class="ml-1 mb-2 dark-grey-text">Febuary, 2017 - Present (2 years)</strong>
                <p
                  class="mb-0 ml-1 grey-text"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div class="details mt-5">
                <div class="row">
                  <font-awesome-icon class="mb-1 mr-3 ml-3" :icon="['fas', 'briefcase']"/>
                  <h5 class="mb-3">Javascript Developer</h5>
                </div>
                <strong class="ml-1 mb-2 dark-grey-text">March 2018 - May 2019 - (1 year 2 Month)</strong>
                <p
                  class="mb-0 ml-1 grey-text"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia, dolore voluptas animi hic possimus.</p>
              </div>
              <div class="details mt-5">
                <div class="row">
                  <font-awesome-icon class="mb-1 mr-3 ml-3" :icon="['fas', 'briefcase']"/>
                  <h5 class="mb-3">Web Developer</h5>
                </div>
                <strong class="ml-1 mb-2 dark-grey-text">Febuary, 2015 - Present (4 years)</strong>
                <p
                  class="mb-0 ml-1 grey-text"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </b-col>
          <b-col md="6" sm="12">
            <div class="my-skills mt-5 mb-5">
              <div class="heading pt-5 mb-5 pb-3 text-uppercase">
                <h4>
                  Development
                  <strong>skills</strong>
                </h4>
                <div class="develop">
                  <p class="mb-3">Javascript</p>
                  <b-progress height="4px" :value="70"></b-progress>
                </div>
                <div class="develop">
                  <p class="mb-3">CSS3</p>
                  <b-progress height="4px" :value="80"></b-progress>
                </div>
                <div class="develop">
                  <p class="mb-3">HTML5</p>
                  <b-progress height="4px" :value="90"></b-progress>
                </div>
                <div class="develop">
                  <p class="mb-3">Bootstrap</p>
                  <b-progress height="4px" :value="60"></b-progress>
                </div>
                <div class="develop">
                  <p class="mb-3">Vue JS</p>
                  <b-progress height="4px" :value="50"></b-progress>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 90
    }
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
#skills {
  background-color: #f3f3f5;
  margin-top: 6rem;
}
.heading h4 {
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.2;
  color: #212529;
}
.headeing strong {
  font-weight: 400;
}
.details {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-left: 3px solid #fb3 !important;
}
.details h5 {
  font-weight: 700;
  line-height: 1.2;
}
.details .dark-grey-text {
  font-size: 0.9rem;
  color: #464646 !important;
  font-weight: 700;
}
.details .grey-text {
  color: #807d7d !important;
  line-height: 1.5;
  font-weight: 300;
  font-size: 0.9rem;
}
.develop {
  margin-top: 2.5rem;
}
.develop p {
  font-weight: 700;
  color: #000;
  text-transform: uppercase;
  font-size: 1rem;
}
.progress-bar {
  background-color: #facc62 !important;
}
.my-skills {
  margin-left: 30px;
}
</style>
