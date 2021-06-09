<template>
  <footer class="mt-32 mx-4 flex flex-col">
    <div class="flex flex-col justify-center items-center">
      <div
        class="logo w-12"
        v-html="require(`~/assets/icons/footer_logo.svg?include`)"
      ></div>
      <!-- <p class="font-extrabold leading-tight">
        Digital&nbsp;Business&nbsp;Card
        <br />
        Generator
      </p> -->
      <p class="font-extrabold text-xl mt-2 leading-tight">SMART vCARD</p>
    </div>
    <p class="mt-6 text-center text-gray-400">
      Another Software Solution by
      <a
        class="
          underline
          text-green-600
          font-extrabold
          hover:text-green-500
          focus:text-green-500
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
      <a
        class="
          underline
          text-green-600
          font-extrabold
          hover:text-green-500
          focus:text-green-500
          transition-colors
          duration-200
        "
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        >Privacy&nbsp;Policy
      </a>
      |
      <a
        class="
          underline
          text-green-600
          font-extrabold
          hover:text-green-500
          focus:text-green-500
          transition-colors
          duration-200
        "
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        >Terms & Conditions</a
      >
    </p>
  </footer>
</template>

<script>
export default {}
</script>

<style>
</style>
