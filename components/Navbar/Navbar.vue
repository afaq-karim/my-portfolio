<template>
  <header id="header">
    <b-navbar toggleable="lg" id="navbar" type="dark fixed-top">
      <b-navbar-brand class="ml-4" href="#header">{{ brand }}</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav id="navbar-nav">
          <b-nav-item
            class="nav-item"
            v-for="(item, index) in listItems"
            :href="item.href"
            :key="index"
            >{{ item.link }}</b-nav-item
          >
        </b-navbar-nav>
        <div class="social-links ml-auto nav-icons">
          <div class="social-icons">
            <a
              href="https://www.facebook.com/feeqo.hunza1"
              target="_blank"
              rel="noopener noreferrer"
              ><font-awesome-icon :icon="['fab', 'facebook-f']"
            /></a>
          </div>
          <div class="social-icons">
            <a
              href="http://twitter.com/karim_afaq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
          </div>
          <div class="social-icons">
            <a
              href="http://instagram.com/ak.hunzai"
              target="_blank"
              rel="noopener noreferrer"
              ><font-awesome-icon :icon="['fab', 'instagram']"
            /></a>
          </div>
        </div>
      </b-collapse>
    </b-navbar>
  </header>
</template>
<script>
export default {
  data() {
    return {
      brand: 'AK',
      listItems: [
        {
          link: 'Home',
          href: '#slider'
        },
        {
          link: 'About',
          href: '#about'
        },
        {
          link: 'Works',
          href: '#project'
        },
        {
          link: 'Contact',
          href: '#contact'
        }
      ]
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
.social-links {
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
.social-icons a {
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
