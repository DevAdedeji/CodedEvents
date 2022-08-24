<template>
  <footer class="w-full h-[520px] px-[172px] pt-[89px] pb-[58px]">
    <!-- Logo -->
    <img src="/footer_logo.svg" alt="logo-icon" class="pb-[58px]" />
    <div class="flex justify-between">
      <!-- Company Info -->
      <div class="flex flex-col gap-[24px]">
        <div class="flex items-center gap-[16px] text-white">
          <img src="/location.svg" alt="location-icon" />
          <p>
            Address Line 1,<br />
            City, State name,<br />
            Country.
          </p>
        </div>
        <div class="flex items-center gap-[16px] text-white">
          <img src="/email.svg" alt="email-icon" />
          <p>contact@gmail.com</p>
        </div>
        <div class="flex items-center gap-[16px] text-white">
          <img src="/call.svg" alt="phone-icon" />
          <p>080000000000</p>
        </div>
        <!-- Social Media Icons -->
        <div class="flex items-center gap-[24px]">
          <img src="/instagram.svg" alt="instagram-icon" />
          <img src="/twitter.svg" alt="twitter-icon" />
          <img src="/facebook.svg" alt="facebook-icon" />
          <img src="/whatsapp.svg" alt="whatsapp-icon" />
        </div>
        <p class="text-white">@ CodedEvents {{ year }}</p>
      </div>
      <!-- Company -->
      <div>
        <p class="text-light_brownish pb-[26px] font-bold">Company</p>
        <ul class="flex flex-col gap-[16px] text-white">
          <li><a href="#">Home</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Create Event</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
      <!-- Newsletter -->
      <div>
        <p class="text-light_brownish pb-[26px] font-bold">Join a Newsletter</p>
        <form class="flex flex-col gap-[21px]">
          <div class="flex flex-col gap-[16px]">
            <label for="email" class="text-white">Your Email</label>
            <input
              type="email"
              class="bg-white rounded-[4px] h-[55px] w-[320px]"
              required
            />
          </div>
          <button
            class="
              w-[167px]
              h-[55px]
              bg-light_brownish
              text-white
              rounded-[4px]
            "
          >
            Join
          </button>
        </form>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
footer {
  background-image: url("../static/footer_bg.svg");
  background-color: #751300;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>