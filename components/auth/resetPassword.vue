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
    <form
      class="w-full flex items-center justify-center flex-col gap-[24px]"
      @submit.prevent="resetPassword"
    >
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
          ref="passwordInput"
          @input="watchPassword"
          placeholder="Please input your password"
          v-model="password"
          required
        />
        <div
          class="flex flex-row items-center gap-[8px] text-[12px]"
          v-show="passwordStrength"
        >
          <p>Password Stength:</p>
          <div class="h-[12px] w-[236px] bg-[#ECECEC] rounded-[30px]">
            <div
              ref="passwordStrengthProgresss"
              class="passwordStrengthProgresss"
            ></div>
          </div>
          <span ref="passwordStrengthText">{{ passwordStrong }}</span>
        </div>
      </div>

      <!-- cPassword -->
      <div class="flex flex-col gap-[16px] w-full">
        <label for="cPassword" class="font-bold text-light_brownish"
          >Confirm Password</label
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
          placeholder="Confirm your password"
          v-model="cPassword"
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
        Save Changes
      </button>
    </form>
  </div>
</template>

<script>
import Vue from "vue";

import zxcvbn from "zxcvbn";
export default {
  props: ["email", "token"],
  data() {
    return {
      password: "",
      cPassword: "",
      passwordStrength: false,
      passwordStrong: "Very Weak",
      isPasswordStrong: false,
    };
  },
  methods: {
    async resetPassword() {
      if (this.isPasswordStrong === true) {
        if (this.password !== this.cPassword) {
          Vue.$toast.open({
            message: "Password Must Match",
            type: "error",
          });
        } else {
          this.$axios.setHeader("Authorization", `Bearer ${this.token}`);
          await this.$axios
            .$post(process.env.APP_BASE_URL + "auth/password/reset", {
              email: `${this.email}`,
              password: `${this.password}`,
            })
            .then((res) => {
              if (res.message) {
                Vue.$toast.open({
                  message: res.message,
                  type: "success",
                });
                this.$router.push("/login");
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
        }
      } else {
        Vue.$toast.open({
          message: "Password must be strong",
          type: "error",
        });
      }
    },
    watchPassword() {
      this.passwordStrength = true;
      if (this.password.length > 0) {
        const result = zxcvbn(this.password);
        if (result.score === 0) {
          // Password is very weak
          this.passwordStrong = "Very Weak";
          // Change text color
          this.$refs.passwordStrengthText.classList.add("weak");
          // Add progressbar styles
          this.$refs.passwordStrengthProgresss.classList.add("weak");
          // Password is not strong
          this.isPasswordStrong = false;
        } else if (result.score === 1 || result.score === 2) {
          // Password is weak
          this.passwordStrong = "Weak";
          // Add weak styles and remove any other styles
          this.$refs.passwordStrengthText.classList.remove("strong");
          this.$refs.passwordStrengthText.classList.add("weak");
          // Add weak progressbar styles
          this.$refs.passwordStrengthProgresss.classList.add("weak");
          this.$refs.passwordStrengthProgresss.classList.remove("strong");
          this.$refs.passwordStrengthProgresss.classList.remove("veryStrong");
          // Password is not strong
          this.isPasswordStrong = false;
        } else if (result.score === 3) {
          // Password is strong
          this.passwordStrong = "Strong";
          this.$refs.passwordStrengthText.classList.add("strong");
          this.$refs.passwordStrengthText.classList.remove("weak");
          this.$refs.passwordStrengthProgresss.classList.remove("veryStrong");
          this.$refs.passwordStrengthProgresss.classList.add("strong");
          this.$refs.passwordStrengthProgresss.classList.remove("weak");
          this.isPasswordStrong = true;
        } else {
          this.passwordStrong = "Strong";
          this.$refs.passwordStrengthText.classList.add("strong");
          this.$refs.passwordStrengthText.classList.remove("weak");
          this.$refs.passwordStrengthProgresss.classList.add("veryStrong");
          this.$refs.passwordStrengthProgresss.classList.remove("strong");
          this.$refs.passwordStrengthProgresss.classList.remove("weak");
          this.passwordStrong = "Very Strong";
          this.isPasswordStrong = true;
        }
      } else {
        this.passwordStrength = false;
      }
    },
  },
};
</script>

<style scoped>
.weak {
  color: #eb5757;
}

.strong {
  color: #27ae60;
}
.passwordStrengthProgresss {
  transition: 0.2s all;
  border-radius: 30px;
  height: 100%;
}

.passwordStrengthProgresss.weak {
  background: #eb5757;
  width: 30%;
}
.passwordStrengthProgresss.strong {
  background: #27ae60;
  width: 70%;
}
.passwordStrengthProgresss.veryStrong {
  width: 100%;
  background: #27ae60;
}
</style>