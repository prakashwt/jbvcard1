<template>
  <div class="h-30 bg-gray-900 mx-auto text-gray-100" style="max-width: 960px">
    <div class="px-4">
      <div class="flex items-start justify-between pt-8">
        <NuxtLink to="/">
          <div
            class="logo w-24"
            v-html="require(`~/assets/icons/logo.svg?include`)"
            title="SMARTvCARD - An Open-Source Digital Business Card Generator"
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
          class="
            text-3xl
            md:text-5xl
            font-extrabold
            mt-24
            md:mt-48
            md:leading-tight
          "
        >
          Terms and Conditions
        </h1>

        <p class="mt-16 border px-4 py-3 rounded border-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          velit voluptate dolor laboriosam beatae repudiandae repellendus
          temporibus, modi tenetur dolores, fuga accusamus ullam. Quisquam
          exercitationem id, molestias ipsum cupiditate nobis?
        </p>

        <!-- </div> -->
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/Footer'

export default {
  components: {
    Footer,
  },
}
</script>
