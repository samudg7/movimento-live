<template>
  <div>
    <img
      src="@/static\images\iscrizioni.jpg"
      class="responsive-img"
      alt="..."
    />
    <br />
    <br />
    <div id="testo" class="news-content">
      <p>
        Sono aperte le iscrizioni per l’a.a. 2022-2023!!
      </p>
      <p>
        Dal 1° di settembre 2022-2023 le iscrizioni sono aperte con lezioni di prova gratuita, previo appuntamento anche per i nuovi corsi di danza:
        <ul>
          <li>propedeutica sperimentale,</li>
          <li>corso danza adulti,</li>
          <li>pilates,</li>
          <li>PBT.</li>
        </ul>
      </p>
      <p>
        Per appuntamento e conferma della lezione di prova contattare al cell: 3455712129 oppure via email: info@scuoladanzagraziapaulon.it
      </p>
      <p>
        Vi aspettiamo!!!
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
    width: 20%;
  }
}

.news-content {
  padding: 20px;
}
</style>
