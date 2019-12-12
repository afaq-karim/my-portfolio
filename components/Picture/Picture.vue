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
          src: 'https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(63).jpg',
          alt: 'recent projects',
          thumbnail: 'https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(63).jpg',
          w: 1600,
          h: 1067
        },
        {
          id: 2,
          src: 'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(66).jpg',
          alt: 'recent projects',
          thumbnail: 'https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(66).jpg',
          w: 1600,
          h: 1067
        },
        {
          id: 3,
          src: 'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(65).jpg',
          alt: 'recent projects',
          thumbnail: 'https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(65).jpg',
          w: 1600,
          h: 1067
        },
        {
          id: 4,
          src: 'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(67).jpg',
          alt: 'recent projects',
          thumbnail: 'https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg',
          w: 1600,
          h: 1067
        },
        {
          id: 5,
          src: 'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(68).jpg',
          alt: 'recent projects',
          thumbnail: 'https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(68).jpg',
          w: 1600,
          h: 1067
        },
        {
          id: 6,
          src: 'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(64).jpg',
          alt: 'recent projects',
          thumbnail: 'https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(64).jpg',
          w: 1600,
          h: 1067
        },
        {
          id: 7,
          src: 'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(69).jpg',
          alt: 'recent projects',
          thumbnail: 'https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(69).jpg',
          w: 1600,
          h: 1067
        },
        {
          id: 8,
          src: 'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(59).jpg',
          alt: 'recent projects',
          thumbnail: 'https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(59).jpg',
          w: 1600,
          h: 1067
        },
        {
          id: 9,
          src: 'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(70).jpg',
          alt: 'recent projects',
          thumbnail: 'https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(70).jpg',
          w: 1600,
          h: 1067
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
