<template>
  <main>
    <Navbar />
    <Hero />
    <section class="w-[90%] mx-auto py-[50px] flex flex-col gap-[100px]">
      <Benefits v-if="!loggedIn" />
      <MyEvents v-if="loggedIn" />
      <top-events-categories />
    </section>

    <footervue />
  </main>
</template>

<script>
import footervue from "../components/footer.vue";
import TopEventsCategories from "../components/home-page/top-events-categories.vue";
import Navbar from "../components/navbar.vue";
import Benefits from "../components/home-page/benefits";
import Hero from "../components/home-page/hero.vue";
import MyEvents from "../components/home-page/my-events.vue";
export default {
  name: "IndexPage",
  components: {
    footervue,
    Navbar,
    TopEventsCategories,
    Benefits,
    Hero,
    MyEvents,
  },
  head() {
    return {
      title: "CodedEvents ",
    };
  },
  data() {
    return {
      loggedIn: true,
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
