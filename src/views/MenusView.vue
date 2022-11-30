<template>
  <NavbarCompVue />
  <main class="container py-5">
    <div v-for="item in products">
      <CardMenus :item="item" @tambah="tambah" @kurang="kurang" />
    </div>
  </main>
</template>

<script>
import NavbarCompVue from "@/components/NavbarComp.vue";
import CardMenus from "@/components/CardMenus.vue";
export default {
  name: "MenusView",
  data() {
    return {
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