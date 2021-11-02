<template>
  <div id="restaurant-forum">
    <Navbar />
    <main role="main" class="mt-5 bg-white">
      <router-view />
    </main>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Navbar from "./component/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style scoped>
main {
  margin-top: 65px !important;
}
</style>
