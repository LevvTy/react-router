import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Desktop from "./Desktop";
import Laptop from "./Laptop";

const Page17 = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />}>
            <Route
              index
              // path="laptop" :Nếu sử dụng index để mặc định hiển thị khi đứng ở product thì không cần dùng path
              element={<Laptop />}
            />
            <Route path="desktop" element={<Desktop />} />
          </Route>
          <Route path="/blog/:code" element={<h1>Blog</h1>} />
          <Route path="*" element={<h1>Not Found!</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default Page17;
