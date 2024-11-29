document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.progress-bar').forEach(bar => {
        bar.addEventListener('mouseover', () => {
            const progress = bar.querySelector('.progress');
            progress.style.width = progress.getAttribute('data-width');
        });

        bar.addEventListener('mouseout', () => {
            const progress = bar.querySelector('.progress');
            progress.style.width = '0';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let btn = document.querySelector('.btn');
    let clip = document.querySelector('.clip');
    let close = document.querySelector('.close');
    let video = document.querySelector('video');
    
        btn.onclick = function() {
            btn.classList.add('active');
            clip.classList.add('active');
            video.play();
            video.currentTime = 0;
        }
    
        close.onclick = function() {
            btn.classList.remove('active');
            clip.classList.remove('active');
            video.pause();
        }
    });

