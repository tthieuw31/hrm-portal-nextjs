"use client";
import { Col, Row, Typography } from "antd";
import {
  BusinessIcon,
  CustomerServiceIcon,
  DepartIcon,
  MktIcon,
  WareHouseIcon,
} from "../../../public/assets/svg";
import BlockDepartCard from "@/components/reuseComponents/BlockDepartCard";
import React, { useMemo } from "react";
// import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import styles from "./DepartRecruitBlock.module.css";
import { useRouter } from "next/navigation";

const { Title } = Typography;

const DepartRecruitBlock: React.FC = () => {
  const router = useRouter();

  const settings = useMemo(
    () => ({
      arrows: false,
      infinite: false,
      speed: 6000,
      slidesToShow: 5,
      slidesToScroll: 5,
      autoplay: true,
      autoplaySpeed: 7000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    }),
    []
  );

  const departments = [
    {
      icon: <MktIcon style={{ height: "80px", width: "80px" }} />,
      title: "KHỐI MARKETING<br />TRUYỀN THÔNG",
      code: "MK",
    },
    {
      icon: <DepartIcon style={{ height: "80px", width: "80px" }} />,
      title: "KHỐI VĂN PHÒNG",
      code: "VP",
    },
    {
      icon: <BusinessIcon style={{ height: "80px", width: "80px" }} />,
      title: "KHỐI KINH DOANH",
      code: "KD",
    },
    {
      icon: <CustomerServiceIcon style={{ height: "80px", width: "80px" }} />,
      title: "KHỐI DỊCH VỤ<br />KHÁCH HÀNG",
      code: "DVKH",
    },
    {
      icon: <WareHouseIcon style={{ height: "80px", width: "80px" }} />,
      title: "KHỐI KHO VẬN",
      code: "KV",
    },
  ];

  return (
    <div className="bg-white">
      <div className="hidden lg:block pt-8 px-9 pb-8">
        <div className="mx-auto max-w-screen-xl md:px-16 2xl:px-9">
          <div className="w-full flex justify-center">
            <p
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#46494F",
              }}
            >
              KHỐI TUYỂN DỤNG
            </p>
          </div>
          <Row gutter={[8, 8]} className="justify-between mt-20">
            {departments.map((dept) => (
              <Col key={dept.code} lg={4}>
                <BlockDepartCard
                  type="department"
                  svgComponent={dept.icon}
                  title={dept.title}
                  onClick={() =>
                    router.push(`/jobs?blockDepartmentCode=${dept.code}`)
                  }
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <div className="flex lg:hidden mt-8 mb-4 py-0">
        <div className="w-full">
          <div className="w-full text-center">
            <Title level={3} style={{ fontWeight: "700", color: "#46494F" }}>
              KHỐI TUYỂN DỤNG
            </Title>
          </div>

          <div className={`w-full px-6 ${styles.sliderWrapper}`}>
            <Slider {...settings} className="slider-khoituyendung">
              {departments.map((dept) => (
                <BlockDepartCard
                  key={dept.code}
                  type="department"
                  svgComponent={dept.icon}
                  title={dept.title}
                  onClick={
                    () => console.log("Clicked on department:", dept.code)
                    // router.push("/jobs", { state: { bdCode: dept.code } })
                  }
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartRecruitBlock;
