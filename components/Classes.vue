<template>
  <div>
   <!-- barre -->
    <div v-for="bar in bars" :key="bar.id" class="row mb-1">
      <div class="col-sm-2">
        <h6>{{ bar.title }}:</h6>
      </div>
      <div class="col-sm-10 pt-1">
        <b-progress
          :key="bar.variant"
          :value="bar.value"
          :variant="bar.variant"
        ></b-progress>
      </div>
    </div>
    <!-- barre -->

    <!-- media, descrizione corsi -->
    <div>
      <ul class="list-unstyled">
        <b-media tag="li">
          <template #aside>
            <b-img
              v-bind="mainProps"
              blank-color="#f5f5f6"
              width="64"
              alt="placeholder"
            ></b-img>
          </template>
          <h5 class="mt-0 mb-1">Corso Propedeutico</h5>
          <p class="mb-0">
            Le allieve usando il gioco come mezzo educativo si avvicinano alla
            danza, al ritmo musicale e alla coordinazione dei movimenti.
          </p>
        </b-media>

        <b-media tag="li" class="my-4">
          <template #aside>
            <b-img
              v-bind="mainProps"
              blank-color="#f9c20a"
              width="64"
              alt="placeholder"
            ></b-img>
          </template>

          <h5 class="mt-0 mb-1">Corso Pre-Accademico</h5>
          <p class="mb-0">
            Si rinforza la muscolatura con lo studio della sbarra a terra e si
            iniziano le basi della tecnica accademica con due mani alla sbarra.
          </p>
        </b-media>

        <b-media tag="li">
          <template #aside>
            <b-img
              v-bind="mainProps"
              blank-color="#28a745"
              width="64"
              alt="placeholder"
            ></b-img>
          </template>

          <h5 class="mt-0 mb-1">Corso Accademico Inferiore</h5>
          <p class="mb-0">
            La finalità principale del corso è l’impostazione esatta del corpo,
            delle braccia e della testa in tutti gli esercizi alla sbarra e al
            centro che hanno lo scopo di fissare nell’allieva le regole basilari
            del coordinamento dei movimenti.
          </p>
        </b-media>
        <b-media tag="li" class="my-4">
          <template #aside>
            <b-img
              v-bind="mainProps"
              blank-color="#dc3444"
              width="64"
              alt="placeholder"
            ></b-img>
          </template>

          <h5 class="mt-0 mb-1">Corso Accademico Medio</h5>
          <p class="mb-0">
            Si acquisisce una buona conoscenza dei “giri” aumentando le
            difficoltà tecniche e curando l’espressività.
          </p>
        </b-media>

        <b-media tag="li">
          <template #aside>
            <b-img
              v-bind="mainProps"
              blank-color="#17a2b8"
              width="64"
              alt="placeholder"
            ></b-img>
          </template>
          <h5 class="mt-0 mb-1">Corso Accademico Intermedio</h5>
          <p class="mb-0">
            Si perfeziona la tecnica aggiungendo passi e legazioni
            ballettistiche anche sulla punta.
          </p>
        </b-media>

        <b-media tag="li" class="my-4">
          <template #aside>
            <b-img
              v-bind="mainProps"
              blank-color="#007bff"
              width="64"
              alt="placeholder"
            ></b-img>
          </template>

          <h5 class="mt-0 mb-1">Corso Accademico Avanzato</h5>
          <p class="mb-0">
            Si completa lo studio di tutti i passi della tecnica accademica
            sviluppando maggior sicurezza di esecuzione ed espressività.
          </p>
        </b-media>

        <b-media tag="li">
          <template #aside>
            <b-img
              v-bind="mainProps"
              blank-color="#343a40"
              width="64"
              alt="placeholder"
            ></b-img>
          </template>

          <h5 class="mt-0 mb-1">Repertorio Classico</h5>
          <p class="mb-0">
            Vengono studiate le variazioni dei grandi balletti dell’Ottocento
            (Giselle, Don Chisciotte, Il Lago dei cigni ecc…) anche con
            l’utilizzo di materiale storico .
          </p>
        </b-media>

        <b-media tag="li" class="my-4">
          <template #aside>
            <b-img
              v-bind="mainProps"
              blank-color="#6c757d"
              width="64"
              alt="placeholder"
            ></b-img>
          </template>

          <h5 class="mt-0 mb-1">Danza Contemporanea</h5>
          <p class="mb-0">
            Dopo aver avuto buone basi di tecnica classica, il corpo con la
            danza contemporanea viene coinvolto in evoluzioni asimmetriche con
            ritmi musicali diversi e tecniche moderne varie. L’allieva prende
            coscienza del proprio corpo nello spazio circostante.
          </p>
        </b-media>
      </ul>
    </div>
    <!-- fine media, descrizione corsi -->
<br> <br>
    <!-- inizio list group -->
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Lezioni bisettimanali e quotidiane</li>
      <li class="list-group-item">Lezioni individuali</li>
      <li class="list-group-item">
        Lezioni per la preparazione di esami alla scuola di ballo della Scala,
        all’Accademia Naz. di danza ecc…
      </li>
      <li class="list-group-item">Attestato di studio</li>
      <li class="list-group-item">
        Medaglia d’oro alle allieve che frequentano gli otto anni presso la
        scuola
      </li>
    </ul>
    <!-- fine list group -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      bars: [
        { variant: 'light', value: 75, title: 'Corso Propedeutico' },
        { variant: 'warning', value: 75, title: 'Corso Pre-Accademico' },
        { variant: 'success', value: 75, title: 'Corso Accademico Inferiore' },
        { variant: 'danger', value: 75, title: 'Corso Accademico Medio' },
        { variant: 'info', value: 75, title: 'Corso Accademico Intermedio' },
        { variant: 'primary', value: 75, title: 'Corso Accademico Avanzato' },
        { variant: 'dark', value: 75, title: 'Repertorio Classico' },
        { variant: 'secondary', value: 75, title: 'Danza Contemporanea' },
      ],
      timer: null,

      mainProps: {
        blank: true,
        width: 64,
        height: 64,
        class: 'm1',
        rounded: true,
      },
    }
  },

  /* dipende come si vuole gestire la barra se con valori fissi o meno */
  mounted() {
    this.timer = setInterval(() => {
      this.bars.forEach((bar) => (bar.value = 25 + Math.random() * 75))
    }, 2000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
    this.timer = null
  },
}
</script>
