<template>
  <div class="bg-gray-900 mx-auto text-gray-100" style="max-width: 960px">
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
          Privacy Policy
        </h1>
        <h2 class="mt-8 text-lg md:text-xl w-full md:w-3/4 text-gray-200">
          Please follow the instructions as per your category to get your
          digital business card online.
        </h2>

        <p class="mt-16 border px-4 py-3 rounded border-gray-700">
          Your digital business card files are in the folder you just extracted
          from your downloaded ZIP file. This folder will be referred to as the
          "<span class="font-extrabold">bizcard folder</span>" throughout this
          guide.
        </p>

        <div class="mt-16">
          <h3 class="font-extrabold text-2xl">
            I have a personal WordPress website
          </h3>
          <ul class="px-6 mt-6 list-outside list-disc">
            <li>
              Login to your cPanel account. Locate and open the file manager.
            </li>
            <li>
              In the file manager, locate the folder named "public_html" and
              create a new folder called "vcard" ( or whatever you like ) inside
              it.
            </li>
            <li>
              Upload your bizcard folder into the new folder that you just
              created in the previous step.
            </li>
            <li>
              Now your business card should be online at the address
              https://your-domain.com/vcard/bizcard-folder-name/ and is ready to
              be shared.
            </li>
          </ul>
        </div>
        <div class="mt-16">
          <h3 class="font-extrabold text-2xl">
            My website is maintained by a developer
          </h3>
          <ul class="px-6 mt-6 list-outside list-disc">
            <li>
              Contact your developer to host the business card for you. Just
              send them the downloaded ZIP file.
            </li>
          </ul>
        </div>
        <div class="mt-16">
          <h3 class="font-extrabold text-2xl">
            We are a company. Our website is maintained by the IT team
          </h3>
          <ul class="px-6 mt-6 list-outside list-disc">
            <li>
              Just share the details with your IT team, let them create digital
              business cards for you using
              <NuxtLink
                to="/"
                class="
                  underline
                  font-extrabold
                  text-green-600
                  hover:text-green-500
                  focus:text-green-500
                  transition-colors
                  duration-200
                "
                >SMARTvCARD</NuxtLink
              >.
            </li>
            <li>
              If you got some business cards created by yourself, contact your
              IT team to host it for you. Just send them the downloaded ZIP
              files and share the link to this
              <a
                class="
                  underline
                  font-extrabold
                  text-green-600
                  hover:text-green-500
                  focus:text-green-500
                  transition-colors
                  duration-200
                "
                href="https://smartvcard.comhosting-guide"
                target="_blank"
                >Self-Hosting Guide</a
              >.
            </li>
          </ul>
        </div>
        <div class="mt-16">
          <h3 class="font-extrabold text-2xl">
            I'm the developer / administrator of a website
          </h3>
          <ul class="px-6 mt-6 list-outside list-disc">
            <li>
              Create a folder called "vcard" ( or whatever you like ) in the
              project's static folder.
            </li>
            <li>Copy the bizcard folder inside the "vcard" folder.</li>
            <li>Commit changes and deploy.</li>
            <li>
              Now the business card should be online at the address
              https://your-domain/vcard/bizcard-folder/ and is ready to be
              shared.
            </li>
          </ul>
        </div>
        <div class="mt-16">
          <p class="mt-4">
            If you got any doubt setting up your digital business card on any of
            these platforms, You can always
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
              href="https://t.me/SMARTvCARD"
              target="_blank"
              rel="noopener noreferrer"
              >Contact Support</a
            >
            and ask it.
          </p>
        </div>
        <div class="mt-16">
          <h3 class="font-extrabold text-2xl">
            How do I update my business card details?
          </h3>
          <p class="mt-6">
            SMARTvCARD does not store any data online for you to retrieve it for
            editing. So, every card has to be manually created from scratch.
          </p>
          <ul class="px-6 mt-6 list-outside list-disc">
            <li>
              Visit
              <NuxtLink
                to="/"
                class="
                  underline
                  font-extrabold
                  text-green-600
                  hover:text-green-500
                  focus:text-green-500
                  transition-colors
                  duration-200
                "
                >SMARTvCARD</NuxtLink
              >
              and generate a new digital business card.
            </li>
            <li>
              Extract the downloaded ZIP file and copy your bizcard folder
              containing your updated files.
            </li>
            <li>
              Follow the exact same steps as per your category listed above to
              update your digital business card.
            </li>
          </ul>
        </div>
        <div class="mt-16">
          <h3 class="font-extrabold text-2xl">
            How do I add another business card to my website?
          </h3>
          <ul class="px-6 mt-6 list-outside list-disc">
            <li>
              Visit
              <NuxtLink
                to="/"
                class="
                  underline
                  font-extrabold
                  text-green-600
                  hover:text-green-500
                  focus:text-green-500
                  transition-colors
                  duration-200
                "
                >SMARTvCARD</NuxtLink
              >
              and generate a digital business card.
            </li>
            <li>
              Extract the downloaded ZIP file and copy the bizcard folder.
            </li>
            <li>
              Follow the exact same steps as per your category listed above to
              add the digital business card.
            </li>
            <li>
              Place the copied folder inside the same folder where you already
              have your bizcard folders.
            </li>
          </ul>
        </div>
      </div>

      <br />
      <h3 class="font-extrabold text-2xl">I don't have a website</h3>
      <p class="mt-6">
        You can host your digital business card on our premium and secure short
        URL , vCard.fyi, for less than $10/year
        <br />
        Your link will be branded to YOU! ie: https://vcard.fyi/yourname
        <br />
        Hosting includes unlimited changs to your business card. To update and
        make changes, simply generate a new zip folder at
        <a
          class="
            underline
            font-extrabold
            text-green-600
            hover:text-green-500
            focus:text-green-500
            transition-colors
            duration-200
          "
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          >SMARTvCARD</a
        >, and send your file to
        <a
          class="
            underline
            font-extrabold
            text-green-600
            hover:text-green-500
            focus:text-green-500
            transition-colors
            duration-200
          "
          href="https://#/contact-us"
          target="_blank"
          rel="noopener noreferrer"
          >cutomer support</a
        >
        <br />
        Branded links are offered on first come, first served basics. To learn
        more Click on the button below.
      </p>
      <div class="stepC mt-6">
        <div class="donateBtn flex items-center mt-6">
          <NuxtLink
            to="/"
            class="
              flex
              items-center
              text-lg
              leading-none
              p-5
              flex-shrink-0
              rounded
              cursor-pointer
              border-2 border-transparent
              bg-gray-700
              text-white
              hover:bg-gray-600
              focus:bg-gray-600
              transition-colors
              duration-200
              font-extrabold
            "
            rel="noreferrer"
          >
            Host My Business Card
          </NuxtLink>
        </div>

        <div class="mt-16">
          <!-- <div class="px-6 mt-6 list-outside list-disc"> -->
          <p>
            If you need further assistance, please contact
            <NuxtLink
              to="/contact-us"
              class="
                underline
                font-extrabold
                text-green-600
                hover:text-green-500
                focus:text-green-500
                transition-colors
                duration-200
              "
              >Customer Support</NuxtLink
            >
          </p>
        </div>
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
