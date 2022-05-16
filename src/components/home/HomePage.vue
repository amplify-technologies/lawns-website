<template>
  <div>

    <landing-page />

    <features-page />

    <pricing-page />

  </div>
</template>

<script>
import FeaturesPage from './FeaturesPage.vue'
import LandingPage from './LandingPage.vue'
import PricingPage from './PricingPage.vue'
export default {

  components: {
    LandingPage,
    FeaturesPage,
    PricingPage
  }

}
</script>
