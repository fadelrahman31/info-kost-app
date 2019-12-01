<template>

</template>

<script>
export default {
  name: 'login',
  mounted() {
    const baseUrl = process.env.NUXT_ENV_BASE_URL || "http://localhost:3000";
    const redirectTo = `${baseUrl}/user/auth`
    window.location.href = (`${process.env.NUXT_ENV_LOGIN_BASEURL}/login?redirect_uri=${encodeURIComponent(redirectTo)}`);
  }
}
</script>

<style scoped>

</style>
