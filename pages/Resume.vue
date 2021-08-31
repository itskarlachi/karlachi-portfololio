<template>
<div class="layout">
    <NavBar />
    <Resume />
</div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Resume from '@/components/Resume'

export default {
  components: {
    NavBar,
    Resume,
  }
}
</script>

<style>
html, body {
  font-family: Montserrat, 'Courier New', Courier, monospace;
  margin: 0;
  padding: 0;
  background: black;
  color: white;
  height: 100vh;
}


.layout {
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
}
</style>