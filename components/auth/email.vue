<template>
  <div
    class="
      py-[51px]
      flex flex-col
      gap-[40px]
      items-center
      justify-center
      w-[534px]
      mx-auto
    "
  >
    <p class="text-center text-dark_brownish">
      A 4-digit recovery pin will be sent to your registered email address.<br />
      Input your email address below
    </p>

    <form
      class="w-full flex items-center justify-center flex-col gap-[24px]"
      @submit.prevent="sendConfirmationPin"
    >
      <!-- Email -->
      <div class="flex flex-col gap-[16px] w-full">
        <label for="email" class="font-bold text-light_brownish"
          >Email Address</label
        >
        <input
          type="email"
          placeholder="Enter your email address"
          class="
            h-[55px]
            px-[32px]
            border border-grey4
            bg-transparent
            text-grey3
            rounded-[4px]
          "
          v-model="email"
          required
        />
      </div>
      <!-- Verify Button -->
      <button
        class="
          self-center
          font-bold
          text-white
          bg-light_brownish
          rounded-[8px]
          h-[55px]
          w-[321px]
        "
      >
        Next
      </button>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async sendConfirmationPin() {
      await this.$axios
        .$post(process.env.APP_BASE_URL + "auth/password/email", {
          email: `${this.email}`,
        })
        .then((res) => {
          if (res) {
            Vue.$toast.open({
              message: res.message,
              type: "success",
            });
            this.$emit("confirmationPinSent", this.email);
          }
        })
        .catch((err) => {
          let error = err.response;
          Vue.$toast.open({
            message: error.data.details.email[0],
            type: "error",
          });
        });
    },
  },
};
</script>

<style scoped>
</style>