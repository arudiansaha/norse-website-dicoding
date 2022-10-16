function showNavigationOnScroll() {
  const navigation = document.querySelector('.navigation');
  const navigationHeight = navigation.offsetHeight;

  const scrollTop = document.documentElement.scrollTop;

  document.documentElement.style.setProperty('--scroll-padding', navigationHeight - 1 + 'px');

  if (scrollTop > 50) {
    document.documentElement.style.setProperty('--navigation-display', 'flex')
  } else {
    document.documentElement.style.setProperty('--navigation-display', 'none')
  }
}

window.onscroll = function () { showNavigationOnScroll() }
