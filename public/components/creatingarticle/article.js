import './article.css'
const toogle = (lovebutton) => {
  if (lovebutton.style.color == 'red') {
    lovebutton.style.color = 'grey'
  } else {
    lovebutton.style.color = 'red'
  }
}
export const imagearticle = (photo, parentnode) => {
  const imgarticle = document.createElement('article')
  imgarticle.className = 'articleimg'
  const img = document.createElement('img')
  img.src = photo.urls.small
  img.alt = photo.alt_description
  img.setAttribute('loading', 'lazy')
  const nameimg = document.createElement('h3')
  nameimg.className = 'name'
  nameimg.textContent = photo.alt_description
  const lovebutton = document.createElement('button')
  lovebutton.className = 'lovebutton'
  lovebutton.innerHTML = `<i class="fa-solid fa-heart"></i>`
  lovebutton.addEventListener('click', function () {
    toogle(lovebutton)
  })

  const download = document.createElement('button')
  download.className = 'download'
  download.innerHTML = `<i class="fa-solid fa-cloud-arrow-down"></i>`
  download.addEventListener('click', () => {
    const downloadLink = document.createElement('a')
    downloadLink.href = photo.links.download
    downloadLink.download = 'photo.jpg'
    downloadLink.target = '_blank'
    downloadLink.click()
  })
  imgarticle.appendChild(img)
  imgarticle.appendChild(nameimg)
  imgarticle.appendChild(lovebutton)
  imgarticle.appendChild(download)
  parentnode.appendChild(imgarticle)
}
