import './header.css'
export const createheader = () => {
  const body = document.querySelector('#app')
  body.innerHTML = `  <header>
  
  <img src="./public/assets/pinterest-logo.png" class="logo">
  <div class="mainheder">
  <div class="buttons">
    <button type="submit" class="incio">Inicio</button>
    <button type="submit">Explorar</button>
    <button type="submit">Crear</button>
  </div>
  <div class="searchdiv">
    <form action="search" method="get">
      <span class="lupa"><i class="fa-brands fa-searchengin"></i></span>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="que queries a buscar"
        class="inputsearch"
      />
      <button type="submit" class="buscar">Buscar</button>
    </form>
  </div>
  <div class="userarea">
    <nav>
      <ul class="usercontainer">
        <li>
          <a href="">
            <span class="user"><i class="fa-solid fa-circle-user"></i></span>
          </a>
        </li>
        <li>
          <a href="">
            <span class="user"><i class="fa-solid fa-message"></i></span>
          </a>
        </li>
        <li>
          <a href="">
            <span class="user"><i class="fa-sharp fa-solid fa-bell"></i></span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <button class="menu">
      <span><i class="fa-solid fa-house"></i></span>
    </button>
  </div>
</header>

`
}
