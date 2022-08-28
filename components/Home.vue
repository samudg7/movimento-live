<template>
  <!-- media -->
  <div>
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

        <h5 class="mt-0 mb-1"> “Non vorrei che restasse solo un museo ma che da quelle sale nelle quali si respira danza continuasse
         a venire la musica che ascolto da tutta la vita, come era desiderio sia di mia mamma che di Silvia”.</h5>
        <p class="mb-0">

        </p>
      </b-media>

      <b-media tag="li">
        <template #aside>
          <b-img blank blank-color="#bac" width="64" alt="placeholder"></b-img>
        </template>

        <h5 class="mt-0 mb-1">La storia continua</h5>
        <p class="mb-0">
         Con queste parole di Michele, vi annunciamo che dal 1 settembre dalle ore 16:00 alle 18:00 sono aperte
         le iscrizioni ai corsi per l’anno accademico 2022/2023, che proseguirà con l'insegnante Noemi De Grandi,
         diplomata all'Accdemia Teatro alla Scala di Milano, già allieva delle maestre Grazie e Silvia,
         e con la supervisione della ex prima ballerina della Scala - nonché grande amica e collega di Silvia - Gilda Gelati.
        </p>
      </b-media>
    </ul>
    <!-- fine media -->

    <!-- news -->
    <div class="card-deck">
      <div class="card">
        <img
          src="@/static\images\introduzione.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">LA SCUOLA CONTINUA...</h5>
          <p class="card-text">
            La scuola nonostante la pandemia con la collaborazione delle allieve e dei loro genitori
            ha proseguito le lezioni on -Line! La presenza nelle lezioni è fondamentale come pure la
             correzione manuale, ma le allieve hanno seguito e seguono tutt’ora con entusiasmo le lezioni
             con la loro insegnante Noemi De Grandi (Diplomata al corso insegnanti al Teatro alla Scala di Milano)!
          </p>
          <nuxt-link to="/news/1" class="btn btn-outline-info"
            >News 1</nuxt-link
          >
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated, 06-03-2022</small>
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
Si riceve solo su appuntamento telefonando dalle 16 alle 18 !
          </p>
          <nuxt-link to="/news/2" class="btn btn-outline-info"
            >News 2</nuxt-link
          >
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated, 12-03-2022</small>
        </div>
      </div>
      <div class="card">
        <img
          src="@/static\images\news3.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title"> LA PROF.GRAZIA PAULON SE NE VA IN PUNTA DI PIEDI</h5>
          <p class="card-text">
            Grazia Paulon l’8 febbraio scorso ha lasciato il palcoscenico terrestre lasciando un vuoto profondo
             in tutti quelli che hanno avuto l’onore di conoscerla come persona e come insegnante di danza!
          </p>
          <nuxt-link to="/news/3" class="btn btn-outline-info"
            >News 3</nuxt-link
          >
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated, 06-03-2022</small>
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
            L’inizio dei corsi è fissato per il 5 ottobre, vi aspettiamo!
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
