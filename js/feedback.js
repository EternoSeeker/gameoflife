// feedback.js
// Updated  form validation
function validationcheck(event){
    const form = event.currentTarget;
    const formData = new FormData(form);
    // Get form data

    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const phone = formData.get('phone').trim();
    const feedbackType = formData.get('feedback-type').trim();
    const message = formData.get('message').trim();
    const fileUpload = document.getElementById('file-upload').files[0]; // Get file upload input
        const namePattern = /^[a-zA-Z]{2,}$/; //added proper name format
        const emailPattern = /^([a-zA-Z 0-9]{3,20})@([a-zA-Z]{3,6}).([a-z]{3})$/;// added email validation
        const phonePattern = /^[7-9]{1}[0-9]{9}$/; // 10 digits phone number(as per indian format)
    if(!namePattern.test(name)){
            swal("Invalid Name",'Please enter Valid Name',"warning");
            return false;
        }
    else if (!emailPattern.test(email)) {
        swal("Invalid E-mail",'Please enter a valid email address.',"warning");
        return false;
    }
    else if(phone !== '' & !phonePattern.test(phone)){
        swal("Invalid Phone number",'Please enter Valid phone number',"warning");
        return false;
    }
    //added validation of message
    else if(message === ''){
        swal("No message",'Please enter a message',"warning");
        return false;
    }
    // Checking if the file upload has a valid file type 
    const allowedFileTypes = ['image/jpeg', 'image/png', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (fileUpload && fileUpload.size > 0 && !allowedFileTypes.includes(fileUpload.type)) {
        swal("File type not supported",'Please upload a valid file (JPG, PNG, PDF, DOC, DOCX).',"error");
        return false;
    }
    
        return true;
    
}
    
    document.getElementById('feedback-form').addEventListener('submit', function(event) {
        event.preventDefault();
    
    if(validationcheck(event)){
    // For demonstration, let's just show a success message
    document.getElementById('feedback-form').style.display = 'none';
    document.getElementById('success-message').style.display = 'block';

    // Add thumbs-up animation (rain effect)
    const rainDuration = 4000; // 4 seconds
    const numberOfThumbs = 20;
    const container = document.body;

    for (let i = 0; i < numberOfThumbs; i++) {
        setTimeout(() => {
            const thumbsUp = document.createElement('div');
            thumbsUp.classList.add('thumbs-up');
            thumbsUp.style.left = Math.random() * window.innerWidth + 'px';
            container.appendChild(thumbsUp);

            setTimeout(() => {
                thumbsUp.remove();
            }, rainDuration + 500);
        }, Math.random() * rainDuration);
    }

    let count = 5; // countdown time in seconds
    const countdownMessage = document.getElementById('countdown-message');
    countdownMessage.innerText = `Redirecting in ${count} seconds`;

    const countdownInterval = setInterval(function() {
        count--;
        countdownMessage.innerText = `Redirecting in ${count} seconds`;
        if (count === 0) {
            clearInterval(countdownInterval);
            window.location.href = "index.html";
        }
    }, 1000); // update every second (1000 milliseconds)
    }// if condition of validitioncheck closed here

});
