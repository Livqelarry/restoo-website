<template>
  <div class="home">
    <NavbarCompVue />
    <main class="py-5">
      <div class="container">
        <h3 class="fw-bold">Silahkan login terlebih dahulu.</h3>
        <p class="text-secondary">
          Untuk pesan makanan, anda harus login terlebih dahulu.
        </p>
        <div class="d-flex flex-column gap-2 mb-4">
          <label for="username">Username</label>
          <input
            type="text"
            class="form-control"
            placeholder="Masukkan username anda"
            ref="username"
          />
        </div>

        <button class="btn btn-primary" @click="handleLogin()">Login</button>
      </div>
    </main>
  </div>
</template>

<script>
import NavbarCompVue from "@/components/NavbarComp.vue";
import script from "@/mixins/script";
import Swal from "sweetalert2";

export default {
  name: "HomeView",
  data() {
    return {};
  },
  components: {
    NavbarCompVue,
  },
  mixins: [script],
  methods: {
    // handle login
    handleLogin() {
      const input = this.$refs.username.value;

      if (input.length <= 2) {
        return Swal.fire({
          title: "Masukkan Username lebih dari 2 Karakter",
          // text: "",
          icon: "warning",
          confirmButtonColor: "#5800FF",
          confirmButtonText: "Okey",
        });
      }

      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: input }),
      };

      fetch("https://restoo.xetup.id/api/login", options)
        .then((response) => response.json())
        .then((response) => {
          if (
            response.msg === "Login gagal, Silahkan daftar terlebih dahulu."
          ) {
            this.handleReg(input);
          }
          this.setCookie("jwt", response.data.token, 1);
          this.$router.push("/menus");
        })
        .catch((err) => {
          console.error(err);
        });
    },
    handleReg(input) {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: input }),
      };

      fetch("https://restoo.xetup.id/api/register", options)
        .then((response) => response.json())
        .then((response) => {
          this.handleLogin();
        })
        .catch((err) => console.error(err));
    },
  },
};
</script>
