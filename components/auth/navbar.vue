<template>
  <header
    class="
      w-full
      bg-white
      py-[48px]
      px-[50px]
      flex
      items-center
      justify-between
    "
  >
    <div class="flex items-center gap-[140px]">
      <img src="/logo.svg" alt="logo-icon" />
      <ul class="flex items-center gap-[43px] text-dark_brownish">
        <li>
          <a href="#" class="font-bold text-light_brownish">Create Events</a>
        </li>
        <li><a href="#" class="hover:text-light_brownish">My Events</a></li>
        <li><a href="#" class="hover:text-light_brownish">Wallet</a></li>
        <li><a href="#" class="hover:text-light_brownish">Pricing</a></li>
        <li><a href="#" class="hover:text-light_brownish">Contact</a></li>
        <li><a href="#" class="hover:text-light_brownish">Blog</a></li>
      </ul>
    </div>

    <img src="/user.svg" alt="user-icon" />
  </header>
</template>
<script>
export default {};
</script>

<style scoped>
header {
  font-family: "Basis Grotesque Pro";
}
</style>