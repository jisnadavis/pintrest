import './footer.css'
export const createfooter = () => {
  const footer = document.createElement('footer')
  footer.className = 'classfooter'
  footer.innerHTML = `<h1>ROCK THE CODE</h1>
  <div class="footimage">
  <span><i class="fa-brands fa-facebook-messenger"></i></span>
  <span><i class="fa-brands fa-instagram"></i></span>
  <span><i class="fa-brands fa-twitter"></i></span>
  <span><i class="fa-brands fa-facebook-f"></i></span>
  
  </div>`

  document.body.appendChild(footer)
}
