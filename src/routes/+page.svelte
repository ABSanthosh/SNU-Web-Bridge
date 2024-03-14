<script>
  import Header from "$components/Header.svelte";
</script>

<Header />
<main class="Landing">
  <div class="Landing__hero">
    <h2>Welcome to</h2>
    <h1>WEB Bridge</h1>
    <h2>platform</h2>
    <p>
      Here you will find information, advise and answers to your questions to
      support your board journey
    </p>
  </div>
  <form class="Landing__form">
    <h2>Login</h2>
    <label class="CrispLabel" for="email">
      <span style="color: inherit;" data-mandatory> Email </span>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        class="CrispInput"
      />
    </label>
    <label class="CrispLabel" for="password">
      <span style="color: inherit;" data-mandatory> Password </span>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        class="CrispInput"
      />
    </label>
    <button class="CrispButton" data-type="black-outline" type="submit"
      >Login</button
    >
  </form>
</main>

<style lang="scss">
  .Landing {
    gap: 55px;
    margin-top: 64px;
    max-width: $maxWidth;
    @include box($height: auto);
    padding: 20px 20px 20px 20px;
    @include make-flex($just: flex-start);

    & > * {
      z-index: 1;
    }

    &__hero {
      @include make-flex();
      & > h2 {
        font-size: 60px;
        color: white;
        text-align: center;
        font-weight: 600;
        @include respondAt(660px) {
          font-size: 40px;
        }

        @include respondAt(530px) {
          font-size: 30px;
        }
      }

      & > h1 {
        font-size: 100px;
        color: white;
        text-align: center;
        font-weight: 700;

        @include respondAt(660px) {
          font-size: 80px;
        }

        @include respondAt(530px) {
          font-size: 60px;
        }

        @include respondAt(400px) {
          font-size: 50px;
        }
      }

      & > p {
        width: 55%;
        color: white;
        font-size: 23px;
        font-weight: 400;
        margin-top: 20px;
        text-align: center;
        @include respondAt(660px) {
          font-size: 20px;
          width: 100%;
        }

        @include respondAt(530px) {
          font-size: 18px;
        }
      }
    }

    &__form {
      gap: 20px;
      padding: 20px;
      max-width: 400px;
      border-radius: 10px;
      @include make-flex();
      @include box($height:auto);
      background-color: whitesmoke;
    }

    &::after {
      --__height: 870px;
      --__width: 1000px;
      --__negativeYOffset: 170px;
      --__negativeXOffset: 50px;

      content: "";
      z-index: 0;
      position: fixed;
      bottom: calc(-1 * calc(var(--__height) / 2) + var(--__negativeYOffset));
      right: calc(-1 * calc(var(--__width) / 2) + var(--__negativeXOffset));
      filter: opacity(0.3);
      background-size: contain;
      @include box(var(--__width), var(--__height));
      background-position: center;
      background-repeat: no-repeat;
      background-image: url(/assets/images/WEB_logo.svg);
      transition: all 0.5s ease-in-out;

      @include respondAt(1200px) {
        --__height: 650px;
        --__width: 760px;
        --__negativeYOffset: 130px;
      }
    }
  }
</style>
