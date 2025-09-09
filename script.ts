const btn = document.querySelector('button')

// function handleClick(this: HTMLButtonElement, event: MouseEvent) {
//   console.log(this, event)
// }

function handleClick(event: MouseEvent) {
  const { currentTarget } = event;

  if (currentTarget instanceof HTMLElement) {
    console.log(currentTarget.textContent)
  }
}

btn?.addEventListener('click', handleClick)
