<template>
  <NavbarComp />
  <main
    class="container py-5 d-flex flex-column align-items-center text-center"
  >
    <img
      class="img-illus mb-3"
      src="/img/failed-icon.svg"
      alt="illustration failed"
    />
    <h2 class="fw-bold">Pembayaran Gagal, Mohon Ulangi Pesanan Anda</h2>
    <p class="mb-4">
      Pesanan anda tidak masuk ke Resto karena pembayaran gagal.
    </p>
    <router-link to="/">
      <button class="btn btn-primary">Kembali ke Halaman Menu</button>
    </router-link>
  </main>
</template>

<script>
import NavbarComp from "@/components/NavbarCompLogged.vue";
export default {
  name: "FailedPayment",
  components: {
    NavbarComp,
  },
};
</script>

<style>
</style>