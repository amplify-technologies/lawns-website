<template>
  <div>

    <landing-page />

    <features-page />

  </div>
</template>

<script>
import FeaturesPage from './FeaturesPage.vue'
import LandingPage from './LandingPage.vue'
export default {

  components: {
    LandingPage,
    FeaturesPage
  }

}
</script>
