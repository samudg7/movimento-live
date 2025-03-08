<template>
  <div>
    <img
      src="@/static\images\gambaSbarra.jpg"
      class="responsive-img"
      alt="..."
    />
    <br />
    <br />
    <div id="testo" class="news-content">
      <p>
        La scuola nonostante la pandemia con la collaborazione delle allieve e dei loro genitori ha proseguito le lezioni on-line!
        La presenza nelle lezioni è fondamentale come pure la correzione manuale, ma le allieve hanno seguito con entusiasmo le lezioni con la loro insegnante e con Noemi De Grandi (Diplomata al corso insegnanti al Teatro alla Scala di Milano).
      </p>
      <p>
        La scuola si avvale della collaborazione di Gilda Gelati prima ballerina del Teatro alla Scala
        pronta per tornare e impartire lezioni alle allieve per migliorare la tecnica, l’espressività e dare validi suggerimenti!
      </p>
      <p>
        Dal 24 settembre 2021, per volontà e scelta della prof.ssa Silva Zaccaria i corsi di danza proseguiranno con Noemi De Grandi (docente diplomata all’Accademia Teatro alla Scala di Milano)
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
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

.news-content {
  padding: 20px;
}
</style>
