// import your blocks here
import "./header";
import "./footer";
import "./contactus";


export default function Blocks() {
  $('.header__opener').on('click', () => {
     $('.header-nav__mobile').addClass('header-nav__mobile--open');
     $('body').addClass('no-scroll');
  });

  $('.header-nav__mobile-closer').on('click', () => {
      $('.header-nav__mobile').removeClass('header-nav__mobile--open');
      $('body').removeClass('no-scroll');
  });

  $('.contactus__title').on('click', (e) => {
      $('.contactus').addClass('contactus--open');
  });

  $('.contactus__close').on('click', () => {
    $('.contactus').removeClass('contactus--open');
  });

};
