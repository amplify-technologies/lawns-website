<template>
  <div>

    <landing-page />

    <features-page />

    <pricing-page />

    <bookkeeping-page />

  </div>
</template>

<script>
import BookkeepingPage from './BookkeepingPage.vue'
import FeaturesPage from './FeaturesPage.vue'
import LandingPage from './LandingPage.vue'
import PricingPage from './PricingPage.vue'
export default {

  components: {
    LandingPage,
    FeaturesPage,
    PricingPage,
    BookkeepingPage
  }

}
</script>
