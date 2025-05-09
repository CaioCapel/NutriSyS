/*=============== SHOW HIDE PASSWORD LOGIN ===============*/
const passwordAccess = (loginPass, loginEye) =>{
   const input = document.getElementById(loginPass),
         iconEye = document.getElementById(loginEye)

   iconEye.addEventListener('click', () =>{
      // Change password to text
      input.type === 'password' ? input.type = 'text'
						              : input.type = 'password'

      // Icon change
      iconEye.classList.toggle('ri-eye-fill')
      iconEye.classList.toggle('ri-eye-off-fill')
   })
}
passwordAccess('password','loginPassword')

/*=============== SHOW HIDE PASSWORD CREATE ACCOUNT ===============*/
const passwordRegister = (loginPass, loginEye) =>{
   const input = document.getElementById(loginPass),
         iconEye = document.getElementById(loginEye)

   iconEye.addEventListener('click', () =>{
      // Change password to text
      input.type === 'password' ? input.type = 'text'
						              : input.type = 'password'

      // Icon change
      iconEye.classList.toggle('ri-eye-fill')
      iconEye.classList.toggle('ri-eye-off-fill')
   })
}
passwordRegister('passwordCreate','loginPasswordCreate')

/*=============== SHOW HIDE LOGIN & CREATE ACCOUNT ===============*/
const loginAcessRegister = document.getElementById('loginAccessRegister'),
      buttonRegister = document.getElementById('loginButtonRegister'),
      buttonAccess = document.getElementById('loginButtonAccess')

buttonRegister.addEventListener('click', () => {
   loginAcessRegister.classList.add('active')
})

buttonAccess.addEventListener('click', () => {
   loginAcessRegister.classList.remove('active')
})


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const numParticles = 50;

const fruitImages = [
  'img/apple.png',
  'img/banana.png',
  'img/uva.png',
  'img/morango.png',
  'img/abacate.png',
  'img/orange.png'
];


const images = fruitImages.map(src => {
  const img = new Image();
  img.src = src;
  return img;
});

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = 20 + Math.random() * 20;
    this.image = images[Math.floor(Math.random() * images.length)];
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
    if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;
  }

  draw() {
    ctx.shadowColor = "rgba(102, 187, 106, 0.5)";
    ctx.shadowBlur = 10;
    ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
    ctx.shadowBlur = 0;
  }
}

let loadedImages = 0;
images.forEach(img => {
  img.onload = () => {
    loadedImages++;
    if (loadedImages === images.length) {
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
      animate();
    }
  };
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
  }
  requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

