import React from "react";
// import { bgEplus, centerBgBannerEplus, logoHST } from "assets/images";
import { bgEplus } from "../../../public/assets/images";
import {
  EcoPharmaLogo,
  TamAnhHosLogo,
  TamriLogo,
  VnvcLogo,
} from "../../../public/assets/svg";

const CenterContentEplus: React.FC = () => {
  return (
    <>
      <div className="bg-white my-10 w-full h-96 relative flex justify-center">
        <img
          src={bgEplus.src}
          alt="bgEplus"
          className="w-full lg:h-3/4 h-4/6 object-cover opacity-50"
        />

        <div className="absolute lg:top-16 top-10 flex justify-center items-center">
          <div className="mt-0 w-full lg:mx-auto mx-5">
            <p
              style={{
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "22px",
                textAlign: "center",
                color: "#46494F",
              }}
            >
              Eplus Research là agency đầu tiên tại Việt Nam tiên phong trong
              lĩnh vực y tế <br /> sở hữu các đối tác chiến lược giá trị là các
              nhà cung cấp dịch vụ y tế, chăm sóc sức khoẻ hàng đầu
            </p>
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center ">
          <div className="flex justify-between px-4 items-center w-full max-w-screen-xl 2xl:px-8 lg:px-16 md:px-16">
            <EcoPharmaLogo className="eco-pharma-logo" />
            <TamAnhHosLogo className="tam-anh-hos-logo" />
            <VnvcLogo className="vnvc-logo" />
            <TamriLogo className="tamri-logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CenterContentEplus;
