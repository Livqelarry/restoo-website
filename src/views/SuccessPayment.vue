<template>
  <NavbarComp />
  <main
    class="container py-5 d-flex flex-column align-items-center text-center"
  >
    <img
      class="img-illus mb-3"
      src="/img/illus-success.png"
      alt="illustration cooking"
    />
    <h2 class="fw-bold">Pesanan Anda Sudah Masuk ke Resto</h2>
    <p class="mb-4">Pesanan akan segera diantarkan.</p>
    <router-link to="/">
      <button class="btn btn-primary">Kembali ke Halaman Menu</button>
    </router-link>
  </main>
</template>

<script>
import NavbarComp from "@/components/NavbarCompLogged.vue";
export default {
  name: "SuccessPayment",
  components: {
    NavbarComp,
  },
};
</script>

<style>
</style>