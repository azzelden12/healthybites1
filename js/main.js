const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu i');
const dropDown = document.querySelector('.dropdown');
menu.onclick = function () {
    dropDown.classList.toggle("open")
};

const navEl = document.querySelector('.containe');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 40) {
        navEl.classList.add('scroll');
    }else if (window.scrollY < 40) {
        navEl.classList.remove('scroll')
    }
});


document.querySelector(".containe .btn").onclick = function () {

    document.querySelector(".login-1").classList.toggle("open");

    document.querySelector(" .backgraund-1").classList.toggle("open");

  document.querySelector(".close-btn").onclick = function () {
    
    document.querySelector(".login-1").classList.toggle("open").remove;

    document.querySelector(" .backgraund-1").classList.toggle("open").remove;

  }


};


let card = document.querySelectorAll(".box-card");

function toggleOffer(id) {
    let toggleButton = document.getElementById(id);
    if (toggleButton.checked == true) {
        toggleButton.setAttribute('checked' , 'checked');
    } else {
        toggleButton.removeAttribute('checked');
    }

    let inputChecked = document.querySelectorAll("input[checked=checked]");

    card.forEach((card) => {
        card.style.display = "none"
    });

    inputChecked.forEach((list) => {
        document.querySelectorAll(list.dataset.cat).forEach((el) => {
            el.style.display = "block";
        });
    });
};

