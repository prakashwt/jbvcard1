<template>
  <div class="bg-gray-900 mx-auto text-gray-100" style="max-width: 960px">
    <div class="px-4">
      <div class="flex items-start justify-between pt-8">
        <NuxtLink to="/">
          <div
            class="logo w-24"
            v-html="require(`~/assets/icons/logo.svg?include`)"
            title="SMART vCARD - An Open-Source Digital Business Card Generator"
          ></div
        ></NuxtLink>
        <a
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
          href="https://www.vishnuraghav.com/donate"
          target="_blank"
          >Donate</a
        >
      </div>

      <iframe
        src="https://msgsndr.com/widget/form/yiRv9pgWMV3mVoyNx1Fd"
        style="border: none; width: 100%"
        scrolling="yes"
        id="yiRv9pgWMV3mVoyNx1Fd"
      ></iframe>
      <script src="https://msgsndr.com/js/form_embed.js"></script>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/Footer'
import Help from '@/components/Help'

export default {
  components: {
    Footer,
    Help,
  },
}
</script>
