<template>
  <NavbarComp />
  <main class="pt-3 pb-100">
    <!-- title -->
    <div class="title container mb-3">
      <p class="mb-0 fs-2 fw-bold">Checkout</p>
    </div>
    <!-- menus selected -->
    <div class="menus container">
      <CardMenus />
      <CardMenus />
      <CardMenus />
    </div>
    <!-- cta -->
    <div class="cta py-3 mb-3">
      <div class="container d-flex justify-content-between align-items-center">
        <div>
          <h4 class="fw-bold mb-0">Ada lagi pesanannya?</h4>
          <p class="mb-0">Pesan menu yang lain.</p>
        </div>
        <button class="btn btn-primary">Pesan</button>
      </div>
    </div>
    <!-- ringkasan pembayaran -->
    <div class="container">
      <div class="recap p-3 rounded">
        <h6 class="fw-bold">Ringkasan Pembayaran</h6>
        <div class="d-flex justify-content-between py-2">
          <span> Air Mineral x2 </span>
          <span> 5.400 </span>
        </div>
        <div class="total-payment py-3 d-flex justify-content-between">
          <span>Total Pembayaran </span>
          <span class="fw-bold"> 10.800 </span>
        </div>
      </div>
    </div>
    <!-- pay button -->
    <div class="float-pay">
      <div class="bg-light-gray py-2">
        <div class="container">
          <p class="mb-0 fs-7">
            Pesan dan bayar kemudian pelayan resto akan segera datang dengan
            pesanan anda.
          </p>
        </div>
      </div>
      <div class="py-3">
        <div class="container">
          <button class="btn btn-primary w-100">
            Pesan dan Bayar Sekarang
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import NavbarComp from "@/components/NavbarComp.vue";
import CardMenus from "@/components/CardMenus.vue";
export default {
  name: "CheckoutView",
  components: {
    NavbarComp,
    CardMenus,
  },
};
</script>

<style>
</style>