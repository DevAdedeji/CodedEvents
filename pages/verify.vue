<template>
  <main>
    <div
      class="
        h-[213px]
        bg-lightRed
        flex flex-col
        justify-center
        px-[140px]
        relative
        title
      "
    >
      <a href="/signup">
        <div
          class="
            h-[44px]
            w-[45px]
            border
            border-light_brownish
            flex
            items-center
            justify-center
            rounded-[8px]
          "
        >
          <img src="../static/arow-back.svg" alt="arrow-back-icon" />
        </div>
      </a>
      <!-- Title Of Page -->
      <h1
        class="
          title
          text-center
          font-semibold
          text-[48px]
          text-dark_brownish
          self-center
        "
      >
        Verify Your Email
      </h1>
      <p class="absolute right-[150px]">Verify</p>
    </div>
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
        @submit.prevent="verify"
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
          ref="verifyBtn"
        >
          Verify
        </button>
      </form>
    </div>
  </main>
</template>

<script>
import Vue from "vue";
import { API_LINK } from "../utils/api";
export default {
  layout: "auth",
  head() {
    return {
      title: "CodedEvents | Verify your email address",
      meta: [
        {
          hid: "Verify",
          name: "Verify",
          content:
            "CodedEvents, Verify, CodedEvents Verify, Verify your account",
        },
      ],
    };
  },
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
    async verify() {
      this.$refs.verifyBtn.disabled = true;
      this.$refs.verifyBtn.style.cursor = "not-allowed";
      let otp = Number(this.a + this.b + this.c + this.d);
      let token = localStorage.getItem("codedEvents_USER_TOKEN");
      this.$axios.setHeader("Authorization", `Bearer ${token}`);
      await this.$axios
        .$post(API_LINK + "auth/email/verify", {
          token: otp,
        })
        .then((res) => {
          if (res.message) {
            Vue.$toast.open({
              message: res.message,
              type: "success",
            });
            this.$router.push("/");
          }
        })
        .catch((err) => {
          this.$refs.verifyBtn.disabled = false;
          this.$refs.verifyBtn.style.cursor = "pointer";
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
.title h1,
.title p {
  font-family: "Playfair Display";
}
.title p {
  -webkit-text-stroke: 1px #cc4516;
  color: transparent;
  font-size: 200px;
  opacity: 0.1;
}
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