const HolyGrailLayout = () => {
  const box="p-4 rounded-md flex justify-center items-center text-6xl text-white w-[100%] h-[100%]  "
  return (
    <>
      <h2 className="text-center mb-2">CSS GRID LAYOUTS</h2>
      <div className="h-[85vh] max-w-full   grid grid-cols-1 grid-rows-5 sm:grid-cols-2 sm:grid-rows-4 place-items-center gap-4 md:gird-rows-4 md:grid-cols-4">
        <div className={`${box} bg-[#BA56F6] sm:col-span-2 md:row-span-2 `}>
          1
        </div>
        <div className={`${box} bg-[#FF6161] md:row-span-2`}>2</div>
        <div className={`${box} bg-[#505CCA] sm:row-span-2 md:row-span-4 `}>
          3
        </div>
        <div className={`${box} bg-[#3DAD99] md:row-span-2`}>4</div>
        <div className={`${box} bg-[#BE3690] sm:col-span-2  md:row-span-2`}>
          5
        </div>
      </div>
    </>
  );
}
export default HolyGrailLayout