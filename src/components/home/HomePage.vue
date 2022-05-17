<template>
  <div>

    <landing-page />

    <features-page />

    <pricing-page />

    <organize-page />

  </div>
</template>

<script>
import LandingPage from './LandingPage.vue'
import FeaturesPage from './FeaturesPage.vue'
import PricingPage from './PricingPage.vue'
import OrganizePage from './OrganizePage.vue'

export default {

  components: {
    LandingPage,
    FeaturesPage,
    PricingPage,
    OrganizePage
  }

}
</script>
