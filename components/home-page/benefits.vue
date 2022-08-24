<template>
  <section class="flex flex-col gap-[50px]">
    <h1 class="title font-semibold text-center text-[48px] text-light_brownish">
      Benefits of Using Coded Events
    </h1>
    <div class="flex flex-col gap-[80px]">
      <!--  Your Event Details In a Single Barcode -->
      <div class="flex gap-[120px]">
        <img src="/benefit1.png" alt="sminling-couple" />
        <div class="flex flex-col gap-[24px]">
          <p class="font-bold text-[72px] text-[#FFA485] opacity-40">01</p>
          <p class="font-semibold text-[48px] text-dark_brownish" id="note">
            Your Event Details In a Single Barcode
          </p>
          <p class="text-light_brownish desc">
            CodedEvents helps you create beautiful event programmes with lasting
            experiences
          </p>
        </div>
      </div>
      <!-- Share Invitation With
Friends & Family -->
      <div class="flex flex-row-reverse gap-[120px]">
        <img src="/benefit2.png" alt="sminling-couple" />
        <div class="flex flex-col gap-[24px]">
          <p class="font-bold text-[72px] text-[#FFA485] opacity-40">02</p>
          <p class="font-semibold text-[48px] text-dark_brownish" id="note">
            Share Invitation With Friends & Family
          </p>
          <p class="text-light_brownish desc">
            CodedEvents helps you create beautiful event programmes with lasting
            experiences
          </p>
        </div>
      </div>
      <!-- Receive Event 
Donations Into Your
Digital Wallet -->
      <div class="flex gap-[120px]">
        <img src="/benefit3.png" alt="sminling-couple" />
        <div class="flex flex-col gap-[24px]">
          <p class="font-bold text-[72px] text-[#FFA485] opacity-40">03</p>
          <p class="font-semibold text-[48px] text-dark_brownish" id="note">
            Receive Event Donations Into Your Digital Wallet
          </p>
          <p class="text-light_brownish desc">
            CodedEvents helps you create beautiful event programmes with lasting
            experiences
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.title,
#note {
  font-family: "Playfair Display";
  line-height: 64px;
  font-feature-settings: "pnum" on, "lnum" on;
}
.desc {
  font-family: "Basis Grotesque Pro";
}
</style>