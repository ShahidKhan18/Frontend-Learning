import { Outlet } from "react-router-dom";

const ReactRouterDomHome = () => {
  return (
    <div>
      <h1 className='text-center -mt-10 mb-4 underline uppercase text-4xl font-extrabold'>
        React Router DOM
      </h1>
      <Outlet />
    </div>
  );
};
export default ReactRouterDomHome;
