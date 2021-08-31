<template>
   <div class="layout-x">
     <!-- <img class="border" src="border.svg" alt=""> -->
     <img class="profile-image" src="" alt="">

      <div class="greetings">
        <h4 class="title">Hey,</h4>
        <p class="text">I'm a designer and photographer from Alicante specializing in creating human-centered experiences, and product designs.</p>
        <p class="text">I currently work as a freelance product designer in Alicante.</p>
        <p class="text">If you'd like to see some of my previous work, contact me.</p>

        <h4 class="title">U can find me here:</h4>
        <ul class="media">
          <li><a class="link">Twitter</a></li>
          <li><a class="link">Dribble</a></li>
          <li><a class="link">Linkedin</a></li>
        </ul>
      </div>

     <div class="hobbies">
      <h4 class="title">Life outside design</h4> 
      <p class="text">
        When I’m not designing, I like to read and learn new analog skills (currently, it’s chochet and analog photography!). I also love video games. 
      </p>
      <p class="text">I'm equally passionate about history and art.</p>
     </div>
  </div> 
</template>

<style scoped lang="scss">
.layout-x {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  // grid-column-gap: 124px;
  max-width: 90%;
  background: red;
  background-image: url("/border-cut.svg");
  background-repeat: no-repeat;
  // background-size: contain;
  object-fit: fill;
  background-position-y: initial;
  background-position-x: right;
  align-items: center;
  justify-items: center;

  .border {
    position: absolute;
    width: 100%;
  }

  .profile-image {
    width: 344px;
    height: 344px;
    background: grey;
    border-radius: 50%;
    margin-bottom: 56px;
  }

  .greetings {
    max-width: 450px;
  }

  .hobbies {
    max-width: 450px;
  }

  .title {
    color: white;
    font-weight: 500;
    font-size: 32px;
    margin-bottom: 8px;
  }

  .media {
    display: flex;
    text-decoration:none;
  }

  .text {
    color: white;
    margin: 0 0 16px 0;
    font-size: 24px;
  }

}
</style>