// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.

interface Curso {
  nome: string
  aulas: number
  gratuito: boolean
  horas: number
  idAulas: number
  nivel: 'iniciante' | 'avancado'
  tags: string[]
}

// Type Guard
const isCurso = (value: unknown): value is Curso => {
  if (
    value
    && typeof value === 'object'
    && 'nome' in value
    && 'horas' in value
    && 'tags' in value
  ) {
    return true
  } else {
    return false
  }
}

const handleCursos = (cursos: unknown) => {
  if (Array.isArray(cursos)) {
    cursos
      .filter(isCurso)
      .forEach((curso) => {
        document.body.innerHTML += `
          <h1>${curso.nome}</h1>
          <p>${curso.horas}</p>
          <p>Tags: ${curso.tags.join(', ')}</p>
        `
      })
  }
}

const fetchCursos = async (url: string) => {
  const response = await fetch(url)
  const json = await response.json()

  handleCursos(json)
}

fetchCursos('https://api.origamid.dev/json/cursos.json')

