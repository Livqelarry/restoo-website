<template>
  <div class="navbar text-white">
    <div class="container d-flex justify-content-between">
      <h1 class="mb-0 fw-bold">Restoo</h1>
      <button class="btn btn-outline-primary bg-white" @click="handleLogout">
        Logout
      </button>
    </div>
  </div>
</template>

<script>
import script from "@/mixins/script";
import Swal from "sweetalert2";
export default {
  name: "NavbarCompLogged",
  mixins: [script],
  methods: {
    checkLoggin() {
      if (this.getCookie("jwt") == "" || this.getCookie("jwt") == undefined) {
        this.$router.push("/");
      }
    },
    handleLogout() {
      Swal.fire({
        title: "Logout",
        text: "Yakin untuk keluar?",
        icon: "warning",
        confirmButtonText: "Logout",
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonColor: "#5800FF",
      }).then((result) => {
        if (result.isConfirmed) {
          this.setCookie("jwt", "", 0);
          this.$router.push("/");
        }
      });
    },
  },
  mounted() {
    this.checkLoggin();
  },
  updated() {
    this.checkLoggin();
  },
};
</script>

<style>
</style>