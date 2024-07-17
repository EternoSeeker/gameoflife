document.addEventListener('DOMContentLoaded', function () {
    closeNavDeafult();//when screen is small, auto close the sidenav on load because otherwise it hinders the introseries 
    startLoader();  
    if (!sessionStorage.getItem('introCompleted')) {
        showBox(1);
    }
});

function showBox(step) {
    document.querySelectorAll('.intro-page').forEach(stepDiv => {
        stepDiv.style.display='none';
    });
    if(isSmall){
        if(step==6 || step==7){
         showBox(8); //if the screen size is small, the sidenav will be closed and we need to skip the settings wale intro popups
        }
        else{
            document.getElementById(`page${step}`).style.display= 'block';
        }}
    else{
        document.getElementById(`page${step}`).style.display= 'block';
    }
}

function closeIntroSeries(){
    document.querySelectorAll('.intro-page').forEach(stepDiv => {
        stepDiv.style.display='none';
    });
    startLoader()
    animateElements();
    sessionStorage.setItem('introCompleted', 'true');
}
