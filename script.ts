function handleCursos(data: unknown) {
  if (data instanceof Array) {
    console.log('É uma instância de Array')
  }

  if (Array.isArray(data)) {
    console.log('É uma array')
  }
}

async function fetchCursos() {
  const res = await fetch('https://api.origamid.dev/json/cursos.json')
  const json = await res.json()

  handleCursos(json)
}

fetchCursos()

function isString(value: unknown): value is string {
  return typeof value === 'string'
}

function handleData(data: unknown) {
  if (isString(data)) {
    console.log(data.toLowerCase())
  }
}

handleData(200)
handleData('GitHub')
