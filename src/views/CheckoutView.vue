<template>
  <NavbarComp />
  <main class="pt-3 pb-100">
    <!-- title -->
    <div class="title container mb-3">
      <p class="mb-0 fs-2 fw-bold">Checkout</p>
    </div>
    <!-- menus selected -->
    <div class="menus container">
      <div v-for="item in products">
        <CardMenus :item="item" @tambah="tambah" @kurang="kurang" />
      </div>
    </div>
    <!-- cta -->
    <div class="cta py-3 mb-3">
      <div class="container d-flex justify-content-between align-items-center">
        <div>
          <h4 class="fw-bold mb-0">Ada lagi pesanannya?</h4>
          <p class="mb-0">Pesan menu yang lain.</p>
        </div>
        <router-link to="/menus">
          <button class="btn btn-primary">Pesan</button>
        </router-link>
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
          <router-link to="/success-payment">
            <button class="btn btn-primary w-100">
              Pesan dan Bayar Sekarang
            </button>
          </router-link>
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
  data() {
    return {
      products: [
        {
          id: 1,
          title: "Air Mineral",
          desc: "500 ml",
          price: 5400,
          selected: 5,
        },
        {
          id: 2,
          title: "Salad Madu Cilacap",
          desc: "Makanan khas cilacap",
          price: 15000,
          selected: 6,
        },
      ],
    };
  },
  methods: {
    tambah(id) {
      this.products.forEach((item) => {
        if (item.id == id) {
          item.selected++;
        }
      });
    },
    kurang(id) {
      this.products.forEach((item) => {
        if (item.id == id) {
          item.selected = item.selected - 1;
        }
      });
    },
  },
};
</script>

<style>
</style>