<template>
  <div>
    <section id="quote" class="mt-5 mb-5">
      <b-container>
        <b-row>
          <div class="quotes align-center text-center mt-5">
            <h2 class="mt-5 pt-5">
              <font-awesome-icon class="mr-2" :icon="['fas', 'quote-left']"/>Design is not
              just what it looks like and feels like. Design is how it works.
              <font-awesome-icon :icon="['fas', 'quote-right']"/>
            </h2>
            <h5 class="author mt-5">~Steve Jobs</h5>
          </div>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<script>
export default {}
</script>

<style>
.html {
  scroll-behavior: smooth;
}
#quote {
  background: linear-gradient(rgba(63, 81, 181, 0.7), rgba(63, 81, 181, 0.7)),
    url('../../assets/images/w3.jpg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 400px;
  color: #fff;
}
.quotes h2 {
  font-weight: 300;
  font-size: 2rem;
  line-height: 1.2;
}
.quotes h5 {
  font-weight: 300;
  font-size: 1.25rem;
  line-height: 1.2;
  font-style: italic !important;
}
</style>
