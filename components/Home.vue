<template>
<div class="content">
  <img src="~/assets/border_home.svg" alt="" class="border">
  <img src="~/assets/geometric.svg" alt="" class="geometric">

  <div class="center">
    <h2 class="title">Hi, I'm Karla Chi</h2> 
    <p class="text">I am a digital designer focused on <strong lass="bold">Product Design</strong>. Currently, I’m working as a freelance product designer in Spain ✨</p>
   </div>
</div>
</template>

<style scoped lang="scss">
  .content {
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 32px 0 32px;

    .border {
      height: 40vw;
      position: absolute;
      left: 0;
      bottom: 0;
    }
    
    .geometric {
      position: absolute;
      bottom: 0;
      right: 0;
    }

    .center {
      max-width: 420px;

    .title {
        font-size: 32px;
      }
      .text {
        font-weight: 200;
        font-size: 30px;

        .bold {
          font-weight: 400;
        }
      }

    }
  }

@media screen and (max-width: 680px) {
  .content {
    .geometric {
      display: none;
    }

    .border {
      display: none;
    }
  }
}

</style>