import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { API_URL } from "@/config/index";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Pagination, FreeMode, Navigation, Thumbs } from "swiper";
import style from "@/styles/CarouselHome.module.css";

import BannersItem from "@/components/BannersItem";
import HomeBlogItem from "@/components/HomeBlogItem";
import HomeBlogItem2 from "@/components/HomeBlogItem2";
import Footer from "@/components/Footer";
import SocialIcon from "@/components/social-icons";
import FotoItem from "@/components/FotoItem";
import SedeTheItem from "@/components/SedeTheItem";

export default function Home({ banners, news, fotos, sedethe, news2 }) {
  const [photos] = useState(sedethe);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className={style.mySwiper}
      >
        {banners.map((item) => (
          <SwiperSlide key={item.id}>
            <BannersItem banners={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mx-auto max-w-7xl px-2 pt-4 md:grid md:grid-cols-3">
        <div className="col-span-2">
          <div className="space-y-2 p-2 pb-2 md:space-y-2">
            <h1 className="text-center md:text-left text-3xl font-bold">
              Notícias APCEF/PI
            </h1>
            <p className="text-lg leading-7 text-gray-600 sm:text-center md:text-left">
              Acompanhe as notícias mais atualizadas de nossa APCEF
            </p>
          </div>
          <section className="body-font">
            <div className="container mx-auto px-5 pt-4">
              <Swiper
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {news.map((item) => (
                  <SwiperSlide key={item.id}>
                    <HomeBlogItem news={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Link href="/noticias">
                <a className="text-md font-bold">Mais Notícias</a>
              </Link>
            </div>
          </section>
          <div className="space-y-2 p-2 pb-2 md:pt-12 md:space-y-2">
            <h1 className="text-center md:text-left text-3xl font-bold">
              Notícias FENAE
            </h1>
            <p className="text-lg leading-7 text-gray-600 sm:text-center md:text-left">
              Acompanhe as notícias mais atualizadas da FENAE
            </p>
          </div>
          <section className="body-font">
            <div className="container mx-auto px-5 pt-4">
              <Swiper
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {news2.map((item) => (
                  <SwiperSlide key={item.id}>
                    <HomeBlogItem2 news2={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Link href="/noticias">
                <a className="text-md font-bold">Mais Notícias</a>
              </Link>
            </div>
          </section>
        </div>
        <div className="p-6">
          <div className="overflow-hidden rounded-xl shadow-md shadow-gray-300">
            <div className="duration-400 h-80 w-full scale-100 object-cover object-center transition-all">
              <Image layout="fill" src="/saude.png" alt="APCEF Saúde" />
            </div>
          </div>
          <div className="flex justify-center pt-4">
            <button className="shadow-cla-blue rounded-lg bg-red-apcef px-4 py-1 text-white drop-shadow-md hover:scale-105">
              SAIBA MAIS
            </button>
          </div>
          <div className="mt-4 overflow-hidden rounded-xl shadow-md shadow-gray-300">
            <div className="duration-400 h-80 w-full scale-100 object-cover object-center transition-all">
              <Image layout="fill" src="/associase.png" alt="Associase" />
            </div>
          </div>
          <div className="flex justify-center pt-4 pb-4">
            <button className="shadow-cla-blue rounded-lg bg-blue-apcef px-4 py-1 text-white drop-shadow-md hover:scale-105">
              ASSOCIE-SE
            </button>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full rounded-lg border-2 border-gray-50 shadow-lg">
              <div className="flex flex-col">
                <div className="my-3 p-4">
                  <div className="flex flex-row items-center space-x-4">
                    <div id="icon">
                      <span>
                        <SocialIcon kind="calendar" href="#" size="5" />
                      </span>
                    </div>
                    <div id="temp">
                      <h4 className="text-xl font-bold">EVENTOS</h4>
                    </div>
                  </div>
                </div>
                <div className="w-full place-items-end border-t-2 border-gray-100 text-right"></div>
              </div>
              <div className="flex flex-col">
                <div className="my-3 p-4">
                  <div className="flex flex-row items-center space-x-4">
                    <div id="icon">
                      <span>
                        <SocialIcon kind="calendar" href="#" size="5" />
                      </span>
                    </div>
                    <div id="temp">
                      <h4 className="text-xl font-bold">ANIVERSARIANTES</h4>
                    </div>
                  </div>
                </div>
                <div className="w-full place-items-end border-t-2 border-gray-100 text-right"></div>
              </div>
              <div className="flex flex-col">
                <div className="my-3 p-4">
                  <div className="flex flex-row items-center space-x-4">
                    <div id="icon">
                      <span>
                        <SocialIcon kind="calendar" href="#" size="5" />
                      </span>
                    </div>
                    <div id="temp">
                      <h4 className="text-xl font-bold">APCEF INFORMA</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-2 pt-4 md:grid md:grid-cols-3">
        <div className="col-span-2">
          <div className="space-y-2 p-2 pb-2 md:space-y-2">
            <h1 className="text-center md:text-left text-3xl font-bold">
              CONHEÇA NOSSA SEDE
            </h1>
          </div>
          <Swiper
            loop={true}
            spaceBetween={10}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Thumbs]}
            className={style.mySwiper2}
          >
            {photos.map((pic) =>
              pic.images.map((pic2) => (
                <SwiperSlide key={pic2.id}>
                  <SedeTheItem sedethe={pic2} />
                </SwiperSlide>
              ))
            )}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className={style.mySwiper}
          >
            {photos.map((pic) =>
              pic.images.map((pic2) => (
                <SwiperSlide key={pic2.id}>
                  <SedeTheItem sedethe={pic2} />
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
        <div className="mx-auto w-full max-w-lg rounded-lg px-10 py-8 shadow-xl md:ml-8">
          <div className="mx-auto max-w-md space-y-6" />
          <form action="" />
          <h2 className="text-2xl font-bold">Notícias On-line</h2>
          <p className="my-4 opacity-70">
            Receba informações da APCEF/PI pelo WhatsApp. É só cadastrar seu
            número com DDD.
          </p>
          <label className="text-sm font-bold uppercase opacity-70">
            Nome Completo
          </label>
          <input type="text" className="mt-2 mb-4 w-full rounded p-3" />
          <label className="text-sm font-bold uppercase opacity-70">
            WhatsApp
          </label>
          <input type="text" className="mt-2 mb-4 w-full rounded p-3" />
          <label className="text-sm font-bold uppercase opacity-70">
            Tipo de associado
          </label>
          <select className="mt-2 mb-4 w-full rounded p-3 focus:border-slate-600 focus:outline-none">
            <option value="">Contribuinte</option>
            <option value="">Empregado Caixa</option>
          </select>
          <div className="my-2 font-medium opacity-70">
            <input type="checkbox" />
            Receber informações de ações para o pessoal da ativa
          </div>
          <div className="my-2 font-medium opacity-70">
            <input type="checkbox" />
            Receber informações de atividades para aposentados
          </div>
          <input
            type="submit"
            className="my-2 cursor-pointer rounded bg-orange-apcef py-3 px-6 font-medium  text-white duration-300 ease-in-out hover:bg-blue-apcef"
            value="Enviar"
          />
          <form />
        </div>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="space-y-2 p-2 pb-2 md:pt-12 md:space-y-2">
          <h1 className="text-center md:text-left text-3xl font-bold">
            GALERIA DE FOTOS
          </h1>
        </div>
        <section className="body-font">
          <div className="container mx-auto px-5 py-10">
            <div className="-m-4 flex flex-wrap">
              <div className="p-1">
                <div className="md:grid md:grid-cols-6 gap-x-4 gap-y-1">
                  {fotos.map((item) => (
                    <div key={item.id}>
                      <FotoItem fotos={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/banners`);
  const banners = await res.json();

  const res2 = await fetch(`${API_URL}/noticias?tipo=apcefpi`);
  const news = await res2.json();

  const res3 = await fetch(`${API_URL}/fotos`);
  const fotos = await res3.json();

  const res4 = await fetch(`${API_URL}/sedes?slug=teresina`);
  const sedethe = await res4.json();

  const res5 = await fetch(`${API_URL}/noticias?tipo=fenae`);
  const news2 = await res5.json();

  return {
    props: { banners, news: news.slice(0, 5), fotos, sedethe, news2 },
    revalidate: 1,
  };
}
