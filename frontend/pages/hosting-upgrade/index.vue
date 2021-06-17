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
              class="logo w-24" style="width: 8rem !important;" 
              v-html="require(`~/assets/icons/logo.svg?include`)"
              title="SMART vCARD - Another Software Solution By Get BAER"
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
        <div class="max-w-screen-sm">
          <h1
            class="text-3xl md:text-5xl font-extrabold mt-24 md:leading-tight"
          >
            Host with Us
          </h1>
          <!--
            md:mt-48
            -->

   	<h2 class="mt-8 text-lg md:text-xl w-full md:w-3/4 text-gray-200">
          View your business card live on our short URL (ie:vcard.fyi/yourname)
        </h2>
        <div class="mt-16">
          <p class="mt-16 border px-4 py-3 rounded border-gray-700">
          <ul class="px-6 mt-6 list-outside list-disc" style="margin-top:0 !important;">
            <li>
              This is a free 14 day trial, no credit card is required.
            </li>
            <li>
              Your vCard is hosted securly on Amazon servers.
            </li>
            <li>
             After your free trial, annual hosting is only $9.97/year, cancel at anytime.
            </li>
            <li>
             Optionally save 50% and get 10 years hosting for a one-time payment of only $47.
            </li>
            <li>
             Make unlimited changes to your business card. Just send us an updated zip folder if your business card details change.
            </li>
          </ul>
          </p>
        </div>
 <div class="mt-16">
          <h3 class="font-extrabold text-2xl">
           Send Us Your Zip Folder
          </h3>
              <div class="mt-4 flex flex-wrap items-center">
        <button
          class="
            font-extrabold
            leading-none
            text-lg
            tracking-wide
            select-none
            flex-shrink-0
            p-5
            mt-2
            mr-2
            text-white
            bg-green-500
            rounded
            hover:bg-green-600
            focus:bg-green-600
            transition-colors
            duration-200
            focus:outline-none"
        >
          Free Trial
        </button>
      </div>
        </div>

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
