<template>
  <div class="navbar text-white">
    <div class="container d-flex justify-content-center">
      <h1 class="mb-0 fw-bold">Restoo</h1>
    </div>
  </div>
</template>

<script>
import script from "@/mixins/script";
export default {
  name: "NavbarComp",
  mixins: [script],
  methods: {
    checkLoggin() {
      if (this.getCookie("jwt") !== "") {
        this.$router.push("/Menus");
      }
    },
  },
  mounted() {
    this.checkLoggin();
  },
};
</script>

<style>
</style>