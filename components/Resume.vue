<template>
<div class="content">
    <div class="center">
        <img class="image" src="/resume.svg" alt="Click to download resume">
        <img class="border" src="/border.svg" alt="Click to download resume">
    </div>
</div>
</template>

<style scoped lang="scss">
  .content {
    height: 100%;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;

    .center {
      display: flex;
      justify-content: center;
      align-items: center;

      .image {
        width: 496px;
        position: absolute;
      }
    }
  }
</style>