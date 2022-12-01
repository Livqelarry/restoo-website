<template>
  <div class="card-menu p-3 rounded d-flex justify-content-between mb-3">
    <div class="d-flex flex-column justify-content-between w-50">
      <div>
        <h3 class="fw-bold mb-0">{{ item.nama }}</h3>
        <p class="mb-0">Dekripsi makanan</p>
      </div>
      <p class="mb-0">{{ item.harga }}</p>
    </div>
    <div class="d-flex flex-column align-items-end w-50">
      <img class="img-product rounded mb-2" src="/img/dummy.jpg" alt="dummy" />
      <!-- <button  
        v-if="showButton"
        @click="tambah"
        class="btn btn-menu btn-outline-primary"
      >
        tambah
      </button> -->
      <div class="d-flex align-items-center gap-3 justify-content-end">
        <!-- <button class="btn btn-transparent" @click="kurang">
          <img src="/img/icon-minus.svg" alt="minus" />
        </button> -->
        <p class="mb-0">{{ item.qty }} item</p>
        <button class="btn btn-trash btn-danger" @click="deleteCart">
          <img src="/img/bx-trash.svg" alt="trash" />
        </button>
      </div>
    </div>
  </div>
</template>
  
  <script>
import script from "@/mixins/script";
export default {
  name: "CardMenusCart",
  props: ["item", "indexCart"],
  data() {
    return {
      showButton: true,
    };
  },
  mixins: [script],
  methods: {
    deleteCart() {
      this.$emit("deleteCart", this.indexCart);
    },
  },
};
</script>
  
  <style>
</style>