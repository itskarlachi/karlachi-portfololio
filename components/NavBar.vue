<template>
  <nav class="nav">
    <ul>
      <li>
        <NuxtLink class="link" to="/">HOME</NuxtLink>
      </li>
      <li class="link">
        <NuxtLink class="link" to="/work">WORK</NuxtLink>
      </li>
      <li class="link">
        <NuxtLink class="link" to="/about">ABOUT</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.exact-active-link {
  font-weight: 600;
}

.nav {
  display: flex;
  justify-content: flex-end;
  color: white;
  font-size: 24px;
  padding: 16px 32px;

  ul {
    display: flex;
    padding: 0;
    margin: 0;

    li {
      text-decoration: none; 
      list-style: none;
      margin-right: 56px;

      li:last-child {
        margin-right: 0;  
      }

      a {
        text-decoration: none;
        color: white;
      }
    }
  }
}

@media screen and (max-width: 620px) {
  .nav {
    ul {
      width: 100%;
      justify-content: space-evenly;
      padding: 0;
      li {
        margin: 0;

        a {
          // font-size: 12px;
          text-decoration: none;
          color: white;
        }
      }
    }
  }
}

@media screen and (max-width: 450px) {
  .nav {
    ul {
      width: 100%;
      justify-content: space-evenly;
      padding: 0;
      li {
        margin: 0;

        a {
          font-size: 18px;
          text-decoration: none;
          color: white;
        }
      }
    }
  }
}
</style>