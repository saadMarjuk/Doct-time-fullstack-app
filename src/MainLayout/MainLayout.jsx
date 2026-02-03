import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer";
import useDynamicTitle from "../UI/DynamicTitle";
import Loader from "../UI/Loader";

const MainLayout = () => {
  const navigation = useNavigation();
  useDynamicTitle();

  return (
    <div className="bg-gray-100">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-374px)]">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
          {navigation.state === "loading" ? (
            <Loader></Loader>
          ) : (
            <Outlet></Outlet>
          )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
