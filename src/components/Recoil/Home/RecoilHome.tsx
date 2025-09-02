import { Outlet } from "react-router-dom";
const RecoilHome = () => {
  return (
    <div>
      <h2 className='text-center -mt-10 mb-4 underline uppercase text-4xl font-extrabold'>
        React Recoil
      </h2>
      <Outlet />
    </div>
  );
};
export default RecoilHome;
