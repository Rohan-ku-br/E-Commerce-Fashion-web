import { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/GetProduct";
export const AuthContext = createContext();

const DataContext = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const {  categories, menProduct, womenProduct, kidsProduct, beautyProduct, homeKitchenProduct } = getLocalStorage();
    setUserData({  categories, menProduct, womenProduct, kidsProduct, beautyProduct, homeKitchenProduct });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default DataContext;
