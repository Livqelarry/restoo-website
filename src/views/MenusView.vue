<template>
  <NavbarCompVue />
  <main class="container py-5">
    <div class="card-menu p-3 rounded d-flex justify-content-between">
      <div class="d-flex flex-column justify-content-between">
        <div>
          <h3 class="fw-bold mb-0">Air Mineral</h3>
          <p class="mb-0">600 ml</p>
        </div>
        <p class="mb-0">5.400</p>
      </div>
      <div class="d-flex flex-column align-items-end">
        <img
          class="img-product rounded mb-2"
          src="/img/dummy.jpg"
          alt="dummy"
        />
        <button class="btn btn-menu btn-outline-primary">tambah</button>
      </div>
    </div>
  </main>
</template>

<script>
import NavbarCompVue from "@/components/NavbarComp.vue";
export default {
  name: "MenusView",
  components: {
    NavbarCompVue,
  },
};
</script>

<style>
</style>