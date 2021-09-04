<template>
   <div class="layout-x bordered">
     <img class="draft-top" src="~/assets/draft-top.svg" alt="">
     <img class="profile-image" src="~/assets/portrait.jpeg" alt="">

      <div class="greetings">
        <h4 class="title">Hey,</h4>
        <p class="text">I'm a designer and photographer from Alicante specializing in creating human-centered experiences, and product designs.</p>
        <p class="text">I currently work as a freelance product designer in Alicante.</p>
        <p class="text">If you'd like to see some of my previous work, contact me.</p>

        <h4 class="title">U can find me here:</h4>
        <ul class="media">
          <li><a class="link" href="https://twitter.com/itskarlachi">Twitter</a><span class="dot">·</span></li>
          <li><a class="link" href="https://dribbble.com/karlachi">Dribble</a><span class="dot">·</span></li>
          <li><a class="link" href="https://www.linkedin.com/in/karlavidalchi/">Linkedin</a></li>
        </ul>
      </div>

     <div class="hobbies">
      <h4 class="title">Life outside design</h4> 
      <p class="text">
        When I’m not designing, I like to read and learn new analog skills (currently, it’s chochet and analog photography!). I also love video games. 
      </p>
      <p class="text">I'm equally passionate about history and art.</p>
     </div>
     <img class="draft-bottom" src="~/assets/squiggles.svg" alt="">
  </div> 
</template>

<style scoped lang="scss">
.layout-x {
  display: grid;
  grid-template-columns: 15% 1fr 1fr;
  grid-template-rows: 1fr;
  max-width: 90%;
  align-items: center;
  justify-items: center;
  padding-bottom: 32px;
  margin-top: 32px;
  padding-right: 16px;
  box-sizing: border-box;
  margin-left: -8px;
  border-bottom: 0;
  z-index: 1;

  &.bordered {
    position: relative;
    border: 1px solid #fff;
    border-radius: 8px;
    border-bottom-right-radius: 0;
    border-bottom: none;

    &::before {
      border-radius: 8px;
      border: 1px solid #fff;
      content: "";
      position: absolute;
      top: -16px;
      left: -16px;
      right: 16px;
      bottom: 16px;
      border-bottom: 0;
      border-bottom-right-radius: 0;
      margin-bottom: -16px;
    }
  }

  .draft-top {
    position: absolute;
    top: -72px;
    left: 0;
    z-index: 1;
    width: 200px;
  }

  .draft-bottom{
    position: absolute;
    bottom: 0;
    right: -80px;
    z-index: 1;
    width: 260px;
  }

  .profile-image {
    max-width: 344px;
    width: 100%; 
    height: 344px;
    background: grey;
    border-radius: 50%;
    z-index: 2;
    grid-column: 2;
  }

  .title {
    color: white;
    font-weight: 500;
    font-size: 32px;
  }

  .greetings {
    max-width: 450px;
    z-index: 1;
    grid-column: 3;

    .title {
      margin: 16px 0 16px 0;
    }
  }

  .hobbies {
    max-width: 450px;
    grid-column: 2;

    .title {
      margin: 16px 0 16px 0;
    }
  }


  .media {
    display: flex;
    padding: 0;
    margin-bottom: 0;

    li {
      margin-right: 16px;
      list-style: none;

      .link {
        color: #F90;
        font-size: 24px;
        text-decoration: underline;
        font-weight: 300;
      }

      .dot {
        font-weight: bold;
        margin-left: 16px;
        color: white;
        text-decoration: none;
      }
    }
  }

  .text {
    color: white;
    margin: 0 0 16px 0;
    font-size: 24px;
  }

  .panel {
    position: absolute;
    width: 100%;
    background:white;
    height: 32px;
    bottom: 0;
  }
}

@media screen and (max-width: 1180px) {
  .layout-x {
    grid-template-columns: 1fr;
    max-width: 100%;
    padding: 0;
    margin: 0;

    &.bordered {
      border: 0;
      padding: 32px;

      &::before {
        border: 0;
      }
    }

    .profile-image {
      grid-column: 1;
    }

    .greetings {
      grid-column: 1;
    }
    .hobbies {
      grid-column: 1;
    }


  .draft-bottom{
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
    width: 260px;
  }
    .media {
      li {
        margin: 0;
      .dot {
        margin: 0;
        margin: 0 6px 0 6px;
      }
      }
    }

  }
}

@media screen and (max-width: 960px) {
  .layout-x {
    .draft-top {
      display: none;
    }

    .draft-bottom {
      display: none;
    }

    &.bordered {
      border: 0;
      padding: 32px;

      &::before {
        border: 0;
      }
    }

    .media {
      li {
        margin: 0;
      .dot {
        margin: 0;
        margin: 0 6px 0 6px;
      }
      }
    }

  }
}

</style>