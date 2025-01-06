"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Fancybox from "@/components/FancyboxWrapper";

const HomeIntro: React.FC = () => {
  const images = [
    { src: "/image/1.jpg", alt: "Maromi Image 1", caption: "Maromi Image 1" },
    { src: "/image/2.jpg", alt: "Maromi Image 2", caption: "Maromi Image 2" },
    { src: "/image/3.jpg", alt: "Maromi Image 3", caption: "Maromi Image 3" },
    { src: "/image/4.jpg", alt: "Maromi Image 4", caption: "Maromi Image 4" },
  ];

  return (
    <section>
      <div className="container grid grid-cols-2 md:grid-cols-2 items-center gap-0">
        {/* Text Section */}
        <div className="max-w-md">
          <h1 className="text-2xl font-bold">Welcome, Koumori-chan</h1>
          <p className="mt-4 text-justify text-gray-700">
            Welcome to my website created by my fans, take a explore what's inside this web. You can explore about me, who I am, and you can shop from here like buy photopack, FS, merchandise punipun, or you can visit my cafe from here.
            You can also see a photo gallery of events that I have participated in and some of the attendees. Also, you can check the latest events that I will participate in.
          </p>
          <a href="#about" className="button mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded">
            Explore Now
          </a>
        </div>

        {/* Swiper Section */}
        <div>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000, // 3 detik
              disableOnInteraction: false, // Tidak berhenti saat pengguna berinteraksi
            }}
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Autoplay]}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <Fancybox
                  options={{
                    Carousel: {
                      infinite: false,
                    },
                  }}
                >
                  <a
                    href={image.src}
                    data-fancybox="gallery"
                    data-caption={image.caption}
                    className="block"
                  >
                    {/* Gambar dengan ukuran tetap */}
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="home__img w-full h-96 object-cover rounded-lg shadow-lg" // Ukuran tetap
                    />
                  </a>
                </Fancybox>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
