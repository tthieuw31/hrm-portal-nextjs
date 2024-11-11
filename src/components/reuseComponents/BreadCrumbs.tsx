"use client";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// import { useLocation } from "react-router-dom";

const BreadCrumb = () => {
  if (typeof window === "undefined") {
    return null; // Trả về null khi render phía server
  }

  const router = useRouter();
  const { pathname } = router;

  const pathNameMap = {
    "/": "Trang chủ",
    "/tuyen-dung/viec-lam": "Việc làm",
    "/jobs/detail/:id": "Chi tiết công việc",
    "/jobs/apply/:jobID": "Ứng tuyển",
    "/tuyen-dung/quy-trinh-tuyen-dung": "Quy trình tuyển dụng",

    "/gioi-thieu/ve-eco": "Về ECO",
    "/gioi-thieu/ve-eplus": "Về Eplus",
    "/gioi-thieu/chinh-sach-dai-ngo": "Chính sách đãi ngộ",

    "/apply-result": "Tra cứu kết quả ứng tuyển",

    "/blogs-news": "Nhịp sống",
    "/blogs-news/:id": "Chi tiết bài viết",

    "/contact": "Liên hệ",
  };

  const getPathName = (path: string): string => {
    const dynamicRoutes = Object.keys(pathNameMap);
    for (const route of dynamicRoutes) {
      const routeRegex = new RegExp(`^${route.replace(/:[^\s/]+/g, "[^/]+")}$`);
      if (routeRegex.test(path)) {
        return pathNameMap[route as keyof typeof pathNameMap];
      }
    }
    return path;
  };
  const handleReload = (path: string) => {
    if (location.pathname === path) {
      if (path === "/jobs") {
        router.push("/jobs");
        window.location.reload();
      } else {
        window.location.reload();
      }
    } else {
      window.location.href = path;
    }
  };
  // const breadCrumbView = () => {
  //   const { pathname } = location;
  //   const pathnames = pathname.split("/").filter((x) => x);
  //   const breadcrumbItems = [
  //     {
  //       title: (
  //         <Link href="/">
  //           <HomeOutlined />
  //         </Link>
  //       ),
  //     },
  //   ];

  //   pathnames.forEach((name, index) => {
  //     const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
  //     const displayName = getPathName(routeTo);
  //     const isJobPage = routeTo.endsWith("/jobs"); // HR muốn case đặc biệt khi ở trang jobs
  //     const isLast = index === pathnames.length - 1;
  //     breadcrumbItems.push({
  //       title: isLast ? (
  //         <span
  //           onClick={() => (isJobPage ? handleReload(routeTo) : undefined)}
  //           style={{
  //             cursor: isJobPage ? "pointer" : "default",
  //           }}
  //         >
  //           {displayName}
  //         </span>
  //       ) : (
  //         <Link href={routeTo}>{displayName}</Link>
  //       ),
  //     });
  //   });

  //   return (
  //     <div className="breadcrumbs px-3 sm:px-0">
  //       <Breadcrumb items={breadcrumbItems} />
  //     </div>
  //   );
  // };

  const breadCrumbView = () => {
    const pathnames = pathname.split("/").filter((x) => x);
    const breadcrumbItems = [
      {
        title: (
          <Link href="/">
            <HomeOutlined />
          </Link>
        ),
      },
    ];

    pathnames.forEach((name, index) => {
      const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
      const displayName = getPathName(routeTo);
      const isJobPage = routeTo.endsWith("/jobs");
      const isLast = index === pathnames.length - 1;

      breadcrumbItems.push({
        title: isLast ? (
          <span
            onClick={() => (isJobPage ? handleReload(routeTo) : undefined)}
            style={{
              cursor: isJobPage ? "pointer" : "default",
            }}
          >
            {displayName}
          </span>
        ) : (
          <Link href={routeTo}>{displayName}</Link>
        ),
      });
    });

    return (
      <div className="breadcrumbs px-3 sm:px-0">
        <Breadcrumb items={breadcrumbItems} />
      </div>
    );
  };

  return <>{breadCrumbView()}</>;
};

export default BreadCrumb;
