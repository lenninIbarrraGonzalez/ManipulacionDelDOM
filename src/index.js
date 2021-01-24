const baseUrl = 'https://platzi-avo.vercel.app'
//web API
//conectarnos al serever

const appNode = document.querySelector('div#app')
appNode.addEventListener('click', (event) => {
  if (event.target.nodeName === 'H2')
    alert('Utilizando propagación de eventos')
})

const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD'
    //currency: 'GBP'
  }).format(price)
  return newPrice
}


window.fetch(`${baseUrl}/api/avo`).then((respuesta) => respuesta.json())
  //procesar la respuesta

  //Json -> data -> renderizar info browser
  .then(responseJson => {
    //console.log(data)
    const todoLosItems = []
    responseJson.data.forEach((item) => {
      //console.log(item.name)
      const image = document.createElement('img')
      //document.body.appendChild(image)
      image.src = `${baseUrl}${item.image}`
      image.className = 'rounded-full h-24 w-24 flex items-center justify-center float-left m-3'

      const title = document.createElement('h2')
      //document.body.appendChild(title)
      title.textContent = item.name
      // title.style = 'font-size: 2rem'
      //title.style.fontSize = '3rem'
      //title.className = 'muy-grande'
      title.className = 'text-1xl text-red-600 mt-5'

      // title.addEventListener('click', () => {
      //   window.alert('hola')
      // })
      //funciona pero no es optimo mejor aplicar la propagación de eventos
      const price = document.createElement('div')
      //document.body.appendChild(price)
      price.textContent = formatPrice(item.price)

      const container = document.createElement('div')
      container.append(image, title, price)
      //document.body.appendChild(container)
      container.className = ' bg-yellow-50'

      todoLosItems.push(container)
    })
    appNode.append(...todoLosItems)
  })

