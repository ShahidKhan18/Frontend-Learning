import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const navDashboard: Array<{
    link: string;
    title: string;
  }> = [
    {
      link: "/profile",
      title: "Profile",
    },
    {
      link: "/about",
      title: "About",
    },
    {
      link: "/help",
      title: "Help",
    },
  ];
  return (
    <div className="grid grid-cols-4 h-full  bg-black">
      <aside className="col-span-1 p-2 border-1 flex flex-col gap-8  justify-center items-center">
        {navDashboard.map((r) => (
          <NavLink
            className={({ isActive }) =>
              `hover:underline uppercase font-bold text-4xl ${
                isActive ? "text-yellow-400" : "text-white"
              }`
            }
            to={"/rrd/dashboard" + r.link}
          >
            {r.title}
          </NavLink>
        ))}
      </aside>
      <div className="col-span-3 border-1 p-2 flex justify-center font-extrabold text-4xl items-center ">
        <Outlet />
      </div>
    </div>
  );
};
export default Dashboard;
