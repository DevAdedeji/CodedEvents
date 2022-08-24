<template>
  <div
    class="
      py-[51px]
      flex flex-col
      items-center
      justify-center
      w-[600px]
      mx-auto
    "
  >
    <p class="text-center text-dark_brownish">
      Input the 4-digit pin sent to your email address
    </p>
    <form
      class="w-full flex items-center justify-center flex-col gap-[24px]"
      @submit.prevent="confirmPin"
    >
      <div
        class="
          flex
          items-center
          gap-[27px]
          px-[48px]
          w-[534px]
          h-[217px]
          mx-auto
          rounded-[4px]
          border border-grey2
          mt-[31px]
        "
      >
        <input
          type="number"
          class="
            text-[24px]
            font-bold
            text-center
            text-light_brownish
            h-[89px]
            w-[89px]
            border
            border-light_brownish
            rounded-[10px]
            bg-lightRed
          "
          required
          v-model="a"
          ref="a"
          @input="watchInput"
        />
        <input
          type="number"
          class="
            text-[24px]
            font-bold
            text-center
            text-light_brownish
            h-[89px]
            w-[89px]
            border
            border-light_brownish
            rounded-[10px]
            bg-lightRed
          "
          @input="watchInput"
          required
          v-model="b"
          ref="b"
        />
        <input
          type="number"
          class="
            text-[24px]
            font-bold
            text-center
            text-light_brownish
            h-[89px]
            w-[89px]
            border
            border-light_brownish
            rounded-[10px]
            bg-lightRed
          "
          @input="watchInput"
          required
          v-model="c"
          ref="c"
        />
        <input
          type="number"
          class="
            text-[24px]
            font-bold
            text-center
            text-light_brownish
            h-[89px]
            w-[89px]
            border
            border-light_brownish
            rounded-[10px]
            bg-lightRed
          "
          @input="watchInput"
          required
          v-model="d"
          ref="d"
        />
      </div>
      <!-- Didn’t get any code? -->
      <div class="self-center">
        <p class="text-grey3 d">
          Didn’t get any code?
          <button class="text-light_brownish font-bold">Resend Code</button>
        </p>
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
  props: ["email"],
  data() {
    return {
      a: "",
      b: "",
      c: "",
      d: "",
    };
  },
  methods: {
    watchInput() {
      if (this.a.length === 1) {
        this.$refs.b.focus();
      }
      if (this.b.length === 1) {
        this.$refs.c.focus();
      }
      if (this.c.length === 1) {
        this.$refs.d.focus();
      }
      // if (this.d.length === 1) {

      // }
    },
    async confirmPin() {
      let otp = Number(this.a + this.b + this.c + this.d);

      await this.$axios
        .$post(process.env.APP_BASE_URL + "auth/password/token", {
          email: `${this.email}`,
          token: otp,
        })
        .then((res) => {
          console.log(res);
          if (res.message) {
            Vue.$toast.open({
              message: res.message,
              type: "success",
            });
          }
          this.$emit("pinConfirmed", otp);
        })
        .catch((err) => {
          let error = err.response;

          if (error) {
            Vue.$toast.open({
              message: error.data.error,
              type: "error",
            });
          }
        });
    },
  },
};
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>