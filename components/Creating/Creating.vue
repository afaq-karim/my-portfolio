<template>
  <div>
    <section id="creating" class="mt-5 pt-5 mb-5 pb-5">
      <b-container>
        <b-row>
          <b-col md="8" offset-md="2">
            <div class="heading">
              <h2 class="mb-5">
                Process of
                <strong>creating</strong>
              </h2>
              <p>{{ mainText }}</p>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <div class="nav-tabs mt-5">
              <b-card no-body>
                <b-tabs pills card class="tab-background">
                  <b-tab title="01. Research">
                    <b-card-text class="tab-text">
                      <font-awesome-icon class="ml-4 mr-5 tab-icon" :icon="['fas', 'search']"/>
                      {{ TabText }}
                    </b-card-text>
                  </b-tab>
                  <b-tab title="02. Design" active>
                    <b-card-text class="tab-text">
                      <font-awesome-icon class="ml-4 mr-5 tab-icon" :icon="['fas', 'pencil-alt']"/>
                      {{ TabText }}
                    </b-card-text>
                  </b-tab>
                  <b-tab title="03. Development">
                    <b-card-text class="tab-text">
                      <font-awesome-icon class="ml-4 mr-5 tab-icon" :icon="['fas', 'code']"/>
                      {{ TabText }}
                    </b-card-text>
                  </b-tab>
                </b-tabs>
              </b-card>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import { TabText } from '@/data/index.js'
export default {
  computed: {
    TabText() {
      return TabText.text
    },
    mainText() {
      return TabText.mainText
    }
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
#creating .heading h2 {
  text-transform: uppercase;
  text-align: center;
  font-weight: 300;
  font-size: 2rem;
}
#creating .heading p {
  font-weight: 300;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5;
  color: #212529;
}
.card-header {
  background-color: #4f66a7;
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 0.25rem;
  padding: 0.7rem;
  margin-left: 0.7rem;
  margin-right: 0.7rem;
  margin-bottom: -20px;
  z-index: 1;
  position: relative;
}
.card-header:first-child {
  border-radius: 0.25rem;
}
.card {
  border: none;
  box-shadow: none;
}
.card:hover {
  border: none;
  box-shadow: none;
}
.tab-content {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border: 0;
  border-radius: 0.25rem;
  font-weight: 400;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 2.5rem;
  padding-bottom: 1.8rem;
}
.nav-tabs .nav-item {
  padding-left: 5rem;
  padding-right: 5rem;
}
.tab-content:hover {
  box-shadow: 0 2px 5px 0 rgba(196, 187, 187, 0.69),
    0 2px 10px 0 rgba(27, 25, 25, 0.78);
  transition: all 0.55s ease-in-out;
}
.tab-text {
  display: flex;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.5;
  color: #212529c9;
}
.card-header-pills {
  margin-left: 3rem;
  /* margin-right: 0rem; */
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  transition: all 0.7s;
  padding-left: 5rem;
  padding-right: 5rem; 
  border-radius: 0.25rem;
  border: none;
}
.nav-pills .nav-link,
.nav-pills .show > .nav-link {
  color: #fff;
}
.nav-tabs .nav-link:hover,
.nav-tabs .nav-link:focus {
  border-color: #4f66a7;
  outline: none;
}
.tab-content > .active {
  outline: none;
}
.tab-icon {
  font-size: 3rem;
  color: #9e9e9e;
}
</style>
