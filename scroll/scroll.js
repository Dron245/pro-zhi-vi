if (document.body.clientWidth > 900) {
  const spaceHolder = document.querySelector('.opportunities__space');
  const horizontal = document.querySelector('.horizontal');

  if (spaceHolder) {
    spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

    function calcDynamicHe1ight(ref) {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const objectWidth = ref.scrollWidth;
		console.log(objectWidth);
		console.log(window.innerWidth);
		console.log(window.innerHeight);
      if (document.body.clientWidth > 1920) {
        return objectWidth - vw + vh + vw / 1.7;
      }

      if (document.body.clientWidth > 1366) {
        return objectWidth - vw + vh + vw / 1.25;
      }

      if (document.body.clientWidth <= 1366) {
        return objectWidth - vw + vh + vw / 3;
      }
    }
    if (horizontal) {
      window.addEventListener('scroll', () => {
        const sticky = document.querySelector('.opportunities__sticky');
        horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
        spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

        if (window.activeScroll) {
          window.activeScroll();
        }
      });

      window.addEventListener('resize', () => {
        spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
      });
    }
  }
}
