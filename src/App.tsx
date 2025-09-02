import { AppSidebar } from "@/components/Layout/app-sidebar";

import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import { ThemeProvider } from "./components/Theme/theme-provider";
import { ModeToggle } from "./components/Theme/mode-toggle";
import MapFilterReduce from "./components/ReactTheory/MapFilterReduce";
import CounterClassBased from "./components/ReactTheory/ClassBasedComponents";
import HolyGrailLayout from "./components/ReactMachineCoding/2HolyGrailLayout";
import Tabs from "./components/ReactMachineCoding/3Tabs";
import Accordian from "./components/ReactMachineCoding/4Accordian";
import Carousel from "./components/ReactMachineCoding/5Carousel";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Paggination from "./components/ReactMachineCoding/6Paggination";
import ReactThroryHome from "./components/ReactTheory/home/ReactTheoryHome";
import MachineCodingHome from "./components/ReactMachineCoding/Home/MachineCodingHome";
import RHFHome from "./components/ReactHookForm/Home/RHFHome";
import Basic from "./components/ReactHookForm/Basic";
import ReactRouterDomHome from "./components/ReactRouterDom/ReactRouterDomHome";
import Login from "./components/ReactRouterDom/auth/Login";
import ProtectedRoute from "./components/ReactRouterDom/ProtectedRoute";
import Dashboard from "./components/ReactRouterDom/Dashboard";
import Help from "./components/ReactRouterDom/Dashboard/Help";
import About from "./components/ReactRouterDom/Dashboard/About";
import Profile from "./components/ReactRouterDom/Dashboard/Profile";
import Recoil from "./components/Recoil/Recoil";
import RecoilHome from "./components/Recoil/Home/RecoilHome";

const App = () => {
   const [loading, setLoading] = useState<boolean>(false);
   const [imageList, setImageList] = useState([]);
   const fetchImages=async(imgLimit:number)=>{
      setLoading(true);
      try {
        const ImagesJSON = await fetch(
          `https://picsum.photos/v2/list?limit=${imgLimit}`
        );
        const Images=await ImagesJSON.json();
        setImageList(Images);
      } catch (error) {
        console.log("Error in fetchImages",error);
      }finally{
        setLoading(false);
      }
   }
   useEffect(()=>{
      fetchImages(20)
   },[])

   const DashboardWelecome = () => {
     return (
       <>
         <h1>Welcome Shahid, On dashboard Page</h1>
       </>
     );
   };

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
            <div className='flex justify-between items-center  w-full'>
              <div className='flex items-center gap-2 px-4'>
                <SidebarTrigger />
                <Separator orientation='vertical' className='mr-2 h-4' />
              </div>
              <div className='mr-2'>
                <ModeToggle />
              </div>
            </div>
          </header>
          <div className='m-4'>
            <Routes>
              <Route path='/' element={<Home />} />

              {/* React Theory Routing */}
              <Route path='reactTheory' element={<ReactThroryHome />}>
                <Route path='mapFilterReduce' element={<MapFilterReduce />} />
                <Route
                  path='classBasedCounter'
                  element={<CounterClassBased />}
                />
              </Route>

              {/* Maching Coding Questions */}
              <Route path='machineCoding' element={<MachineCodingHome />}>
                <Route path='2HolyGrailLayout' element={<HolyGrailLayout />} />
                <Route path='3tabs' element={<Tabs />} />
                <Route path='4accordian' element={<Accordian />} />
                <Route
                  path='5carousel'
                  element={
                    <Carousel
                      loading={loading}
                      imageList={imageList}
                      limitPerPage={1}
                    />
                  }
                />
                <Route path='6pagination' element={<Paggination />} />
              </Route>

              {/* React Hook Form Routes */}
              <Route path='rhf' element={<RHFHome />}>
                <Route path='form' element={<Basic />} />
              </Route>
              {/* React Router DOM Routes */}
              <Route path='rrd' element={<ReactRouterDomHome />}>
                <Route path='login' element={<Login />} />

                <Route element={<ProtectedRoute />}>
                  <Route path='dashboard' element={<Dashboard />}>
                    <Route index element={<DashboardWelecome />} />
                    <Route path='help' element={<Help />} />
                    <Route path='about' element={<About />} />
                    <Route path='profile' element={<Profile />} />
                  </Route>
                </Route>
                <Route
                  path='*'
                  element={
                    <div className='flex justify-center items-center font-extrabold text-6xl h-screen'>
                      404:( : Page Not Found
                    </div>
                  }
                />
              </Route>

              {/* Recoil Routes */}
              <Route path='recoil' element={<RecoilHome />}>
                <Route path='basic' element={<Recoil />} />
              </Route>
            </Routes>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
};
export default App;
