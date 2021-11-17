const splide = new Splide('.splide', {
  type: 'slide', //slide, loop, fade
  // padding: { y: 10 }, //css values
  gap: '20px', //1 rem default
  // rewind: true,
  speed: 500, //transition in milliseconds
  // fixedWidth: '10vw',
  // width: '100vw',
  perPage: 5,
  start: 3,
  perMove: 2,
  autoplay: true,
  interval: 3000,
  arrows: false,
  pagination: false,
  pauseOnHover: true,
  wheel: true,
});
splide.mount();
