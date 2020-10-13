const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const DARK = 'dark';
const LIGHT = 'light';

// Toggle Dark/Light Mode Styles
function toggleDarkLightMode(theme) {
    const isLight = theme === LIGHT;
    nav.style.backgroundColor = isLight ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = isLight ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = isLight ? 'Light Mode' : 'Dark Mode';    
    isLight ? 
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') :
        toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    image1.src = `img/undraw_proud_coder_${theme}.svg`;
    image2.src = `img/undraw_feeling_proud_${theme}.svg`;
    image3.src = `img/undraw_conceptual_idea_${theme}.svg`;
}

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', DARK);
        localStorage.setItem('theme', DARK);
        toggleDarkLightMode(DARK);
    } else {
        document.documentElement.setAttribute('data-theme', LIGHT);
        localStorage.setItem('theme', LIGHT);
        toggleDarkLightMode(LIGHT)
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === DARK) {
        toggleSwitch.checked = true;
        toggleDarkLightMode(DARK)
    }
}