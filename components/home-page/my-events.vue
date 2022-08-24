<template>
  <section class="flex flex-col items-center gap-[50px]">
    <h1 class="title font-semibold text-center text-[48px] text-light_brownish">
      My Events
    </h1>
    <div class="flex items-center gap-[16px]" v-if="events.length > 0">
      <div
        class="flex flex-col w-[400px] h-[816px] relative"
        v-for="(event, index) in events"
        :key="index"
      >
        <img :src="event.banner" />
        <div
          class="
            bg-dark_brownish
            absolute
            left-0
            pl-[41px]
            right-0
            bottom-0
            h-[264px]
            flex flex-col
            justify-center
            gap-[16px]
          "
        >
          <p class="text-[20px] text-white font-bold">
            {{ event.title }}
          </p>
          <p class="text-light_brownish font-bold">{{ event.createdAt }}</p>
          <p class="text-white">{{ event.host }}</p>
        </div>
      </div>
      <!-- <div class="flex flex-col w-[400px] h-[816px] relative">
        <img src="/happy-newly-wed-african-american-couple-bench.png" />
        <div
          class="
            bg-dark_brownish
            absolute
            left-0
            pl-[41px]
            right-0
            bottom-0
            h-[264px]
            flex flex-col
            justify-center
            gap-[16px]
          "
        >
          <p class="text-[20px] text-white font-bold">
            Funmilayo & Bayo Wedding and Traditional Marriage
          </p>
          <p class="text-light_brownish font-bold">Sat, Jul 23, 2:00 PM</p>
          <p class="text-white">Sheba Centre • Ikeja, Lagos</p>
        </div>
      </div>
      <div class="flex flex-col w-[400px] h-[816px] relative">
        <img src="/BLOG-NIGERIAN-MAIN-IMAGE-HeirlumeNigerian160.png" />
        <div
          class="
            bg-dark_brownish
            absolute
            left-0
            pl-[41px]
            right-0
            bottom-0
            h-[264px]
            flex flex-col
            justify-center
            gap-[16px]
          "
        >
          <p class="text-[20px] text-white font-bold">
            Funmilayo & Bayo Wedding and Traditional Marriage
          </p>
          <p class="text-light_brownish font-bold">Sat, Jul 23, 2:00 PM</p>
          <p class="text-white">Sheba Centre • Ikeja, Lagos</p>
        </div>
      </div>
      <div class="flex flex-col w-[400px] h-[816px] relative">
        <img
          src="/group-happy-africans-friends-drinking-champagne-celebrating-new-year-new-year-party-birthday-party.png"
        />
        <div
          class="
            bg-dark_brownish
            absolute
            left-0
            pl-[41px]
            right-0
            bottom-0
            h-[264px]
            flex flex-col
            justify-center
            gap-[16px]
          "
        >
          <p class="text-[20px] text-white font-bold">
            Funmilayo & Bayo Wedding and Traditional Marriage
          </p>
          <p class="text-light_brownish font-bold">Sat, Jul 23, 2:00 PM</p>
          <p class="text-white">Sheba Centre • Ikeja, Lagos</p>
        </div>
      </div> -->
    </div>
    <div v-else>
      <p class="text-center text-dark_brownish font-bold">
        You currently do not have any event
      </p>
    </div>
    <a
      href="#"
      class="
        w-[344px]
        text-[22px]
        font-bold
        text-dark_brownish
        flex
        items-center
        justify-center
        border
        border-dark_brownish
        h-[68px]
        rounded-[8px]
      "
      v-if="events.length > 0"
      >View all my Events</a
    >
  </section>
</template>

<script>
export default {
  data() {
    return {
      events: [],
    };
  },
  beforeMount() {
    let token = localStorage.getItem("codedEvents_USER_TOKEN");
    this.$axios.setHeader("Authorization", `Bearer ${token}`);
    this.$axios
      .$get(process.env.APP_BASE_URL + "events/mine?page=1&per_page=50")
      .then((res) => {
        if (res.data) {
          this.events = res.data;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
</style>