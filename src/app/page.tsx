import CategoriesApi, { CategoriesData } from "@/apis/categories/CategoriesApi";
import HomeAPI, { HomeData } from "@/apis/home/HomeAPI";
import { message } from "antd";
import dynamic from "next/dynamic";

const CarouselPicSlide = dynamic(
  () => import("@/components/reuseComponents/CarouselPicSlide")
);
const SearchBlock = dynamic(
  () => import("@/components/reuseComponents/SearchBlock")
);
const DepartRecruitBlock = dynamic(
  () => import("@/components/homeComponents/DepartRecruitBlock")
);
const SuggestJobBlock = dynamic(
  () => import("@/components/homeComponents/SuggestJobBlock")
);
const ApplyMiddleWBanner = dynamic(
  () => import("@/components/homeComponents/ApplyMiddleWBanner")
);
const HstBlock = dynamic(() => import("@/components/homeComponents/HstBlock"));
const BlogBlock = dynamic(
  () => import("@/components/homeComponents/BlogBlock")
);

// export async function getServerSideProps() {
//   try {
//     const response = await CategoriesApi.getCategoriesData();
//     return {
//       props: {
//         categories: response.data || null,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     return {
//       props: {
//         categories: null,
//       },
//     };
//   }
// }

const Home = async () => {
  async function fetchHomeData(): Promise<HomeData | null> {
    try {
      const resp = await HomeAPI.get();
      return resp.data;
    } catch (error) {
      console.error("Failed to load data:", error);
      message.error("Failed to load data");
      return null;
    }
  }

  async function fetchCategoriesData(): Promise<CategoriesData | null> {
    try {
      const resp = await CategoriesApi.getCategoriesData();
      return resp.data;
    } catch (error) {
      console.error("Failed to load data:", error);
      message.error("Failed to load data");
      return null;
    }
  }

  const homeData = await fetchHomeData();
  const categories = await fetchCategoriesData();

  // let homeData: HomeData | null;
  // let categories: CategoriesData | null;

  // try {
  //   const [categoriesResponse, homeResponse] = await Promise.all([
  //     CategoriesApi.getCategoriesData(),
  //     HomeAPI.get(),
  //   ]);

  //   categories = categoriesResponse.data || null;
  //   homeData = homeResponse.data || null;
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  //   message.error("Failed to load data");
  // }

  const handleSearch = (values: any) => {
    console.log("Search data:", values);
    // const searchParams = new URLSearchParams();

    // if (values.recruitmentName) {
    //   searchParams.append("recruitmentName", values.recruitmentName);
    // }

    // if (values.jobTitlesCode) {
    //   searchParams.append("jobTitlesCode", values.jobTitlesCode);
    // }

    // if (values.workingPlace) {
    //   searchParams.append("workingPlace", values.workingPlace);
    // }

    // navigate(`/jobs?${searchParams.toString()}`);
  };

  if (!homeData) return <p>No data available</p>;
  // console.log("Banner List in Home:", homeData.bannerList);

  return (
    <div>
      <section className="section_1">
        <div className="banner-top">
          <CarouselPicSlide
            data={homeData.bannerList}
            type="carousel"
            arrow={true}
          />
          <div className="search-block-container">
            <div className="search-block">
              <SearchBlock
                type="home"
                // onSubmit={handleSearch}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section_2">
        <DepartRecruitBlock />
      </section>

      <section className="section_3">
        <SuggestJobBlock data={homeData.recruitmentList} />
      </section>

      <section className={`section_4 relative bg-white`}>
        <ApplyMiddleWBanner data={homeData} />
      </section>

      <div className="pt-10">
        <div className="w-full max-w-screen-xl mx-auto 2xl:px-5 lg:px-12 md:px-16">
          <div className="flex justify-center items-center text-center pb-5">
            <p
              className="px-1 sm:px-0"
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#46494F",
              }}
            >
              HỆ SINH THÁI CHĂM SÓC SỨC KHỎE
            </p>
          </div>

          <HstBlock data={homeData.bannerSlideShowList} />
        </div>
      </div>

      <section className={`section_6 bg-white pt-20 px-4 sm:px-0`}>
        <div className="w-full max-w-screen-xl mx-auto 2xl:px-4 lg:px-16 md:px-16">
          <div className="flex justify-center items-center text-center pb-4 ">
            <p
              className="uppercase"
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#46494F",
                lineHeight: "42px",
              }}
            >
              NƠI LÀM VIỆC LÝ TƯỞNG
            </p>
          </div>

          <BlogBlock data={homeData?.articleList} />
        </div>
      </section>
    </div>
  );
};

export default Home;
