let currentIndex = 0;
        const images = document.querySelectorAll('.frame-photo');
        

        function changeImage(direction) {
            images[currentIndex].classList.remove('active');

            currentIndex += direction;

            // Loop around
            if (currentIndex >= images.length) {
                currentIndex = 0;
            } else if (currentIndex < 0) {
                currentIndex = images.length - 1;
            }

            images[currentIndex].classList.add('active');
        }

        function goToImage(index) {
            images[currentIndex].classList.remove('active');

            currentIndex = index;

            images[currentIndex].classList.add('active');
        }
