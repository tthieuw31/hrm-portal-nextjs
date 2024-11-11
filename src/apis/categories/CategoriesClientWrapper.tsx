"use client";
import { CategoriesProvider } from "@/apis/categories/CategoriesContext";

interface CategoriesClientWrapperProps {
  categoriesData: any;
  children: React.ReactNode;
}

const CategoriesClientWrapper: React.FC<CategoriesClientWrapperProps> = ({
  categoriesData,
  children,
}) => {
  return (
    <CategoriesProvider categoriesData={categoriesData}>
      {children}
    </CategoriesProvider>
  );
};

export default CategoriesClientWrapper;
