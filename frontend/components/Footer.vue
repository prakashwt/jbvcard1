<template>
  <footer class="h-30 mt-32 mx-4 flex flex-col">
    <div class="flex flex-col justify-center items-center">
     <a href="/"> <div
        class="ftr logo w-12"
        v-html="require(`~/assets/icons/footer_logo.svg?include`)"
      ></div></a>
      <!-- <p class="font-extrabold leading-tight">
        Digital&nbsp;Business&nbsp;Card
        <br />
        Generator
      </p> -->
      <p class="mt-6 text-center text-gray-400">
        Another Software Solution by
        <a
          class="
            underline
            text-green-500
            font-extrabold
            hover:text-green-600
            focus:text-green-600
            transition-colors
            duration-200
          "
          href="https://getbaer.com/"
          target="_blank"
          rel="noopener noreferrer"
          >GET BAER</a
        >
      </p>
      <p class="mt-1 mb-8 text-center text-xs text-gray-400">
        <NuxtLink
          to="/privacy-policy"
          class="
            underline
            text-green-500
            font-extrabold
            hover:text-green-600
            focus:text-green-600
            transition-colors
            duration-200
          "
          rel="noopener noreferrer"
          >Privacy&nbsp;Policy
        </NuxtLink>
        |
        <NuxtLink
          to="/terms-and-conditions"
          class="
            underline
            text-green-500
            font-extrabold
            hover:text-green-600
            focus:text-green-600
            transition-colors
            duration-200
          "
          rel="noopener noreferrer"
          >Terms & Conditions</NuxtLink
        >
         |
        <NuxtLink
          to="/customer-support"
          class="
            underline
            text-green-500
            font-extrabold
            hover:text-green-600
            focus:text-green-600
            transition-colors
            duration-200
          "
          rel="noopener noreferrer"
          >Support</NuxtLink
        >
      </p>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style >
.ftr {
  width: 200px;
  height: 110px;
}

/* .footer_stick {
  position: relative;
  bottom: 0;
} */
</style>

