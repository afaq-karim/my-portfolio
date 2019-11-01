<template>
  <header id="header">
    <b-navbar toggleable="lg" id="navbar" type="dark fixed-top">
      <b-navbar-brand class="ml-4" href="#header">{{ brand }}</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav id="navbar-nav">
          <b-nav-item class="nav-item" href="#slider">{{listItems[0]}}</b-nav-item>
          <b-nav-item class="nav-item" href="#about">{{listItems[1]}}</b-nav-item>
          <b-nav-item class="nav-item" href="#skills">{{listItems[2]}}</b-nav-item>
          <b-nav-item class="nav-item" href="#project">{{listItems[3]}}</b-nav-item>
          <b-nav-item class="nav-item" href="#contact">{{listItems[4]}}</b-nav-item>
        </b-navbar-nav>
        <b-nav-item class="ml-auto nav-icons">
          <div class="social-links">
            <div class="social-icons">
              <a target="_blank" href="#"><font-awesome-icon :icon="['fab', 'facebook-f']"/></a>
            </div>
            <div class="social-icons">
              <a target="_blank" href="#"><font-awesome-icon :icon="['fab', 'twitter']"/></a>
            </div>
            <div class="social-icons">
              <a target="_blank" href="#"><font-awesome-icon :icon="['fab', 'instagram']"/></a>
            </div>
          </div>
        </b-nav-item>
      </b-collapse>
    </b-navbar>
  </header>
</template>
<script>
import { listItems, brand } from '@/data/index.js'
export default {
  computed: {
    brand() {
      return brand.name
    },
    listItems() {
      return listItems.navbar
    }
  }
}
</script>
<style>
html {
  scroll-behavior: smooth;
}
#navbar {
  background-color: #444;
  padding: 12px 0px;
}
#navbar-nav {
  color: #fff !important;
  margin-left: 80px;
}
.nav-item {
  padding-right: 0.4rem;
  padding-left: 0.4rem;
}
.nav-icons {
  list-style-type: none;
}
.navbar-dark .navbar-nav .nav-link {
  color: #fff !important;
  font-size: 1rem !important;
  font-weight: 400 !important;
  line-height: 1.5 !important;
}
.navbar-dark .navbar-nav .nav-link:hover {
  color: #ccc !important;
  transition: 0.3s ease-in-out !important;
}
.social-links{
  display: flex;
  margin-right: 90px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #fff !important;
}
.social-icons {
  padding: 0px 10px;
}
.social-icons a{
  color: #fff;
}
.social-icons a:hover {
  color: #ccc;
  transition: 0.3s ease-in-out;
}
@media (min-width: 300px) and (max-width: 576px) {
#navbar-nav {
  margin-left: 20px;
  }
}
</style>
