import "./main.scss";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

const advantages = new Swiper(".advantages-swiper", {
  speed: 400,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".advantages-swiper-pagination",
    type: "bullets",
    clickable: "true",
  },
  breakpoints: {
    1500: {
      slidesPerView: 4,
      spaceBetween: 30,
      allowTouchMove: false,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
      allowTouchMove: true,
    },
  },
});
const photos = new Swiper(".photos-swiper", {
  speed: 400,
  spaceBetween: 10,
  loop: true,
  grabCursor: true,

  navigation: {
    nextEl: ".photos-control-btn-next",
    prevEl: ".photos-control-btn-prev",
  },
  pagination: {
    el: ".photos-swiper-pagination",
    type: "bullets",
    clickable: "true",
  },
});
const staff = new Swiper(".staff-swiper", {
  speed: 400,
  spaceBetween: 10,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".staff-swiper-btn-next",
    prevEl: ".staff-swiper-btn-prev",
  },
  pagination: {
    el: ".staff-swiper-pagination",
    type: "bullets",
    clickable: "true",
  },
});
