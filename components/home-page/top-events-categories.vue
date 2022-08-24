<template>
  <section class="flex flex-col gap-[96px]">
    <h1 class="title font-semibold text-center text-[48px] text-light_brownish">
      Top Event Categories
    </h1>
    <div class="flex items-center gap-[87px]">
      <div class="flex flex-col items-center justify-center gap-[24px]">
        <div
          class="
            w-[164px]
            h-[164px]
            rounded-[50%]
            bg-lightRed
            flex
            items-center
            justify-center
            border border-[#cc451680]
          "
        >
          <img src="/weddings.svg" alt="wedding-icon" />
        </div>
        <p class="font-bold text-[20px] text-dark_brownish">Weddings</p>
      </div>
      <div class="flex flex-col items-center justify-center gap-[24px]">
        <div
          class="
            w-[164px]
            h-[164px]
            rounded-[50%]
            bg-lightRed
            flex
            items-center
            justify-center
            border border-[#cc451680]
          "
        >
          <img src="/seminars.svg" alt="seminars-icon" />
        </div>
        <p class="font-bold text-[20px] text-dark_brownish">Seminars</p>
      </div>

      <div class="flex flex-col items-center justify-center gap-[24px]">
        <div
          class="
            w-[164px]
            h-[164px]
            rounded-[50%]
            bg-lightRed
            flex
            items-center
            justify-center
            border border-[#cc451680]
          "
        >
          <img src="/burials.svg" alt="burials-icon" />
        </div>
        <p class="font-bold text-[20px] text-dark_brownish">Burials</p>
      </div>

      <div class="flex flex-col items-center justify-center gap-[24px]">
        <div
          class="
            w-[164px]
            h-[164px]
            rounded-[50%]
            bg-lightRed
            flex
            items-center
            justify-center
            border border-[#cc451680]
          "
        >
          <img src="/parties.svg" alt="parties-icon" />
        </div>
        <p class="font-bold text-[20px] text-dark_brownish">Parties</p>
      </div>

      <div class="flex flex-col items-center justify-center gap-[24px]">
        <div
          class="
            w-[164px]
            h-[164px]
            rounded-[50%]
            bg-lightRed
            flex
            items-center
            justify-center
            border border-[#cc451680]
          "
        >
          <img src="/charity_outreach.svg" alt="charity_outreach-icon" />
        </div>
        <p class="font-bold text-[20px] text-dark_brownish">Charity Outreach</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  font-family: "Playfair Display";
  line-height: 64px;
  font-feature-settings: "pnum" on, "lnum" on;
}
</style>