<template>
  <div>
    <Nav />
    <!-- <div class="jumbotron2"></div>-->
    <img
      src="@/static/images/introduzione.jpg"
      class="responsive-img"
      alt="..."
    />
    <!--  <h1>Iscrizioni ai corsi per l’anno accademico 2022/2023</h1> -->
    <Home />
    <Footer />
  </div>
</template>

<style scoped>
.responsive-img {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 600px) {
  .responsive-img {
    height: auto;
  }
}

@media (min-width: 601px) and (max-width: 1200px) {
  .responsive-img {
    height: auto;
  }
}

@media (min-width: 1201px) {
  .responsive-img {
    width: 20%;
  }
}
</style>



