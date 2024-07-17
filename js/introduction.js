document.addEventListener('DOMContentLoaded', function () {
    startLoader();  
    if (!sessionStorage.getItem('introCompleted')) {
        showBox(1);
    }
});

function showBox(step) {
    document.querySelectorAll('.intro-page').forEach(stepDiv => {
        stepDiv.style.display='none';
    });
    document.getElementById(`page${step}`).style.display= 'block';
}

function closeIntroSeries(){
    document.querySelectorAll('.intro-page').forEach(stepDiv => {
        stepDiv.style.display='none';
    });
    startLoader()
    animateElements();
    sessionStorage.setItem('introCompleted', 'true');
}
