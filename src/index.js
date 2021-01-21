const url = 'https://platzi-avo.vercel.app/api/avo'
const baseUrl = 'https://platzi-avo.vercel.app'
//web API
//conectarnos al serever

const appNode = document.querySelector('div#app')
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
      const price = document.createElement('div')
      //document.body.appendChild(price)
      price.textContent = item.price

      const container = document.createElement('div')
      container.append(image, title, price)
      //document.body.appendChild(container)

      todoLosItems.push(container)
    })
    appNode.append(...todoLosItems)
  })

