{
  function extractText<Tipo extends HTMLElement>(el: Tipo) {
    return {
      text: el.textContent,
      el,
    }
  }

  const link = document.querySelector('a')

  if (link) {
    console.log(extractText(link).el)
  }
}


{
  function $<T extends Element>(selector: string): T | null {
    return document.querySelector(selector)
  }

  const link = $<HTMLAnchorElement>('a')?.href

  console.log(link)
}

async function getData<T>(url: string): Promise<T> {
  const response = await fetch(url)

  return await response.json()
}

interface Notebook {
  nome: string;
}

async function handleData() {
  const notebook: Notebook = await getData('https://api.origamid.dev/json/notebook.json')

  console.log(notebook.nome)
}

handleData()
