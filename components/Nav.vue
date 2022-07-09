<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul class="navbar-nav">
      <li class="navbar-brand">
        <nuxt-link to="/home" class="nav-link active">Nuxt App</nuxt-link>
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
          <nuxt-link to="/storia" class="nav-link">History</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/classes" class="nav-link">Classes</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/teachers" class="nav-link">Teachers</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/shows" class="nav-link">Shows</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/contacts" class="nav-link">Contacts</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
