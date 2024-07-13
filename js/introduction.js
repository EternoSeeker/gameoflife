document.addEventListener('DOMContentLoaded', function () {
    startLoader ()
    showBox(1); 
});

function showBox(step) {
    document.querySelectorAll('.intro-page').forEach(stepDiv => {
        stepDiv.style.display='none';
    });
    document.getElementById(`page${step}`).style.display= 'block';
}

function closeIntroSeries(){
    console.log('ello?')
    document.querySelectorAll('.intro-page').forEach(stepDiv => {
        stepDiv.style.display='none';
    });
    startLoader()
    animateElements();
}
