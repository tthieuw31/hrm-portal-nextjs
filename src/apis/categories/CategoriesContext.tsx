// CategoriesContext.tsx
import React, { createContext, ReactNode, useContext } from "react";
import { CategoriesData } from "@/apis/categories/CategoriesApi";

interface CategoriesContextProps {
  categories: CategoriesData | null;
}

const CategoriesContext = createContext<CategoriesContextProps | undefined>(
  undefined
);

export const CategoriesProvider: React.FC<{
  children: ReactNode;
  categoriesData: CategoriesData;
}> = ({ children, categoriesData }) => {
  return (
    <CategoriesContext.Provider value={{ categories: categoriesData }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategories = (): CategoriesContextProps => {
  const context = useContext(CategoriesContext);
  if (!context) {
    throw new Error("useCategories must be used within a CategoriesProvider");
  }
  return context;
};
