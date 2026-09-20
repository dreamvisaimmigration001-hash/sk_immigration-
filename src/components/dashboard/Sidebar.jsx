import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Users, FileText, Settings, LogOut } from "lucide-react";

const Sidebar = ({ role = "admin", onLogout }) => {
  const location = useLocation();

  const navItems = [
    {
      name: "Visa Applications",
      icon: <FileText size={20} />,
      path: "/dashboard",
    },

    {
      name: "Settings",
      icon: <Settings size={20} />,
      path: "/dashboard/settings",
    },
  ];

  return (
    <div
      style={{
        width: "250px",
        backgroundColor: "#1e293b",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "2rem",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        ImmiDash
      </h2>
      <nav style={{ flex: 1 }}>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {navItems.map((item) => {
            const isActive =
              location.pathname === item.path ||
              (item.path !== "/dashboard" &&
                location.pathname.startsWith(item.path));
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px 15px",
                    borderRadius: "8px",
                    color: isActive ? "#38bdf8" : "#cbd5e1",
                    backgroundColor: isActive
                      ? "rgba(56, 189, 248, 0.1)"
                      : "transparent",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div
        style={{
          marginTop: "auto",
          paddingTop: "20px",
          borderTop: "1px solid #334155",
        }}
      >
        <button
          onClick={onLogout}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "#cbd5e1",
            textDecoration: "none",
            padding: "10px 15px",
            background: "none",
            border: "none",
            cursor: "pointer",
            width: "100%",
            textAlign: "left",
            fontSize: "1rem"
          }}
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
