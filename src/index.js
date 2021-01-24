import toggleMenu from "./modules/toggleMenu";
import togglePopUp from "./modules/togglePopUp";
import sendForm from "./modules/sendForm";
import formValidator from "./modules/formValidator";
import slider from "./modules/slider";
import sliderCarousel from "./modules/sliderCarousel";
import sliderPhotos from "./modules/sliderPhotos";
import clubCardCalc from "./modules/clubCardCalc";
import mozaikaCardForm from "./modules/mozaikaCardForm";
import schelkovoCardForm from "./modules/schelkovoCardForm";
import stickyBurgerMenu from "./modules/stickyBurgerMenu";

//Function calls
toggleMenu();

togglePopUp();

sendForm();

formValidator();

slider();

sliderCarousel.init();

sliderPhotos();

clubCardCalc();

mozaikaCardForm();

schelkovoCardForm();

stickyBurgerMenu();
