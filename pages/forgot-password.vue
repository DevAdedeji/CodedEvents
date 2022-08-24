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
        Forgot Password
      </h1>
      <p class="absolute right-[25px]">Password</p>
    </div>
    <div>
      <email v-if="emailModal" @confirmationPinSent="openConfirmPinModal" />
      <ConfirmPin
        v-if="confirmPinModal"
        :email="email"
        @pinConfirmed="openResetPasswordModal"
      />
      <resetPassword v-if="resetPasswordModal" :email="email" :token="token" />
    </div>
  </main>
</template>

<script>
import email from "../components/auth/email.vue";
import resetPassword from "../components/auth/resetPassword.vue";
import ConfirmPin from "../components/auth/confirmPin.vue";
export default {
  layout: "auth",
  head() {
    return {
      title: "CodedEvents | Forgot Password",
      meta: [
        {
          hid: "Forgot password",
          name: "Forgot password",
          content:
            "CodedEvents, Forgot password, CodedEvents Forgot password, Forgot password",
        },
      ],
    };
  },
  data() {
    return {
      emailModal: true,
      confirmPinModal: false,
      resetPasswordModal: false,
      email: "",
      token: "",
    };
  },
  methods: {
    openConfirmPinModal(val) {
      this.emailModal = false;
      this.resetPasswordModal = false;
      this.confirmPinModal = true;
      this.email = val;
    },
    openResetPasswordModal(val) {
      this.emailModal = false;
      this.resetPasswordModal = true;
      this.confirmPinModal = false;
      this.token = val;
    },
  },
  components: {
    email,
    resetPassword,
    ConfirmPin,
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