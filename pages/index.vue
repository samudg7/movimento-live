<template>
  <div>
    <Nav />
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="2000">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/static/images/introduzione.jpg" class="d-block w-100 responsive-img" alt="...">
          <div class="carousel-caption">
            <h5>Benvenuti alla Scuola Danza Grazia Paulon</h5>
            <p>Scopri i nostri corsi e spettacoli</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/static/images/gambaSbarra.jpg" class="d-block w-100 responsive-img" alt="...">
          <div class="carousel-caption">
            <h5>Lezioni di Danza</h5>
            <p>Per tutti i livelli e tutte le età</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/static/images/iscrizioni.jpg" class="d-block w-100 responsive-img" alt="...">
          <div class="carousel-caption">
            <h5>Iscrizioni Aperte</h5>
            <p>Unisciti a noi per l'anno accademico 2025/2026</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev custom-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next custom-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
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

.carousel-item {
  height: 70vh;
  min-height: 300px;
  background: no-repeat center center scroll;
  background-size: cover;
}

.carousel-caption {
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border-radius: 10px;
}

.carousel-caption h5 {
  font-size: 2rem;
  font-weight: bold;
}

.carousel-caption p {
  font-size: 1.2rem;
}

.custom-prev, .custom-next {
  width: 5%;
}

@media (max-width: 600px) {
  .carousel-caption {
    display: block;
  }

  .carousel-caption h5 {
    font-size: 1.5rem;
  }

  .carousel-caption p {
    font-size: 1rem;
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
    height: 100%;
  }

  .carousel-caption, .custom-prev, .custom-next {
    position: absolute;
    top: 80%;
    transform: translateY(-50%);
  }

  .custom-prev {
    left: 30px;
  }

  .custom-next {
    right: 30px;
  }

  .carousel-caption {
    padding: 0.5rem;
    border-radius: 5px;
  }

  .carousel-caption h5 {
    font-size: 1.5rem;
  }

  .carousel-caption p {
    font-size: 1rem;
  }
}
</style>



