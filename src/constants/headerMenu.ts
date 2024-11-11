const headerMenu = [
  {
    key: "/gioi-thieu",
    label: "Giới thiệu",
    // icon: typeof DownOutlined,
    children: [
      {
        key: "/gioi-thieu/ve-eco",
        label: "Về ECO",
        // screenId: 1,
      },
      {
        key: "/gioi-thieu/ve-eplus",
        label: "Về EPLUS",
        // screenId: 2,
      },
      {
        key: "/gioi-thieu/ve-chinh-sach-dai-ngo",
        label: "Chính sách đãi ngộ",
        // screenId: 2,
      },
    ],
  },
  {
    key: "/recruitment",
    label: "Tuyển dụng",
    children: [
      {
        key: "/jobs",
        label: "Việc làm",
        // path: '/recruitment/jobs',
      },
      {
        key: "/recruitment-process",
        label: "Quy trình tuyển dụng",
      },
    ],
  },
  {
    key: "/apply-result",
    label: "Tra cứu kết quả ứng tuyển",
  },
  {
    key: "/blogs-news",
    label: "Nhịp sống",
  },
  {
    key: "/contact",
    label: "Liên hệ",
  },
];

export default headerMenu;
