<template>
  <NavbarComp />
  <main class="pt-3 pb-100">
    <!-- title -->
    <div class="title container mb-3">
      <p class="mb-0 fs-2 fw-bold">Checkout</p>
    </div>
    <!-- menus selected -->
    <div class="menus container">
      <div v-for="(item, index) in dataCart.produk" v-if="dataCart">
        <CardMenusCart
          :item="item"
          :indexCart="index"
          @deleteCart="deleteCart"
        />
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
        <div v-for="item in dataCart.produk" v-if="dataCart">
          <div class="d-flex justify-content-between py-2">
            <span> {{ item.nama }} x{{ item.qty }} </span>
            <span> {{ item.harga }} </span>
          </div>
        </div>
        <div class="total-payment py-3 d-flex justify-content-between">
          <span>Total Pembayaran </span>
          <span class="fw-bold" v-if="dataCart">Rp {{ dataCart.total }} </span>
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
          <button class="btn btn-primary w-100" @click="handleCheckout">
            Pesan dan Bayar Sekarang
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import NavbarComp from "@/components/NavbarCompLogged.vue";
import CardMenusCart from "@/components/CardMenusCart.vue";
import axios from "axios";
import script from "@/mixins/script";
export default {
  name: "CheckoutView",

  components: {
    NavbarComp,
    CardMenusCart,
  },
  data() {
    return {
      dataCart: null,
    };
  },
  mixins: [script],
  methods: {
    tambah(id, qty) {
      console.log(id, qty);
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.getCookie("jwt")}`,
        },
        body: JSON.stringify({ id_meja: "1", id_produk: id, qty: qty }),
      };

      fetch("https://restoo.xetup.id/api/keranjang", options)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          this.getCart();
        })
        .catch((err) => console.error(err));
    },
    kurang(id) {
      this.products.forEach((item) => {
        if (item.id == id) {
          item.selected = item.selected - 1;
        }
      });
    },
    deleteCart(index) {
      const self = this;
      const options = {
        method: "DELETE",
        url: "https://restoo.xetup.id/api/keranjang/" + index,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.getCookie("jwt")}`,
        },
      };
      axios
        .request(options)
        .then(function (response) {
          console.log(response);
          self.getCart();
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    getCart() {
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.getCookie("jwt")}`,
        },
      };

      fetch("https://restoo.xetup.id/api/keranjang", options)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          this.dataCart = response.data;
        })
        .catch((err) => console.error(err));
    },
    handleCheckout() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.getCookie("jwt")}`,
        },
        body: '{"id_meja":1}',
      };

      fetch("https://restoo.xetup.id/api/checkout", options)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          this.$router.push("/success-payment");
        })
        .catch((err) => console.error(err));
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>

<style>
</style>