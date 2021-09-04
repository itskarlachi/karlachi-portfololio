<template>
<div class="layout">
  <div class="column-1" >
    <div class="project bordered">
      <img src="~/assets/project_chat.jpg" alt="" class="image">
      <h3 class="title">Chat</h3>
      <p class="description">A chat inspo I did for fun</p>
    </div>

    <div class="project">
      <img src="~/assets/project_car.jpg" alt="" class="image">
      <h3 class="title">Car</h3>
      <p class="description">Because of NDA, I could not share one of the projects where I have worked for the longest time, a car-sharing application where you can choose different operators and hire their services without needing several other applications. Here is the redesign I did of that application to add it to my portfolio.</p>
    </div>
 
    <div class="project">
      <img src="~/assets/project_anime.jpg" alt="" class="image">
      <h3 class="title">Dashboard</h3>
      <p class="description">The conceptual idea of a dashboard.</p>
    </div>

    <div class="project bordered">
      <img src="~/assets/project_menu.jpg" alt="" class="image">
      <h3 class="title">Menu</h3>
      <p class="description">A simple idea of a menu to practice.</p>
    </div>

    <div class="project">
      <img src="~/assets/project_plantz.jpg" alt="" class="image">
      <h3 class="title">Plantz</h3>
      <p class="description">Plantz is a personal idea. From my first projects, you can see the evolution. It is an application that allows you to control the state of your plants.</p>
    </div>

  </div>
  <div class="column-2" >
    <div class="project">
      <img src="~/assets/project_bookz.jpg" alt="" class="image">
      <h3 class="title">Bookz</h3>
      <p class="description">Bookz is a personal project. The idea is that of a social network of books, where you can record your TBR, give your opinion, have groups with people with similar tastes, etc. At first, it was to have a compilation of the books he had read to me, but it iterated into something much bigger.</p>
    </div>

    <div class="project bordered">
      <img src="~/assets/project_food.jpg" alt="" class="image">
      <h3 class="title">Food</h3>
      <p class="description">Food is the redesign of a recipe website that I was working on. The functionality of the web is quite simple. It allows you to see recipes and save your favorite recipes.</p>
    </div>

    <div class="project">
      <img src="~/assets/project_sound.jpg" alt="" class="image">
      <h3 class="title">Sound</h3>
      <p class="description">I use the A soft murmur app a lot, and it inspired me to create a little redesign.</p>
    </div>

    <div class="project">
      <img src="~/assets/project_music.jpg" alt="" class="image">
      <h3 class="title">Music</h3>
      <p class="description">As a K-POP fan, I was inspired one day by BLACKPINK and designed two screens of what would be a music app.</p>
    </div>

    <div class="project bordered">
      <img src="~/assets/project_coffee.jpg" alt="" class="image">
      <h3 class="title">Coffee</h3>
      <p class="description">Another of my first projects, "coffee-app," is a relatively simple application that helps you find coffee shops near you and that also says if they have different services such as Wi-Fi, vegan dishes, etc.</p>
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
    
      &:last-child {
        margin-bottom: 48px;
      }


      .image {
        width: 100%;
        margin-bottom: 32px;
      }

      .title {
        margin: 0 0 8px 0;
        font-size: 32px;
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