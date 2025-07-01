import { useState } from "react";

const Accordian = () => {
  const AccordianData = [
    {
      id: 1,
      title: "Accordian 1",
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam odit non laborum omnis! Illo, aperiam? Ad laudantium architecto fugiat at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure maiores ad sit sunt, incidunt eum veritatis vel neque ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam odit non laborum omnis! Illo, aperiam? Ad laudantium architecto fugiat at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure maiores ad sit sunt, incidunt eum veritatis vel neque ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam odit non laborum omnis! Illo, aperiam? Ad laudantium architecto fugiat at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure maiores ad sit sunt, incidunt eum veritatis vel neque ea.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam odit non laborum omnis! Illo, aperiam? Ad laudantium architecto fugiat at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure maiores ad sit sunt, incidunt eum veritatis vel neque ea. ",
    },
    {
      id: 2,
      title: "Accordian 2",
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam odit non laborum omnis! Illo, aperiam? Ad laudantium architecto fugiat at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure maiores ad sit sunt, incidunt eum veritatis vel neque ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam odit non laborum omnis! Illo, aperiam? Ad laudantium architecto fugiat at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure maiores ad sit sunt, incidunt eum veritatis vel neque ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam odit non laborum omnis! Illo, aperiam? Ad laudantium architecto fugiat at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure maiores ad sit sunt, incidunt eum veritatis vel neque ea.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam odit non laborum omnis! Illo, aperiam? Ad laudantium architecto fugiat at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure maiores ad sit sunt, incidunt eum veritatis vel neque ea. ",
    },
    {
      id: 3,
      title: "Accordian 3",
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam odit non laborum omnis! Illo, aperiam? Ad laudantium architecto fugiat at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure maiores ad sit sunt, incidunt eum veritatis vel neque ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam odit non laborum omnis! Illo, aperiam? Ad laudantium architecto fugiat at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure maiores ad sit sunt, incidunt eum veritatis vel neque ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam odit non laborum omnis! Illo, aperiam? Ad laudantium architecto fugiat at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure maiores ad sit sunt, incidunt eum veritatis vel neque ea.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam odit non laborum omnis! Illo, aperiam? Ad laudantium architecto fugiat at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure maiores ad sit sunt, incidunt eum veritatis vel neque ea. ",
    },
    {
      id: 4,
      title: "Accordian 4",
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam odit non laborum omnis! Illo, aperiam? Ad laudantium architecto fugiat at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure maiores ad sit sunt, incidunt eum veritatis vel neque ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam odit non laborum omnis! Illo, aperiam? Ad laudantium architecto fugiat at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure maiores ad sit sunt, incidunt eum veritatis vel neque ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam odit non laborum omnis! Illo, aperiam? Ad laudantium architecto fugiat at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure maiores ad sit sunt, incidunt eum veritatis vel neque ea.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam odit non laborum omnis! Illo, aperiam? Ad laudantium architecto fugiat at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure maiores ad sit sunt, incidunt eum veritatis vel neque ea. ",
    },
  ];
  const [accordianOpen, setAccordianOpen] = useState(1);
  const handleAccOpen = (e: React.MouseEvent<HTMLDivElement>, id) => {
    const target = (e.target as HTMLElement).closest("h2");
    console.log(target?.dataset.id);
    if (Number(target?.dataset.id) === accordianOpen) setAccordianOpen(0);
    else setAccordianOpen(id);
  };
  return (
    <div className="flex justify-center flex-col items-center gap-4 overflow-hidden m=0">
      {AccordianData.map(({ id, title, data }) => (
        <div key={id} className="w-[60%] text-center my-2  ">
          <div className="cursor-pointer">
            <h2
              className={`py-2 w-full border-2  rounded-t-md shadow-md ${
                id === accordianOpen ? "rounded-t-md" : "rounded-md"
              }`}
              data-id={id}
              onClick={(e) => handleAccOpen(e, id)}
            >
              {title}
            </h2>
          </div>
          <div
            className={`data text-left p-4 rounded-b-md dark:bg-gray-800 bg-gray-300 
  transition-all duration-400 ease-in-out 
  ${
    id === accordianOpen
      ? "opacity-100 max-h-[500px]"
      : "opacity-0 max-h-0 overflow-hidden"
  }
  `}
          >
            {data}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Accordian;
