<template>
  <section
    class="
      w-full
      h-[755px]
      flex flex-col
      items-center
      justify-center
      gap-[24px]
      px-[162px]
    "
  >
    <h1 class="text-white text-[60px] font-semibold text-center">
      Create Beautiful Event Programmes With Lasting Experiences
    </h1>
    <p class="text-white text-center text-[18px]">
      CodedEvents helps you create beautiful event programmes with lasting
      experiences
    </p>
    <a
      href="#"
      class="
        w-[344px]
        h-[68px]
        bg-light_brownish
        text-white
        rounded-[8px]
        text-[20px]
        font-bold
        flex
        items-center
        justify-center
      "
      >Create an Event</a
    >
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  background-image: linear-gradient(
      to bottom,
      rgba(204, 69, 22, 0.1),
      rgba(204, 69, 22, 0.6)
    ),
    url("../../static/hero-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
h1 {
  font-family: "Playfair Display";
}
</style>