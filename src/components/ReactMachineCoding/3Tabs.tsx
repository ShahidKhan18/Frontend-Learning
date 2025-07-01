
import { Button } from "../ui/button";
import { useState } from "react";

import CounterClassBased from "../ReactTheory/ClassBasedComponents";


type TabData = {
  id: number;
  title: string;
  content: string | React.ReactNode;
}

const Tabs = () => {
    const tabsData:TabData[]=[
        {
            id:1,
            title:"Tab 1",
            content:"This is Tab 1 Content"
        },
        {
            id:2,
            title:"Tab 2",
            content:"This is Tab 2 Content"
        },
        {
            id:3,
            title:"Tab 3",
            content:"This is Tab 3 Content"
        },
        {
            id:4,
            title:"Tab 4",
            content:<CounterClassBased/>
        },
    ]
    const [active, setActive] = useState<number>(1);
    const handleTabClick=(e:React.MouseEvent<HTMLDivElement>)=>{
      const target=(e.target as HTMLElement).closest("button");
      if(target && target.dataset.id && active!==Number(target.dataset.id))
        setActive(Number(target.dataset.id));
    }
  return (
    <>
      <h2 className="text-center mb-2">TABS</h2>
      <div className="h-[83vh] max-w-full   grid grid-cols-[1fr_3fr] grid-rows-4 ">
        <div
          onClick={handleTabClick}
          className="tabNav  row-span-4 flex flex-col p-4 gap-4"
        >
          {tabsData.map(({ id, title }: TabData) => (
            <>
              <Button
                className={`cursor-pointer px-4 py-2 rounded-md transition-all ${
                  active === id ? "bg-blue-600 text-white" : ""
                }`}
                key={id}
                data-id={id}
              >
                {title}
              </Button>
            </>
          ))}
        </div>
        <div className="content  row-span-4 flex flex-col  items-center text-4xl ">
          {tabsData.map(({ id, content }: TabData) => (
            <div className={active === id ? "block" : "hidden"} key={id}>
              {" "}
              {content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Tabs