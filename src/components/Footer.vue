<template>
  <footer>
    Copyright {{getCurrentYear}} by
    <a :href="href">CodeArtistry</a>
  </footer>
</template>

<script>
export default {
  data: () => ({
    href: "http://codeartistry.io"
  }),
  computed: {
    getCurrentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style>
footer {
  text-align: center;
  color: #00a672;
  letter-spacing: 0.5px;
  padding: 20px;
}
</style>

