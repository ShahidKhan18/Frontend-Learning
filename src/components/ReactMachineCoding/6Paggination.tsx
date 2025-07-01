import { useEffect, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { isArray } from "util";

const Paggination = () => {
     const [loading, setLoading] = useState<boolean>(false);
       const [imageList, setImageList] = useState([]);
       const [imagePerPage, setImagePerPage] = useState(12);
       const [pageNum, setPageNum] = useState(0);
       const fetchImages=async(imgLimit:number)=>{
          setLoading(true);
          try {
            const ImagesJSON = await fetch(
              `https://picsum.photos/v2/list?limit=${imgLimit}`
            );
            
            const Images=await ImagesJSON.json();
            console.log(typeof Images)
            setImageList(Images);
          } catch (error) {
            console.log("Error in fetchImages",error);
          }finally{
            setLoading(false);
          }
       }
       useEffect(()=>{
          fetchImages(100)
       },[])
       
  return (
    <>
      <ScrollArea>
        <div className="max-w-[80vw] place-items-center p-4  h-[80vh] border-4 mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-y-scroll">
          {imageList
            .slice(pageNum*imagePerPage,(pageNum+1)* imagePerPage)
            .map((imgCard) => (
              <>
                <img
                  className="rounded-md"
                  src={imgCard?.download_url}
                  alt=""
                />
              </>
            ))}
        </div>
      </ScrollArea>
      <div className="pageNumber flex w-full gap-10 justify-center mt-4">
       {
        Array.from({length:Math.ceil(imageList.length/imagePerPage)}).map((_,index)=>(<>
        <p  onClick={()=>setPageNum(index)} className={`flex ${pageNum===index ? "bg-sky-400" :""}  cursor-pointer justify-center items-center p-2 w-[25px] h-[25px] text-blue-950 font-extrabold   rounded-full bg-gray-300`}>{index + 1}</p>
        </>))
       }
      </div>
    </>
  );
}
export default Paggination