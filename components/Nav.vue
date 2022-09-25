<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul class="navbar-nav">
      <li class="navbar-brand">
        <nuxt-link to="/home" class="nav-link active" >
         <img
          src="@/static\images\introduzione.jpg"
          alt="Home"
          style="height:50px;width:50px"
        />
       </nuxt-link>
      </li>
    </ul>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbarNav" class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <nuxt-link to="/home" class="nav-link">Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/storia" class="nav-link">La storia</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/classes" class="nav-link">Classi</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/teachers" class="nav-link">Insegnanti</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/shows" class="nav-link">Spettacoli</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/contacts" class="nav-link">Contatti</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
