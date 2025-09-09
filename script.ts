const btn = document.querySelector('button')

function handleClick(event: PointerEvent) {
  console.log(event.pageX)
}

btn?.addEventListener('pointerdown', handleClick)

function handleScroll(event: Event) {
  console.log(event)
}

window.addEventListener('scroll', handleScroll)

function ativarMenu(event: Event) {
  if (event instanceof MouseEvent) {
    console.log(event.pageX)
  }

  if (event instanceof TouchEvent) {
    console.log(event.touches[0].pageX)
  }
}

document.documentElement.addEventListener('mousedown', ativarMenu)
document.documentElement.addEventListener('touchstart', ativarMenu)
window.addEventListener('mousedown', ativarMenu)
