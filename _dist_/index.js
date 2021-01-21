const baseUrl = 'https://platzi-avo.vercel.app'
//web API
//conectarnos al serever

const appNode = document.querySelector('div#app')
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
      const title = document.createElement('h2')
      //document.body.appendChild(title)
      title.textContent = item.name
      // title.style = 'font-size: 2rem'
      //title.style.fontSize = '3rem'
      //title.className = 'muy-grande'
      title.className = 'text-2xl text-red-600'
      const price = document.createElement('div')
      //document.body.appendChild(price)
      price.textContent = formatPrice(item.price)

      const container = document.createElement('div')
      container.append(image, title, price)
      //document.body.appendChild(container)

      todoLosItems.push(container)
    })
    appNode.append(...todoLosItems)
  })

