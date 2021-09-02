const urls = [
  "https://images.pexels.com/photos/1192031/pexels-photo-1192031.jpeg?cs=srgb&dl=variety-of-spices-and-vegetables-on-black-surface-1192031.jpg&fm=jpg",
  "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/2220618/pexels-photo-2220618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/4551106/pexels-photo-4551106.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

const randomizeSrc = () => {
  const i = Math.floor(Math.random() * urls.length);
  console.log(urls[i]);
  const background = document.getElementById("background");
  background.src = urls[i];
  console.log(background);
};
randomizeSrc();
