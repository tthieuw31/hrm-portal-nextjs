"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import BreadCrumb from "@/components/reuseComponents/BreadCrumbs";
import React, { useEffect, useState } from "react";
import {
  bottomBannerEco,
  bottomBannerEcoMobile,
} from "../../../../public/assets/images";
import HomeAPI, { Banner } from "@/apis/home/HomeAPI";
import { useMutation } from "react-query";
import { bannerEcoMobileDefault } from "../../../../public/assets/jpg";
import Head from "next/head";

const IntroduceParagraph = dynamic(
  () => import("@/components/aboutComponents/IntroduceParagraph")
);
const EcoHistoryBlock = dynamic(
  () => import("@/components/aboutComponents/EcoHistoryBlock")
);
const AchieveBlock = dynamic(
  () => import("@/components/aboutComponents/AchieveBlock")
);
const EcoVisionMissionBlock = dynamic(
  () => import("@/components/aboutComponents/EcoVisionMissionBlock")
);
const OverviewBlock = dynamic(
  () => import("@/components/aboutComponents/OverviewBlock")
);

const AboutEcoPage: React.FC = () => {
  const [bannerList, setBannerList] = useState<Banner[]>([]);

  useEffect(() => {
    getBannerList("ECO_BANNER");
  }, []);

  const { mutate: getBannerList } = useMutation(HomeAPI.getBanner, {
    onSuccess: (data) => {
      if (data != null && data.status.code === 200) {
        setBannerList(data.data);
      }
    },
    onError: (error: any) => {
      console.log("error:", error);
    },
  });

  const filteredData = bannerList
    ? bannerList.filter((item: any) => item.typeDevice === "WEB")
    : [];

  const filteredDataMobile = bannerList
    ? bannerList.filter((item: any) => item.typeDevice === "MOBILE")
    : [];

  return (
    <>
      <Head>
        <title>About Eco</title>
        <meta name="description" content="Learn more about Eco" />
      </Head>
      <div className="hidden md:block lg:block">
        {/* <CarouselPicSlide
          data={bannerList}
          dots={false}
          arrow={false}
          type="carousel"
        /> */}
        <img
          alt="eco-banner"
          src={filteredData[0]?.thumbnail}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="w-full md:hidden lg:hidden">
        <img
          alt="eco-banner-mobi"
          src={filteredDataMobile[0]?.thumbnail || bannerEcoMobileDefault.src}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="bg-white md:pb-10 lg:pt-14 max-w-screen-xl mx-auto">
        <div className="2xl:px-9 md:px-16">{/* <BreadCrumb /> */}</div>

        <IntroduceParagraph company="eco" />

        {/* <div className="md:hidden lg:hidden w-full h-full">
          <img
            alt="banner2-eco-mobi"
            src="https://s3-api.e-plus.vn/portal/20240724/202407241348026/center_banner_eco.png"
            className="w-full h-full object-cover"
          />
        </div> */}
      </div>

      <section className="section-history">
        <EcoHistoryBlock />
      </section>

      <section className="section_titles bg-white pt-20 block p-2">
        <AchieveBlock company="eco" />
      </section>

      <section className="section_vision pt-16 sm:pb-20 pb-4">
        <EcoVisionMissionBlock />
      </section>

      <section className="overview-block-eco xl:pt-10">
        <OverviewBlock />
        <div className="hidden md:flex justify-center items-center pt-10 pb-10 w-full">
          <div className="">
            <img
              src={bottomBannerEco.src}
              alt="achievement-eco"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex md:hidden justify-center items-center pt-10 pb-10 w-full">
          <div className="">
            <img
              src={bottomBannerEcoMobile.src}
              alt="achievement-eco"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutEcoPage;
