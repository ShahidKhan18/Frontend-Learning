
import { Outlet } from "react-router-dom";

const RHFHome = () => {
  return (
    <div>
      <h1 className='text-center -mt-10 mb-4 underline uppercase text-4xl font-extrabold'>RHFHome</h1>
      <Outlet />
    </div>
  );
};
export default RHFHome;
