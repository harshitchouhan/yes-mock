import { Component, OnInit } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  providers: [NgbCarouselConfig],
})
export class HomeComponent implements OnInit {
  images = ["assets/images/slider/1.jpg", "assets/images/slider/2.jpg", "assets/images/slider/3.jpg"];

  slides = [
    { img: "assets/images/slider/1.jpg", name: "SBI PO" },
    { img: "assets/images/slider/1.jpg", name: "IBPS PO" },
    { img: "assets/images/slider/1.jpg", name: "SBI Clerk" },
    { img: "assets/images/slider/1.jpg", name: "IBPS Clerk" },
    { img: "assets/images/slider/1.jpg", name: "IBPS RRB PO" },
    { img: "assets/images/slider/1.jpg", name: "SSC CGL" },
    { img: "assets/images/slider/1.jpg", name: "SSC CHSL" },
    { img: "assets/images/slider/1.jpg", name: "UPSC CSE" },
    { img: "assets/images/slider/1.jpg", name: "SBI PO" },
    { img: "assets/images/slider/1.jpg", name: "IBPS PO" },
    { img: "assets/images/slider/1.jpg", name: "SBI Clerk" },
    { img: "assets/images/slider/1.jpg", name: "IBPS Clerk" },
    { img: "assets/images/slider/1.jpg", name: "IBPS RRB PO" },
    { img: "assets/images/slider/1.jpg", name: "SSC CGL" },
    { img: "assets/images/slider/1.jpg", name: "SSC CHSL" },
    { img: "assets/images/slider/1.jpg", name: "UPSC CSE" },
  ];
  slideConfig = {
    slidesToShow: 10,
    slidesToScroll: 5,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: `<button type="button" class="slick-prev">Previous</button>`,
    nextArrow: `<button type="button" class="slick-next">Next</button>`,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
    // customize default values of carousels used by this component tree
    config.interval = 300000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {}

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log("slick initialized");
  }

  breakpoint(e) {
    console.log("breakpoint");
  }

  afterChange(e) {
    console.log("afterChange");
  }

  beforeChange(e) {
    console.log("beforeChange");
  }
}
