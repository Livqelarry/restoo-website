<template>
  <NavbarCompVue />
  <main class="container py-5">
    <div v-for="item in products">
      <CardMenus :item="item" @tambah="tambah" @kurang="kurang" />
    </div>
  </main>

  <div v-if="showCart" class="wrapper-float-cart pb-3">
    <div class="container">
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
            <span> 1 item </span>
          </div>
          <span> 5.400 </span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import NavbarCompVue from "@/components/NavbarComp.vue";
import CardMenus from "@/components/CardMenus.vue";
export default {
  name: "MenusView",
  data() {
    return {
      showCart: false,
      products: [
        {
          id: 1,
          title: "Air Mineral",
          desc: "500 ml",
          price: 5400,
          selected: 0,
        },
        {
          id: 2,
          title: "Salad Madu Cilacap",
          desc: "Makanan khas cilacap",
          price: 15000,
          selected: 0,
        },
      ],
    };
  },
  components: {
    NavbarCompVue,
    CardMenus,
  },
  methods: {
    tambah(id) {
      this.products.forEach((item) => {
        if (item.id == id) {
          item.selected++;
        }
        this.cart();
      });
    },
    kurang(id) {
      this.products.forEach((item) => {
        if (item.id == id) {
          item.selected = item.selected - 1;
        }
        this.cart();
      });
    },
    cart() {
      let total_barang = 0;
      this.products.forEach((item) => {
        total_barang += item.selected;
      });
      if (total_barang == 0) {
        this.showCart = false;
      } else {
        this.showCart = true;
      }
    },
  },
};
</script>

<style>
</style>