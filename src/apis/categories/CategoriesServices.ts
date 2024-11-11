import CategoriesApi from "@/apis/categories/CategoriesApi";
import { CategoriesData } from "@/apis/categories/CategoriesApi";

export const fetchCategoriesServerSide =
  async (): Promise<CategoriesData | null> => {
    try {
      const response = await CategoriesApi.getCategoriesData();
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      return null;
    }
  };
