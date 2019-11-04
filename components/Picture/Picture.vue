<template>
  <b-container>
    <b-row no-gutters>
      <b-col xs="12" class="mb-5">
        <vue-picture-swipe :items="items"></vue-picture-swipe>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          src: '/img63(1).jpg',
          thumbnail: '/img63(1).jpg',
          w: 1200,
          h: 900
        },
        {
          id: 2,
          src: '/img66(1).jpg',
          thumbnail: '/img66(1).jpg',
          w: 1200,
          h: 900
        },
        {
          id: 3,
          src: '/img65(1).jpg',
          thumbnail: '/img65(1).jpg',
          w: 1200,
          h: 900
        },
        {
          id: 4,
          src: '/img67(1).jpg',
          thumbnail: '/img67(1).jpg',
          w: 1200,
          h: 900
        },
        {
          id: 5,
          src: '/img68(1).jpg',
          thumbnail: '/img68(1).jpg',
          w: 1200,
          h: 900
        },
        {
          id: 6,
          src: '/img64(1).jpg',
          thumbnail: '/img64(1).jpg',
          w: 1200,
          h: 900
        },
        {
          id: 7,
          src: '/img69(1).jpg',
          thumbnail: '/img69(1).jpg',
          w: 1200,
          h: 900
        },
        {
          id: 8,
          src: '/img59(1).jpg',
          thumbnail: '/img59.jpg',
          w: 1200,
          h: 900
        },
        {
          id: 9,
          src: '/img70(1).jpg',
          thumbnail: '/img70(1).jpg',
          w: 1200,
          h: 900
        }
      ]
    }
  }
}
</script>
<style>
img {
  max-width: 100% !important;
  height: auto !important;
  vertical-align: super !important;
  flex: 33.333333%;
  width: 32.333333%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important;
  cursor: zoom-in !important;
}
a:hover {
  opacity: .8 !important;
  transition: opacity 0.4s !important;
}
@media (min-width: 325px) and (max-width: 576px) {
  img {
    width: auto;
  }
}
</style>
