# mm-image-carousel

Simple Image Carousel Slider with HTML, CSS, JS and GSAP TweenLite.

## Table of Contents
* [General info](#general-info)
* [Project components](#project-components)
* [Steps](#steps)
* [Notes](#notes)


## General info
This project is an Image Carousel banner that has the following features;
* Size: 300x250
* Controls: The carousel can be controlled by clicking the right and left arrow buttons to navigate next and previous slide.
* Auto animation: When the buttons are not clicked, the images flow themselves automatically.
* Infinite rotation: The navigation between sliders can be done infinitely, without stopping at the first or last slide.

## Project components
* Assets can be found in the 'image' folder.
* The image folder include:
        - 5 images for showing as slides, exported from PS (Photoshop) in the .png format.
        - Image for MediaMonks logo to show in the header, exported from PS in the .png format. (Not used, kept as alternate.)
        - Transparent version of the MediaMonks logo image, exported from PS in the .png format. (Used)
        - 2 images for right and left arrows for "next" and "prev" functionalities, designed by me in PS and exported in .png format.
* index.html file contains the main setup for the header and slider components of the banner. 
* main.js file contains the features for navigating between next and previous slides with arrow buttons, GSAP TweenLite animations for navigate animations, auto animation and infinite rotation.
* style.css file contains the styling of the banner; buttons, header, slider, the division between those components and their colors, dimensions and functionalities.

## Steps
* The assets are exported for slides and the logo. 
* The main setup is prepared with HTML and styled in CSS, in the specific dimensions of the given requirements.
* The arrow buttons are designed and exported. After having the dimensions calculated and designed with CSS, I calculated the most optimized button dimensions as 30 px.
* For the javascript code for functionalities, I used the GreenSock documentations and forums.
* The first structure I used was including extra buttons for starting and stopping autoplay, I made changes on it as I encountered a problem and added the autoplay functionality without the buttons.

## Notes:
* For further status, the auto animation can be added with extra buttons, or by a timer that starts auto-animation after an idle time that arrow buttons are not clicked.
* The GreenSock guideline that I've followed was including a draggable function too, but I removed it because it was a premium feature of GreenSock.
* GSAP is super fun to learn and use! Very useful for making great animations also in 3D. 


