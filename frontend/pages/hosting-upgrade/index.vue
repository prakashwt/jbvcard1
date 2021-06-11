<template>
  <div>
    <div
      class="h-30 bg-gray-900 mx-auto text-gray-100"
      style="max-width: 960px"
    >
      <div class="px-4">
        <div class="flex items-start justify-between pt-8">
          <NuxtLink to="/">
            <div
              class="logo w-24"
              v-html="require(`~/assets/icons/logo.svg?include`)"
              title="SMARTvCARD - Another Software Solution By Get BAER"
            ></div
          ></NuxtLink>
          <NuxtLink
            to="/hosting-upgrade"
            class="
              font-extrabold
              tracking-wide
              leading-none
              flex-shrink-0
              p-3
              border-2
              text-white
              border-gray-700
              rounded
              hover:bg-gray-700
              focus:bg-gray-700
              transition-colors
              duration-200
            "
            >Host with Us</NuxtLink
          >
        </div>
        <div id="guide" class="max-w-screen-sm">
          <h1
            class="text-3xl md:text-5xl font-extrabold mt-24 md:leading-tight"
          >
            Host with US
          </h1>
          <!--
            md:mt-48
            -->

          <p class="mt-16 border px-4 py-3 rounded border-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            velit voluptate dolor laboriosam beatae repudiandae repellendus
            temporibus, modi tenetur dolores, fuga accusamus ullam. Quisquam
            exercitationem id, molestias ipsum cupiditate nobis?
          </p>

          <!-- </div> -->
        </div>
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>
<script>
import Footer from '@/components/Footer'

export default {
  components: {
    Footer,
  },
  head: {
    titleTemplate: 'Hosting Upgrade - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Host your digital business card on our premium & secure short URL, vCard.fyi, for under $10/year.',
      },
    ],
  },
}
</script>
