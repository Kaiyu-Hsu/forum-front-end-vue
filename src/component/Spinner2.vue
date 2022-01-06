<template>
  <div class="loader-container d-flex justify-content-center">
    <div class="loader"></div>
  </div>
</template>

<style scoped>
.loader {
  margin-top: 100px;
  border: 16px solid #f3f3f3;
  border-top: 16px solid #bd2333;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
