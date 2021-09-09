const elements = [
  { tag: 'p', text: 'Texto 1' },
  { tag: 'div', text: 'Texto 2' },
  { tag: 'section', text: 'Texto 3' },
  { tag: 'footer', text: 'Texto 4' }
]

const container = document.querySelector('.container')
const div = document.createElement('div')

for (let i = 0; i < elements.length; i++) {
  let { tag, text } = elements[i]
  let tagCreate = document.createElement(tag)
  tagCreate.innerText = text //text ou html, text pq só há coisa escrita
  div.appendChild(tagCreate)
}

container.appendChild(div)
