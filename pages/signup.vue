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
        Signup
      </h1>
      <p class="absolute right-[190px] pb-[50px]">Signup</p>
    </div>
    <!-- Register Form -->
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
      <form @submit.prevent="register" class="w-full flex flex-col gap-[24px]">
        <!-- Name -->
        <div class="flex flex-col gap-[16px] w-full">
          <label for="email" class="font-bold text-light_brownish">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            class="
              h-[55px]
              px-[32px]
              border border-grey4
              bg-transparent
              text-grey3
              rounded-[4px]
            "
            v-model="name"
            required
          />
        </div>
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
        <!--Phone Number -->
        <div class="flex flex-col gap-[16px] w-full text-grey3">
          <label for="password" class="font-bold text-light_brownish"
            >Phone Number</label
          >
          <VuePhoneNumberInput
            v-model="phone"
            size="lg"
            color="#BDBDBD"
            valid-color="#BDBDBD"
            error-color="#BDBDBD"
            no-example="true"
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
            placeholder="Please input your password"
            v-model="password"
            @input="watchPassword"
            ref="passwordInput"
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

        <!-- Country -->
        <div class="flex flex-col gap-[16px] w-full">
          <label for="country" class="font-bold text-light_brownish"
            >Country</label
          >
          <select
            required
            v-model="country"
            class="
              h-[55px]
              px-[32px]
              border border-grey4
              bg-transparent
              text-grey3
              rounded-[4px]
            "
          >
            <option
              :value="country"
              v-for="(country, index) in countryList"
              :key="index"
            >
              {{ country }}
            </option>
          </select>
        </div>

        <!-- City -->
        <div class="flex flex-col gap-[16px] w-full">
          <label for="email" class="font-bold text-light_brownish">City</label>
          <input
            type="text"
            placeholder="Enter your city"
            class="
              h-[55px]
              px-[32px]
              border border-grey4
              bg-transparent
              text-grey3
              rounded-[4px]
            "
            v-model="city"
            required
          />
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
          ref="signupBtn"
        >
          Sign up
        </button>
        <!-- Dont have an account -->
        <div class="self-center">
          <p class="text-grey3 d">
            Have an account already?
            <a href="/login" class="text-light_brownish font-bold">Log in</a>
          </p>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import Vue from "vue";
import zxcvbn from "zxcvbn";
import { countryList } from "../utils/countries";
import VuePhoneNumberInput from "vue-phone-number-input";
export default {
  layout: "auth",
  head() {
    return {
      title: "CodedEvents | Signup",
      meta: [
        {
          hid: "Signup",
          name: "Signup",
          content:
            "CodedEvents, Signup, CodedEvents Signup, Signup to your account",
        },
      ],
    };
  },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      password: "",
      cPassword: "",
      country: "",
      city: "",
      countryList,
      passwordStrength: false,
      passwordStrong: "Very Weak",
      isPasswordStrong: false,
    };
  },
  methods: {
    async register() {
      if (this.isPasswordStrong === true) {
        if (this.password !== this.cPassword) {
          Vue.$toast.open({
            message: "Password must match",
            type: "error",
          });
        } else {
          this.$refs.signupBtn.disabled = true;
          this.$refs.signupBtn.style.cursor = "not-allowed";
          await this.$axios
            .$post(process.env.APP_BASE_URL + "auth/register", {
              email: `${this.email}`,
              password: `${this.password}`,
              name: `${this.name}`,
              phone: `${this.phone}`,
              country: `${this.country}`,
              city: `${this.city}`,
            })
            .then((res) => {
              if (res.data.token) {
                localStorage.setItem("codedEvents_USER_TOKEN", res.data.token);
                Vue.$toast.open({
                  message: res.message,
                  type: "success",
                });
                this.$router.push("/verify");
              }
            })
            .catch((err) => {
              this.$refs.signupBtn.disabled = false;
              this.$refs.signupBtn.style.cursor = "pointer";
              let error = err.response;
              if (error.status === 422) {
                Vue.$toast.open({
                  message: "User already exists",
                  type: "error",
                });
              } else if (error) {
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
  components: { VuePhoneNumberInput },
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