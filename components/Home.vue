<template>
  <!-- media -->
  <div>
    <br />
    <br />
    <ul class="list-unstyled">
      <b-media tag="li">
        <template #aside>
          <b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img>
        </template>
        <h5 class="mt-0 mb-1">Iscrizioni</h5>
        <p class="mb-0">
          Da più di sessant’anni la Scuola coltiva, diffonde e tramanda la grande passione della danza sulle dolci note
           della musica classica. In onore delle indimenticabili professoresse Grazia Paulon e Silvia Zaccaria,
           il figlio Michele e la nipote Maria Vittoria hanno il desiderio di dare continuità a questa magica storia,
            nel rispetto dei valori che da sempre contraddistinguono la Scuola: disciplina, dedizione ma soprattutto
            amore per la meravigliosa arte della danza.
        </p>
      </b-media>

      <b-media tag="li" class="my-4">
        <template #aside>
          <b-img blank blank-color="#cba" width="64" alt="placeholder"></b-img>
        </template>

        <h6 class="mt-0 mb-1"> “Non vorrei che restasse solo un museo ma che da quelle sale nelle quali si respira danza continuasse
         a venire la musica che ascolto da tutta la vita, come era desiderio sia di mia mamma che di Silvia”.</h6>
        <p class="mb-0">

        </p>
      </b-media>

      <b-media tag="li">
        <template #aside>
          <b-img blank blank-color="#bac" width="64" alt="placeholder"></b-img>
        </template>

        <h5 class="mt-0 mb-1">La storia continua</h5>
        <p class="mb-0">
         Con queste parole di Michele, vi annunciamo che dal 1° settembre dalle ore 16:00 alle 18:00 sono aperte
         le iscrizioni ai corsi per l’anno accademico 2022/2023, che proseguirà con l'insegnante Noemi De Grandi,
         diplomata all'Accdemia Teatro alla Scala di Milano, già allieva delle maestre Grazia e Silvia,
         e con la supervisione della ex prima ballerina della Scala - nonché grande amica e collega di Silvia - Gilda Gelati.
        </p>
      </b-media>
    </ul>
    <!-- fine media -->

    <!-- news -->
    <div class="card-deck">
      <div class="card">
        <img
          src="@/static\images\attitude.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">LA SCUOLA CONTINUA...</h5>
          <p class="card-text">
            Dal 24 settembre 2021, per volontà e scelta della prof.ssa Silva Zaccaria
            i corsi di danza proseguiranno con Noemi De Grandi (docente diplomata all’Accademia Teatro alla Scala di Milano)
          </p>
          <nuxt-link to="/news/1" class="btn btn-outline-info"
            >News 1</nuxt-link
          >
        </div>
        <div class="card-footer">
          <small class="text-muted">Ultimo aggiornamento, 06-11-2022</small>
        </div>
      </div>
      <div class="card">
        <img
          src="@/static\images\iscrizioni.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">ISCRIZIONI APERTE !!!</h5>
          <p class="card-text">
           L’ANNO ACCADEMICO 2022/23 inizierà dal 1 settembre.
            Vi aspettiamo!
          </p>
          <p>
Si riceve solo su appuntamento telefonando dalle 16 alle 18 !
          </p>
          <nuxt-link to="/news/2" class="btn btn-outline-info"
            >News 2</nuxt-link
          >
        </div>
        <div class="card-footer">
          <small class="text-muted">Ultimo aggiornamento, 12-11-2022</small>
        </div>
      </div>
      <div class="card">
        <img
          src="@/static\images\tutteNoi.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">SPETTACOLI</h5>
          <p class="card-text">
            18 settembre 2022: “In ricordo delle Prof.sse Grazia Paulon e Silvia Zaccaria”
          </p>
          <nuxt-link to="/news/3" class="btn btn-outline-info"
            >News 3</nuxt-link
          >
        </div>
        <div class="card-footer">
          <small class="text-muted">Ultimo aggiornamento, 06-11-2022</small>
        </div>
      </div>
    </div>

    <!-- fine news -->

<!-- jumbotron -->
    <div>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Invito</h1>
          <p class="lead">
            L’inizio dei corsi è fissato per il 1° settembre, vi aspettiamo!
          </p>
          <hr class="my-4" />
          <p>
            In questa sezione degli spettacoli vi mostriamo un assaggio di quello che vi aspetterà.
          </p>
          <nuxt-link to="/shows" class="btn btn-outline-info">Shows</nuxt-link>
        </div>
      </div>
    </div>
<!-- fine jumbotron -->



  </div>
</template>
