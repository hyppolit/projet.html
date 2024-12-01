alert("tu veux vraiement joue teemo , le plus gran,d cancer du top voila ta punition");
window.onload = function() {


    const images = [
        "champignonsdeteemo=Image+1",
        "champignonsdeteemo=Image+2",
        "champignonsdeteemo.jpg=Image+3",
        "champignonsdeteemo.jpg=Image+4",
        "champignonsdeteemo.jpg=Image+5",
        "champignonsdeteemo.jpg=Image+6",
        "champignonsdeteemo.jpg=Image+7",
        "champignonsdeteemo.jpg=Image+8",
        "champignonsdeteemo.jpg=Image+9",
        "champignonsdeteemo.jpg=Image+10",
        "champignonsdeteemo.jpg=Image+11",
        "champignonsdeteemo.jpg=Image+12",
        "champignonsdeteemo.jpg=Image+13",
        "champignonsdeteemo.jpg=Image+14",
        "champignonsdeteemo.jpg=Image+15",
        "champignonsdeteemo.jpg=Image+16",
        "champignonsdeteemo.jpg=Image+17",
        "champignonsdeteemo.jpg=Image+18",
        "champignonsdeteemo.jpg=Image+19",
        "champignonsdeteemo.jpg=Image+20",
        "champignonsdeteemo.jpg=Image+21",
        "champignonsdeteemo.jpg=Image+22",
        "champignonsdeteemo.jpg=Image+23",
        "champignonsdeteemo.jpg=Image+24",
        "champignonsdeteemo.jpg=Image+25",
        "champignonsdeteemo.jpg=Image+26",
        "champignonsdeteemo.jpg=Image+27",
        "champignonsdeteemo.jpg=Image+28",
        "champignonsdeteemo.jpg=Image+29"
    ]; 

    const imageContainer = document.getElementById('imageContainer');

    
    images.forEach((imageSrc) => {
        const newImage = document.createElement('img');
        newImage.src = imageSrc;
        newImage.alt = "Image dynamique";

        
        newImage.addEventListener('click', function() {
            imageContainer.removeChild(newImage); 
        });

        
        imageContainer.appendChild(newImage);
    });
};