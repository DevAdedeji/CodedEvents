<template>
  <header
    class="
      w-full
      bg-white
      py-[28px]
      px-[50px]
      flex
      items-center
      justify-between
    "
  >
    <div class="flex items-center gap-[120px]">
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

    <div class="flex items-center gap-[24px]" v-if="!loggedIn">
      <a
        href="/signup"
        class="
          h-[55px]
          w-[167px]
          bg-light_brownish
          rounded-[8px]
          font-bold
          text-white
          flex
          items-center
          justify-center
        "
        >Sign up</a
      >
      <a
        href="Login"
        class="
          h-[55px]
          w-[167px]
          rounded-[8px]
          text-dark_brownish
          font-bold
          flex
          items-center
          justify-center
          gap-[24px]
          px-[30px]
          border border-[#751300]
        "
      >
        <span>Login</span>
        <img src="/user.svg" alt="user-icon" />
      </a>
    </div>
    <div class="flex items-center gap-[24px]" v-if="loggedIn">
      <a
        href="#"
        class="
          h-[56px]
          w-[56px]
          rounded-[50%]
          bg-lightRed
          flex
          items-center
          justify-center
        "
      >
        <img src="/bell.svg" alt="user-icon" />
      </a>
      <a
        href="#"
        class="
          h-[56px]
          w-[56px]
          rounded-[50%]
          bg-[#EFEFEF]
          flex
          items-center
          justify-center
        "
      >
        <img src="/user.svg" alt="user-icon" />
      </a>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      loggedIn: false,
    };
  },
  beforeMount() {
    if (localStorage.getItem("codedEvents_USER_TOKEN")) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  },
};
</script>

<style scoped>
header {
  font-family: "Basis Grotesque Pro";
}
</style>