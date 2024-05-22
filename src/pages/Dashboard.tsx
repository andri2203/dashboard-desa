import { ComponentPropsWithRef, forwardRef } from "react";

interface DashboardType extends ComponentPropsWithRef<"section"> {}

const Dashboard = forwardRef<HTMLDivElement, DashboardType>((props, ref) => {
  return (
    <section
      className="flex flex-col justify-center items-center text-4xl px-3 pb-3 min-h-screen"
      {...props}
      ref={ref}
    >
      Selamat Datang di Dashboard Desa
    </section>
  );
});

export default Dashboard;
