import { createheader } from './public/components/header/header'
import './style.css'
import './public/components/data/data'
import { getphotos, getphotosbysearch } from './public/components/photos/photos'
import { accesskey } from './public/components/data/data'
import { url } from './public/components/data/data'
import { count } from './public/components/data/data'
import { createfooter } from './public/components/footer/footer'

createheader()
const section = document.createElement('section')
section.className = 'sections'
document.body.appendChild(section)
getphotos(url, section)
const buscarbutton = document.querySelector('.buscar')
buscarbutton.addEventListener('click', (event) => {
  event.preventDefault()
  const inputkeyword = document.querySelector('.inputsearch')
  const keyword = inputkeyword.value.trim()
  inputkeyword.value = ''
  const searchurl = `https://api.unsplash.com/search/photos?&query=${keyword}&client_id=${accesskey}`
  if (keyword !== '') {
    getphotosbysearch(searchurl, section)
  }
})
createfooter()

const inicio = document.querySelector('.incio')
inicio.addEventListener('click', () => {
  section.innerHTML = ''

  getphotos(url, section)
})
