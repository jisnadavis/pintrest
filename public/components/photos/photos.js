import { imagearticle } from '../creatingarticle/article'
import { url } from '../data/data'
import './photos.css'

export const getphotos = async (url, parentnode) => {
  try {
    const res = await fetch(url)
    const photos = await res.json()
    for (const photo of photos) {
      imagearticle(photo, parentnode)
    }
  } catch (error) {
    console.error('Error fetching random photos:', error)
  }
}
export const getphotosbysearch = async (urlsearch, parentnode) => {
  try {
    const respuesta = await fetch(urlsearch)
    const data = await respuesta.json()

    parentnode.innerHTML = ''

    if (data.results.length === 0) {
      displayNoResultsMessage(parentnode)
    } else {
      for (const photo of data.results) {
        imagearticle(photo, parentnode)
      }
    }
  } catch (error) {
    console.error('Error fetching random photos:', error)
  }
}

const displayNoResultsMessage = (parentnode) => {
  parentnode.innerHTML = ''
  const noResultsMessage = document.createElement('p')
  const span = document.createElement('span')
  span.className = 'highlight'
  span.style.color = 'red'

  span.textContent = 'inicio button !!!'

  noResultsMessage.textContent = 'No se han obtenido resultados. Please click '
  noResultsMessage.appendChild(span)

  noResultsMessage.className = 'noResults'
  parentnode.appendChild(noResultsMessage)
}
