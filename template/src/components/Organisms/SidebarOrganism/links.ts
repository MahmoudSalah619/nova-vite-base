import { SidebarLinkProps } from "../../Molecules/SidebarLink/types";

export const generalLinks: Record<string, SidebarLinkProps[]> = {
  seller: [
    {
      icon: {
        name: "siderHome",
        size: 24,
      },
      label: "Dashboard",
      href: "/",
    },
    {
      icon: {
        name: "siderWorkOrder",
        size: 24,
      },
      label: "Work Orders",
      href: "/work-order",
      subLinks: [
        {
          href: "work-order-products",
          label: "Work Order Products",
        },
        {
          href: "work-order-resources",
          label: "Work Order Resources",
        },
        {
          href: "work-order-expenses",
          label: "Work Order Expenses",
        },
      ],
    },
    { icon: { name: "siderSLA", size: 24 }, label: "SLA", href: "/sla" },
    {
      icon: { name: "siderProjects", size: 24 },
      label: "Projects",
      href: "/projects",
    },
    {
      icon: { name: "siderInventory", size: 24 },
      label: "Inventory",
      href: "/inventory",
    },
    {
      icon: { name: "siderAssets", size: 24 },
      label: "Resources",
      href: "/resources",
    },
    {
      icon: { name: "siderAssets", size: 24 },
      label: "Assets",
      href: "/assets",
    },
    {
      icon: { name: "siderUserManagement", size: 24 },
      label: "User Management",
      href: "/user-management",
    },
  ],
  admin: [],
};

export const supportLinks: Record<string, SidebarLinkProps[]> = {
  seller: [
    {
      icon: { name: "siderSettings" },
      label: "Settings",
      href: "/settings",
      textVariant: "P8",
      color: "primary700",
      hasActiveStyle: false,
    },
  ],
  admin: [],
};
