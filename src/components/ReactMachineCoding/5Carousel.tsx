import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Carousel = ({ loading, imageList, limitPerPage = 1 }) => {
  console.log(imageList);
  const [currentImg, setCurrentImg] = useState(0);
  const nextImg=()=>{
    setCurrentImg((prev) =>
      prev + limitPerPage < imageList.length - 1 ? prev + limitPerPage : 0
    );
  }
  const prevImg=()=>{
    setCurrentImg((prev) =>
      prev - limitPerPage > 0 ? prev - limitPerPage : imageList.length - limitPerPage
    ); 
  }
  return (
    <div className="relative flex justify-center items-center flex-col gap-8  h-[88vh]">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="relative  w-[60%]">
            <button
              onClick={prevImg}
              className="absolute z-100 top-[50%] -left-5 cursor-pointer rounded-full bg-gray-300 dark:bg-gray-800 p-2 flex items-center justify-center shadow-lg"
            >
              <ChevronLeft />
            </button>
            <div
              className={`w-full h-[400px]   grid  grid-rows-1 gap-2 overflow-hidden`}
              style={{ gridTemplateColumns: `repeat(${limitPerPage}, minmax(0, 1fr))`}}
            >
              {Array.from({ length: limitPerPage }).map((_, index) => (
               
                  <img
                    className={`w-full rounded-md h-full overflow-hidden object-cover object-center `}
                    src={imageList[currentImg + index]?.download_url}
                    alt=""
                  />
                  
                
              ))}

              {/* <img className="w-full" src="https://placehold.co/600x400" alt="" /> */}
            </div>
            <button
              onClick={nextImg}
              className="absolute z-100 top-[50%] -right-5 cursor-pointer rounded-full bg-gray-300 dark:bg-gray-800 p-2 flex items-center justify-center shadow-lg "
            >
              <ChevronRight />
            </button>
          </div>
          <div className="flex items-center justify-center gap-4">
            {Array.from({
              length: Math.ceil(imageList.length / limitPerPage),
            }).map((_, index) => (
              <p
                className={` p-2 rounded-full cursor-pointer  ${
                  index === currentImg/limitPerPage ? "bg-blue-400" : "bg-gray-300 "
                } `}
                onClick={()=>setCurrentImg(index)}
              >
                
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default Carousel;
