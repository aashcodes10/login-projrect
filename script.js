const canvas = document.getElementById("stars");
  const ctx = canvas.getContext("2d");

  // Fullscreen canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  console.log(canvas.width);


  // Re-adjust on resize
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  // Create stars
  const starCount = 240;
  const stars = [];

  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * canvas.width ,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.5 + 0.2
    });
  }

  // Draw stars
  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";

    for (let star of stars) {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();

      // Move the star down
      star.y += star.speed;

      // Recycle star to top when it goes out
      if (star.y > canvas.height) {
        star.y = 0;
        star.x = Math.random() * canvas.width;
      }
    }

    requestAnimationFrame(drawStars);
  }

  drawStars();

let logbox = document.querySelector(".signin")
let signupbox = document.querySelector(".signup")

document.querySelector(".signin .logtxt").addEventListener("click", ()=>{
  // logbox.style.zIndex = "0";
  signupbox.style.visibility= "visible"
  logbox.style.visibility = "hidden";
  signupbox.style.animation = "inAnimation 1.5s ease"
  logbox.style.animation = "outAnimation 1s ease"
})
document.querySelector(".signup .logtxt").addEventListener("click", ()=>{
  signupbox.style.visibility= "hidden"
logbox.style.visibility = "visible"
logbox.style.animation = "inAnimation 1.5s ease"
signupbox.style.animation = "outAnimation 1s ease"
})
// let alphabets = ['a','b','c,' d', ' ','f', 'g' , 'h','i', 'j',' k', 'l',' m',' n',' o ', 'p',' q', r, s, t, u, v,w, x, y, z];
// console.log(alphabets);
let sym = ['/','.',',','[',']', '{', '}', '(', ')', '|','-','+','<', '>','?',':', ';','_','~','`', '!', '@', '#', '$', '%', '^','&','*']
let num = ['1','2','3','4','5','6','7','8','9','0']; // compare as strings

let password = document.querySelector('#password')
let cpassword = document.querySelector('#ConfirmPassword')
let input = document.querySelectorAll(".signup input");
let loginput = document.querySelectorAll(".signin input");
let strengthtxt = document.querySelector('.signup .strengthtxt')
let strengthChecker = document.querySelectorAll('.strength span')
password.addEventListener("input", () => {
  // Reset all colors
  strengthChecker.forEach(s => s.style.backgroundColor = "rgba(158, 143, 160, 0.61)");
  let val = password.value;
  let hasNum = num.some(i => val.includes(i));
  let hasSym = sym.some(e => val.includes(e));

  if (val.length > 4) {
    strengthChecker[0].style.backgroundColor = "red";
  }
  // For longer passwords, check for numbers and symbols
  if (hasNum) {
    strengthChecker[1].style.backgroundColor = "yellow";
  }
  if (hasSym) {
    strengthChecker[2].style.backgroundColor = "blue";
  }
  })


function validateSignupForm() {
  let allFilled = true;
  input.forEach(inp => {
    if (inp.value.trim() === "") {
      allFilled = false;
    }
  });

  if (!allFilled) {
    strengthtxt.textContent = "Please fill all the fields";
    // document.querySelector(".signup .btn").disabled = true;
    document.querySelector(".signup .link").href = "#";
  } else if (password.value === cpassword.value) {
    // document.querySelector(".signup .btn").disabled = false;
    document.querySelector(".signup .link").href = "home.html";
    strengthtxt.textContent = "Ready to sign up";
  } else {
    strengthtxt.textContent = "Passwords do not match";
    // document.querySelector(".signup .btn").disabled = true;
    document.querySelector(".signup .link").href = "#";
  }
}

// Attach event listeners to all inputs in signup form
input.forEach(inp => {
  inp.addEventListener("input", validateSignupForm);
});

function validateSigninForm() {
  let singFilled = true;
  loginput.forEach(inp => {
    if (inp.value.trim() === "") {
      singFilled = false;
    }
  });
let strengthtxt1 = document.querySelector('.signin .strengthtxt')
  if (!singFilled) {
    strengthtxt1.textContent = "Please fill all the fields";
    // document.querySelector(".signin .btn").disabled = true;
    document.querySelector(".signin .link").href = "#";
  } else  {
    // document.querySelector(".signin .btn").disabled = false;
    document.querySelector(".signin .link").href = "home.html";
    strengthtxt1.textContent = "Ready to login";
  }
}
loginput.forEach(inp => {
  inp.addEventListener("input", validateSigninForm);
});
let svg = document.querySelector(".pass")
svg.addEventListener("click", () => {
  password.type = password.type === "password" ? "text" : "password"; // toggle
})





