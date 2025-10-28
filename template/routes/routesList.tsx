import Home from "@/src/components/Pages/Home";
import Login from "@/src/components/Pages/Auth/Login";
import AuthLayout from "@/src/components/Templates/AuthLayout";
import DashboardLayout from "@/src/components/Templates/DashboardLayout";
import RequestAddNewUser from "@components/Pages/RequestAddNewUser";
import RequestAddNewWorkOrder from "@components/Pages/RequestAddNewWorkOrder";
import SignUpOrganism from "@/src/components/Organisms/SignUpOrganism";
import ForgetPassword from "@/src/components/Pages/Auth/ForgetPassword";
import ChangePassword from "@/src/components/Pages/Auth/ChangePassword";
import WorkOrder from "@components/Pages/WorkOrder";
import { Outlet, RouteObject } from "react-router-dom";
import OTP from "@/src/components/Pages/Auth/OTP";
import UserManagement from "@components/Pages/UserManagement";
import Projects from "@/src/components/Pages/Projects";
import ProjectDetails from "@/src/components/Pages/Projects/ProjectDetails";
import UserDetails from "@/src/components/Pages/UserManagement/UserDetails";
import UserProjects from "@components/Pages/UserManagement/UserProjects";
import Settings from "@/src/components/Pages/Settings";
import Profile from "@/src/components/Pages/Profile";
import Assets from "@components/Pages/Assets";
import AssetDetails from "@components/Pages/Assets/AssetDetails";
import Products from "@/src/components/Pages/Products";
import ProductDetails from "@/src/components/Pages/Products/ProductDetails";
import Resources from "@components/Pages/Resources";
import ResourceDetails from "@components/Pages/Resources/ResourceDetails";
import WorkOrderResources from "@components/Pages/WorkOrder/Resources";
import WorkOrderResourceDetails from "@components/Pages/WorkOrder/Resources/ResourceDetails";
import Sla from "@components/Pages/Sla";
import SlaDetails from "@components/Pages/Sla/SlaDetails";
import WorkOrderExpenses from "@components/Pages/WorkOrder/Expenses";
import WorkOrderExpenseDetails from "@components/Pages/WorkOrder/Expenses/ExpenseDetails";
import WorkOrderPorducts from "@components/Pages/WorkOrder/Products";
import WorkOrderProductDetails from "@components/Pages/WorkOrder/Products/ProductDetails";
import SvgsLayout from "@components/Templates/SVGS";

const routesList: Record<string, RouteObject[]> = {
  // Auth screens
  auth: [
    {
      path: "",
      element: (
        <AuthLayout
          layoutText="Welcome Back!"
          formTitle="facility_management_system"
        >
          <Login />
        </AuthLayout>
      ),
    },
    {
      path: "/login",
      element: (
        <AuthLayout
          layoutText="Welcome Back!"
          formTitle="facility_management_system"
        >
          <Login />
        </AuthLayout>
      ),
    },
    {
      path: "/sign-up",
      element: (
        <AuthLayout
          layoutText="Signup_your_Account"
          formTitle="facility_management_system"
        >
          <SignUpOrganism />
        </AuthLayout>
      ),
    },
    {
      path: "/forget-password",
      element: (
        <AuthLayout
          layoutText="Welcome_Back"
          formTitle="facility_management_system"
        >
          <ForgetPassword />
        </AuthLayout>
      ),
    },
    {
      path: "/change-password",
      element: (
        <AuthLayout
          layoutText="Welcome_Back"
          formTitle="facility_management_system"
        >
          <ChangePassword />
        </AuthLayout>
      ),
    },
    {
      path: "/email-validation",
      element: (
        <AuthLayout
          layoutText="Welcome_Back"
          formTitle="facility_management_platform"
        >
          <OTP />
        </AuthLayout>
      ),
    },
  ],
  // Common screens for all user types (Admin,type2)
  common: [
    {
      path: "/",
      element: (
        <DashboardLayout>
          <Home />
        </DashboardLayout>
      ),
    },
    {
      path: "/svgs",
      element: <SvgsLayout />,
    },
    {
      path: "/work-order",
      element: (
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
      ),
      children: [
        {
          index: true,
          element: <WorkOrder />,
        },
        {
          path: "work-order-products",
          element: <Outlet />,
          children: [
            {
              index: true,
              element: <WorkOrderPorducts />,
            },
            {
              path: ":productId",
              element: <WorkOrderProductDetails />,
            },
          ],
        },
        {
          path: "work-order-resources",
          element: <Outlet />,
          children: [
            {
              index: true,
              element: <WorkOrderResources />,
            },
            {
              path: ":resourceId",
              element: <WorkOrderResourceDetails />,
            },
          ],
        },
        {
          path: "work-order-expenses",
          element: <Outlet />,
          children: [
            {
              index: true,
              element: <WorkOrderExpenses />,
            },
            {
              path: ":expenseId",
              element: <WorkOrderExpenseDetails />,
            },
          ],
        },
      ],
    },
    {
      path: "/projects",
      element: (
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
      ),
      children: [
        {
          index: true,
          element: <Projects />,
        },
        { path: ":projectId", element: <ProjectDetails /> },
      ],
    },
    {
      path: "/sla",
      element: (
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
      ),
      children: [
        {
          index: true,
          element: <Sla />,
        },
        { path: ":slaId", element: <SlaDetails /> },
      ],
    },
    {
      path: "/inventory",
      element: (
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
      ),
      children: [
        {
          index: true,
          element: <Products />,
        },
        {
          path: ":productId",
          element: <ProductDetails />,
        },
      ],
    },
    {
      path: "/request-add-new-user",
      element: (
        <DashboardLayout>
          <RequestAddNewUser />
        </DashboardLayout>
      ),
    },
    {
      path: "/add-new-work-order",
      element: (
        <DashboardLayout>
          <RequestAddNewWorkOrder />
        </DashboardLayout>
      ),
    },
    {
      path: "/resources",
      element: (
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
      ),
      children: [
        {
          index: true,
          element: <Resources />,
        },
        { path: ":resourceId", element: <ResourceDetails /> },
      ],
    },
    {
      path: "/assets",
      element: (
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
      ),
      children: [
        {
          index: true,
          element: <Assets />,
        },
        { path: ":assetId", element: <AssetDetails /> },
      ],
    },
    {
      path: "/user-management",
      element: (
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
      ),
      children: [
        {
          index: true,
          element: <UserManagement />,
        },
        {
          path: "request-add-new-user",
          element: <RequestAddNewUser />,
        },
        {
          path: ":userId",
          element: <UserDetails />,
        },
        {
          path: ":userId/projects/:projectId",
          element: <UserProjects />,
        },
      ],
    },
    {
      path: "settings",
      element: (
        <DashboardLayout>
          <Settings />
        </DashboardLayout>
      ),
    },
    {
      path: "my-profile",
      element: (
        <DashboardLayout>
          <Profile />
        </DashboardLayout>
      ),
    },
  ],
  // Admin screens
  admin: [],
  // [userType Name] screens
  seller: [],
};

export default routesList;
