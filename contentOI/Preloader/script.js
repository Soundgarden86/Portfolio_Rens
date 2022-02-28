//Function that gets rid of pre-loader

window.addEventListener('load', () => {
            const preload = document.querySelector('.preload');
            preload.classList.add('preload-finish');
        }