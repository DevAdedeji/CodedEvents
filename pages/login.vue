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
        Login
      </h1>
      <p class="absolute right-[295px] pb-[50px]">Login</p>
    </div>

    <!-- Login Form -->
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
      <form @submit.prevent="login" class="w-full flex flex-col gap-[24px]">
        <!-- Email -->
        <div class="flex flex-col gap-[16px] w-full">
          <label for="email" class="font-bold text-light_brownish">Email</label>
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
        <!-- Password -->
        <div class="flex flex-col gap-[16px] w-full">
          <label for="password" class="font-bold text-light_brownish"
            >Password</label
          >
          <input
            type="password"
            class="
              h-[55px]
              px-[32px]
              border border-grey4
              bg-transparent
              text-grey3
              rounded-[4px]
            "
            v-model="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <div class="w-full flex justify-end">
          <a href="/forgot-password" class="underline text-grey3 ml-auto"
            >Forgot your password</a
          >
        </div>
        <!-- Login Button -->
        <button
          class="
            self-center
            mt-[55px]
            font-bold
            text-white
            bg-light_brownish
            rounded-[8px]
            h-[55px]
            w-[321px]
          "
          ref="loginBtn"
        >
          Login
        </button>
        <!-- Dont have an account -->
        <div class="self-center">
          <p class="text-grey3 d">
            Don't have an account?
            <a href="/signup" class="text-light_brownish font-bold">Sign Up</a>
          </p>
        </div>
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
      title: "CodedEvents | Login",
      meta: [
        {
          hid: "login",
          name: "login",
          content:
            "CodedEvents, Login, CodedEvents Login, Login to your account",
        },
      ],
    };
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      this.$refs.loginBtn.disabled = true;
      this.$refs.loginBtn.style.cursor = "not-allowed";
      this.$axios.setHeader("Accept", "application/json");
      this.$axios.setHeader("Content-Type", "application/json");
      await this.$axios
        .$post(API_LINK + "auth/login", {
          email: `${this.email}`,
          password: `${this.password}`,
        })
        .then((res) => {
          if (res) {
            localStorage.setItem("codedEvents_USER_TOKEN", res.data.token);
            if (res.data.user.email_verified === false) {
              Vue.$toast.open({
                message: "Account verification needed",
                type: "warning",
              });
              this.$axios.setHeader(
                "Authorization",
                `Bearer ${res.data.token}`
              );
              this.$axios
                .$post(process.env.APP_BASE_URL + "auth/email/resend", {
                  email: `${this.email}`,
                  password: `${this.password}`,
                })
                .then((res) => {
                  if (res) {
                    this.$router.push("/verify");
                  }
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
            } else {
              this.$router.push("/");
            }
          }
        })
        .catch((err) => {
          this.$refs.loginBtn.disabled = false;
          this.$refs.loginBtn.style.cursor = "pointer";
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
</style>