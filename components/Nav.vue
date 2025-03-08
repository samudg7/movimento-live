<template>
  <nav class="navbar navbar-expand-lg modern-navbar">
    <ul class="navbar-nav">
      <li class="navbar-brand">
        <nuxt-link to="/home" class="nav-link active">
          <img
            src="@/static\images\logo.jpg"
            alt="Home"
            class="navbar-logo"
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
          <nuxt-link to="/classes" class="nav-link">Corsi di danza</nuxt-link>
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

<style scoped>
.navbar {
  background-color: #212529;
  padding: 1rem 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.navbar:hover {
  background-color: #343a40;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.navbar-toggler {
  border: none;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.nav-link {
  font-size: 1.1rem;
  transition: color 0.3s ease, font-size 0.3s ease;
}

.nav-link:hover {
  color: #f8f9fa;
  font-size: 1.2rem;
}

.nav-link.active {
  font-weight: bold;
  color: #ffc107;
}

.navbar-logo {
  height: 50px;
  width: 50px;
  transition: transform 0.3s ease;
}

.navbar-logo:hover {
  transform: scale(1.1);
}
</style>
