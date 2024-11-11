"use client";
import { useInView } from "react-intersection-observer";
import { bannerCenterMobileDefault } from "../../../public/assets/jpg";
import { useMutation } from "react-query";
import CandidateApplyAPI from "@/apis/home/CandidateApplyAPI";
import { openNotificationWithIcon } from "../reuseComponents/notificationWithIcon";
import { useState } from "react";
import ApplyBlock from "./ApplyBlock";
import ApplyNotifyBlock from "./ApplyNotifyBlock";
import CarouselPicSlide from "../reuseComponents/CarouselPicSlide";

interface Props {
  data?: any;
}

const ApplyMiddleWBanner: React.FC<Props> = ({ data }) => {
  const [isApplied, setIsApplied] = useState(false);

  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: false,
    // threshold: 7,
    // rootMargin: '0px 0px -1% 0px',
  });
  const { ref: overlayRef, inView: overlayInView } = useInView({
    triggerOnce: false,
    // threshold: 7,
    // rootMargin: '0px 0px -1% 0px',
  });
  const { ref: applyBlockRef, inView: applyBlockInView } = useInView({
    triggerOnce: false,
    // threshold: 7,
    // rootMargin: '0px 0px -1% 0px',
  });

  const { mutate: postApply } = useMutation(CandidateApplyAPI.applyCV, {
    onSuccess: (data) => {
      if (data.status.code === 200) {
        openNotificationWithIcon("success", "Ứng tuyển thành công");
        setIsApplied(true);
      } else {
        openNotificationWithIcon("error", "Lỗi hệ thống");
      }
    },
    onError: (error: any) => {
      console.log("error:", error);
    },
  });

  const handleApply = (values: any) => {
    const applyReq = {
      vacancies: values.vacancies || "",
      workingLocation: values.workingLocation || "",
      candidateEmail: values.candidateEmail || "",
      candidateName: values.candidateName || "",
      candidatePhoneNumber: values.candidatePhoneNumber || "",
      urlPortfolio: values.urlPortfolio || "",
      objectName: values.objectName || "",
      bucketName: values.bucketName || "",
    };
    postApply(applyReq);
  };

  return (
    <div>
      <div className="banner w-full relative hidden lg:block min-h-full">
        <div className="relative img-desktop">
          <div className="overflow-clip">
            <img
              alt=""
              ref={imgRef}
              className={`custom-image-center ${
                imgInView ? "slide-in-right" : ""
              }`}
              src={data.bannerCenterList?.[0].thumbnail}
            />
          </div>
          <div className="position-top lg:flex hidden mx-auto max1920 px-3 items-center">
            <div className="flex justify-start items-start w-full 2xl:pl-5 2xl:pr-28 md:px-14">
              <div
                ref={overlayRef}
                className={`overlay ${overlayInView ? "slide-in-left" : ""}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-top sm:flex sm:items-center hidden mx-auto max-w-screen-xl px-3">
        <div
          ref={applyBlockRef}
          className={`h-full flex justify-start items-center w-1/2 2xl:pl-5 2xl:pr-28 md:px-14 ${
            applyBlockInView ? "slide-in-left" : ""
          }`}
        >
          {!isApplied ? (
            <ApplyBlock onSubmit={handleApply} />
          ) : (
            <ApplyNotifyBlock />
          )}
        </div>
      </div>
      <div className="lg:hidden items-center max-w-screen-xl px-3.5 pt-8">
        {!isApplied ? (
          <ApplyBlock onSubmit={handleApply} />
        ) : (
          <ApplyNotifyBlock />
        )}
      </div>
      <div className="relative img-mobi lg:hidden">
        {/* <CarouselPicSlide
          data={data.bannerCenterList}
          type="carousel"
          dots={false}
          arrow={false}
        /> */}
        <img alt="banner-center" src={bannerCenterMobileDefault.src} />
      </div>
    </div>
  );
};

export default ApplyMiddleWBanner;
