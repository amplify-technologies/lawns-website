<template>
  <div>

    <landing-page />

    <features-page />

    <pricing-page />

    <bookkeeping-page />

    <stay-on-top />

    <runs-on-everything />

  </div>
</template>

<script>
import LandingPage from './LandingPage.vue'
import FeaturesPage from './FeaturesPage.vue'
import PricingPage from './PricingPage.vue'
import BookkeepingPage from './BookkeepingPage.vue'
import StayOnTop from './StayOnTop.vue'
import RunsOnEverything from './RunsOnEverything.vue'
export default {

  components: {
    LandingPage,
    FeaturesPage,
    PricingPage,
    BookkeepingPage,
    StayOnTop,
    RunsOnEverything
  }

}
</script>
