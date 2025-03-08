<template>
  <div>
    <img
      src="@/static\images\tutteNoi.jpg"
      class="responsive-img"
      alt="..."
    />
    <br />
    <br />
    <div id="testo" class="news-content">
      <p>
        Il 18 settembre 2022, noi allieve ed ex allieve della scuola abbiamo voluto rivivere un momento particolare in onore di Grazia Paulon e Silvia Zaccaria.
      </p>
      <p>
        Attraverso la danza e le coreografie di repertorio classico le abbiamo dedicato il nostro pensiero profondo di stima e di riconoscenza per gli insegnamenti ricevuti che ci accompagnano in ogni momento della nostra vita quotidiana.
      </p>
      <p>
        Ricordiamo Grazia e Silvia per il loro rigore, la passione per l’arte, la grinta, il coraggio di lottare fino alla fine e di non mollare mai e in particolare l’ottimismo di Silvia che l’ha contraddistinta fino alla fine.
      </p>
      <p>
        Il nostro saluto, in punta di piedi con il finale del balletto della “Danza delle ore “è stato un momento commovente, triste ma colmo di gratitudine.
      </p>
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
    width: 30%;
  }
}

.news-content {
  padding: 20px;
}
</style>
