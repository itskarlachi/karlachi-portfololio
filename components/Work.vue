<template>
<div class="layout">
  <div class="column-1" >
    <div class="project">
      <img src="~/assets/project_anime.jpg" alt="" class="image">
      <h3 class="title">Anime</h3>
      <p class="description">Concept design of a dashboard</p>
    </div>

    <div class="project">
      <img src="~/assets/project_bookz.jpg" alt="" class="image">
      <h3 class="title">Bookz</h3>
      <p class="description">A personal project. It’s a social media cantered in books. You can share with you friends your current TBR or create a group chat.</p>
    </div>

    <div class="project bordered">
      <img src="~/assets/project_car.jpg" alt="" class="image">
      <h3 class="title">Car</h3>
      <p class="description">Carsharing applications are now on the rise. Here is my grain of sand to these types of apps.</p>
    </div>
    
    <div class="project bordered">
      <img src="~/assets/project_music.jpg" alt="" class="image">
      <h3 class="title">Music</h3>
      <p class="description">Inspired by BLACKPINK I designed a music app</p>
    </div>
    <div class="project bordered">
      <img src="~/assets/project_plantz.jpg" alt="" class="image">
      <h3 class="title">Plantz</h3>
      <p class="description">Simple design for an app that allows you to follow the care of your plants.</p>
    </div>

  </div>
  <div class="column-2" >
    <div class="project bordered">
      <img src="~/assets/project_chat.jpg" alt="" class="image">
      <h3 class="title">NameOf the project</h3>
      <p class="description"> A chat inspo I did for fun</p>
    </div>

    <div class="project">
      <img src="~/assets/project_coffee.jpg" alt="" class="image">
      <h3 class="title">Coffee</h3>
      <p class="description">An app where you can find different coffe shop</p>
    </div>

    <div class="project">
      <img src="~/assets/project_food.jpg" alt="" class="image">
      <h3 class="title">Food</h3>
      <p class="description">A simple design about a recipe page. I was looking for some recipe to make in the summer and I came with the idea. 🚀</p>
    </div>
    <div class="project">
      <img src="~/assets/project_menu.jpg" alt="" class="image">
      <h3 class="title">Menu</h3>
      <p class="description"> A quick idea of a menu.</p>
    </div>

    <div class="project bordered">
      <img src="~/assets/project_sound.jpg" alt="" class="image">
      <h3 class="title">sound</h3>
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