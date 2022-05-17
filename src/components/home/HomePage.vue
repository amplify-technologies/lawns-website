<template>
  <div>

    <landing-page />

    <features-page />

    <pricing-page />

    <organize-page />
    
    <bookkeeping-page />

    <stay-on-top />

  </div>
</template>

<script>
import LandingPage from './LandingPage.vue'
import FeaturesPage from './FeaturesPage.vue'
import PricingPage from './PricingPage.vue'
import OrganizePage from './OrganizePage.vue'

import BookkeepingPage from './BookkeepingPage.vue'
import StayOnTop from './StayOnTop.vue'
export default {

  components: {
    LandingPage,
    FeaturesPage,
    PricingPage,
    OrganizePage,
    BookkeepingPage,
    StayOnTop
  }

}
</script>
