<template>
  <NavbarCompVue />
  <main class="container py-5">
    <div v-for="item in products" v-if="products">
      <CardMenus :item="item" @tambah="tambah" @kurang="kurang" />
    </div>
  </main>

  <div v-if="showCart" class="wrapper-float-cart pb-3">
    <div class="container px-4">
      <router-link to="/checkout">
        <div
          class="
            btn btn-primary
            py-3
            w-100
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <div class="d-flex gap-3 align-items-center">
            <img src="/img/icon-check.svg" alt="icon check" />
            <span> {{ quantity }} item </span>
          </div>
          <span> {{ data_cart.total }} </span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import NavbarCompVue from "@/components/NavbarCompLogged.vue";
import CardMenus from "@/components/CardMenus.vue";

import script from "@/mixins/script";
export default {
  name: "MenusView",
  data() {
    return {
      showCart: false,
      products: null,
      data_cart: null,
      quantity: 0,
    };
  },
  mixins: [script],
  components: {
    NavbarCompVue,
    CardMenus,
  },
  methods: {
    tambah(id) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.getCookie("jwt")}`,
        },
        body: JSON.stringify({ id_meja: "1", id_produk: id, qty: 1 }),
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
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.getCookie("jwt")}`,
        },
        body: JSON.stringify({ id_meja: "1", id_produk: id, qty: -1 }),
      };

      fetch("https://restoo.xetup.id/api/keranjang", options)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          this.getCart();
        })
        .catch((err) => console.error(err));
    },
    getAllMenus() {
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.getCookie("jwt")}`,
        },
      };

      fetch("https://restoo.xetup.id/api/produk", options)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          this.products = response.data;
          this.getCart();
        })
        .catch((err) => {
          this.$router.push("/");
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
          this.data_cart = response.data;
          if (response.data.produk.length > 0) {
            this.showCart = true;
            this.quantity = 0;
            response.data.produk.forEach((item, indexItem) => {
              this.quantity += parseInt(item.qty);
            });
          } else {
            this.showCart = false;
          }
        })
        .catch((err) => console.error(err));
    },
  },
  mounted() {
    this.getAllMenus();
  },
};
</script>

<style>
</style>