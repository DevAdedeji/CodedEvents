<template>
  <main>
    <Navbar />
    <Nuxt />
    <Footer />
  </main>
</template>

<script>
import Footer from "../components/footer.vue";
import Navbar from "../components/auth/navbar.vue";
export default { components: { Footer, Navbar } };
</script>

<style scoped>
* {
  font-family: "Basis Grotesque Pro";
}
</style>