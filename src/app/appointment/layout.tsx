import React from "react";

const AppointmentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen py-12 px-6 justify-center">
      {children}
    </div>
  );
};

export default AppointmentLayout;
