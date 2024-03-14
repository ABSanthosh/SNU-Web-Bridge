<header class="Header">
  <div class="Header__container">
    <img src="/assets/images/SNU_white.svg" alt="Snu" />
    <img src="/assets/images/WEB_white.svg" alt="Web" />
  </div>
</header>

<style lang="scss">
  .Header {
    @include make-flex();
    @include box(100%, 140px);
    transition: all 0.5s ease-in-out;
    @include respondAt(720px){
      height: 120px;
    }
    @include respondAt(530px){
      height: 90px;
    }

    &__container {
      padding: 20px;
      @include box();
      max-width: $maxWidth;
      @include make-flex($dir: row, $just: space-between);

      & > img {
        @include box(auto);
      }
    }
  }
</style>
