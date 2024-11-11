"use client";
import { Button, Drawer, Image, Layout, Menu, MenuProps } from "antd";
import React, { useState, useCallback, useMemo, useEffect } from "react";
import { ecoPharmaLogo, logo } from "../../../public/assets/images";
import headerMenu from "@/constants/headerMenu";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { MenuDownOutline } from "../../../public/assets/svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = (): React.ReactElement => {
  const { Header } = Layout;
  const router = useRouter();
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const [logoUrl, setLogoUrl] = useState<typeof ecoPharmaLogo>(ecoPharmaLogo);

  const domain = typeof window !== "undefined" ? window.location.hostname : "";
  const initialLogoUrl = domain.includes("eco") ? ecoPharmaLogo : logo;
  useState<typeof ecoPharmaLogo>(initialLogoUrl);

  const showDrawer = useCallback(() => {
    setDrawerVisible(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerVisible(false);
  }, []);

  const items: MenuProps["items"] = [
    {
      key: "/gioi-thieu",
      label: "Giới thiệu",
      extra: <DownOutlined />,
      children: [
        {
          key: "/gioi-thieu/ve-eco",
          label: <Link href={"/gioi-thieu/ve-eco"}>Về ECO</Link>,
        },
        {
          key: "/gioi-thieu/ve-eplus",
          label: <Link href={"/gioi-thieu/ve-eplus"}>Về EPLUS</Link>,
        },
        {
          key: "/gioi-thieu/chinh-sach-dai-ngo",
          label: (
            <Link href={"/gioi-thieu/chinh-sach-dai-ngo"}>
              Chính sách đãi ngộ
            </Link>
          ),
        },
      ],
    },
    {
      key: "/recruitment",
      label: "Tuyển dụng",
      expandIcon: <DownOutlined />,
      children: [
        {
          key: "/jobs",
          label: <Link href={"/tuyen-dung/viec-lam"}>Việc làm</Link>,
        },
        {
          key: "/recruitment-process",
          label: (
            <Link href={"/tuyen-dung/quy-trinh-tuyen-dung"}>
              Quy trình tuyển dụng
            </Link>
          ),
        },
      ],
    },
    {
      key: "/apply-result",
      label: <Link href={"/tra-cuu-ket-qua"}>Tra cứu kết quả ứng tuyển</Link>,
    },
    {
      key: "/blogs-news",
      label: <Link href={"/nhip-song"}>Nhịp sống</Link>,
    },
    {
      key: "/lien-he",
      label: <Link href={"/nhip-song"}>Liên hệ</Link>,
    },
  ];

  return (
    <>
      <Header className="sticky-header flex items-center justify-between w-full px-2 md:px-4">
        <div className="container max-w-screen-xl md:px-16 2xl:px-8 mx-auto flex justify-between w-full items-center">
          <Link href="/" className="flex items-center">
            <Image src={logoUrl.src} width={127} alt="Logo" preview={false} />
          </Link>
          <div className="flex md:order-2">
            <Button
              id="navbar-icon"
              type="text"
              className="inline-flex items-center pr-2 w-11 lg:hidden md:hidden"
              icon={<MenuOutlined />}
              onClick={showDrawer}
            />
          </div>
          <div
            className="hidden md:flex md:w-full md:justify-end w-full md:pr-0 md:pt-1"
            // style={{ height: "70px", float: "right" }}
          >
            <Menu
              mode="horizontal"
              // inlineCollapsed={false}
              items={items}
              // onClick={handleMenuClick}
              style={{
                fontWeight: 400,
                fontSize: 15,
                width: "60%",
              }}
              // expandIcon={<DownOutlined />}
            />
          </div>
        </div>
      </Header>

      <Drawer
        title="Menu"
        placement="top"
        onClose={closeDrawer}
        open={drawerVisible}
        className="md:hidden"
      >
        <Menu
          mode="inline"
          items={items}
          // onClick={handleMenuClick}
        />
      </Drawer>
    </>
  );
};

export default React.memo(Header);
