<template>
<div class="layout">
  <div class="column-1" >
    <div class="project">
      <img src="/cutekittie.jpg" alt="" class="image">
      <h3 class="title">Name Of the project</h3>
      <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>

    <div class="project">
      <img src="/cutekittie.jpg" alt="" class="image">
      <h3 class="title">Name Of the project</h3>
      <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>

    <div class="project bordered">
      <img src="/cutekittie.jpg" alt="" class="image">
      <h3 class="title">Name Of the project</h3>
      <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
  <div class="column-2" >
    <div class="project bordered">
      <img src="/cutekittie.jpg" alt="" class="image">
      <h3 class="title">NameOf the project</h3>
      <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>

    <div class="project">
      <img src="/cutekittie.jpg" alt="" class="image">
      <h3 class="title">NameOf the project</h3>
      <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>

    <div class="project">
      <img src="/cutekittie.jpg" alt="" class="image">
      <h3 class="title">NameOf the project</h3>
      <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
</div>  
</template>

<style scoped lang="scss">
  .layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    padding: 32px;

    .column-2 {
      padding-top: 170px;
    }

    .project {
      padding: 16px;
      margin-bottom: 170px;

      &.bordered {
        position: relative;
        border: 1px solid #fff;
        border-radius: 8px;
        padding-right: 32px;
        padding-bottom: 32px;
        &::before {
          border-radius: 8px;
          border: 1px solid #fff;
          content: "";
          position: absolute;
          top: -16px;
          left: -16px;
          right: 16px;
          bottom: 16px;
        }
      }


      .image {
        width: 100%;
        margin-bottom: 32px;
      }

      .title {
        margin: 0 0 8px 0;
        font-size: 24px;
        font-weight: 500;
      }

      .description {
        font-size: 24px;
        font-weight: 300;
        margin: 0;
      }
    }
  }


@media screen and (max-width: 680px) {
.layout {
  grid-template-columns: 1fr;
  .column-2 {
    padding-top: 0;
  }

  .project {
    margin-bottom: 64px;
  }
}
}
</style>