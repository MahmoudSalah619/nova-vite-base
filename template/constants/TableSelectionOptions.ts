import COLORS from "./COLORS";

const TableSelectionOptions = {
  WorkOrderType: [
    { label: "CM", value: "CM" },
    { label: "Text", value: "Text" },
  ],
  Status: [
    { label: "Pending", value: "Pending" },
    { label: "In-progress", value: "In-progress" },
    { label: "Completed", value: "Completed" },
  ],
  Date: [
    { label: "Today", value: "Today" },
    { label: "Yesterday", value: "Yesterday" },
    { label: "Week", value: "Week" },
    { label: "Month", value: "Month" },
    { label: "Year", value: "Year" },
  ],
  Priority: [
    { label: "On track", value: "On track" },
    { label: "At Risk", value: "At Risk" },
    { label: "Overdue", value: "Overdue" },
  ],
  Availability: [
    { label: "Available", value: "Available" },
    { label: "Out of stock", value: "Out of stock" },
  ],
  UserType: [
    { label: "Admin", value: "1" },
    { label: "User", value: "2" },
  ],
  LineStatus: [
    { label: "Used", value: "Used" },
    { label: "Estimated", value: "Estimated" },
  ],
  DummyData: [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ],
  Year: [
    { label: "2025", value: "2025" },
    { label: "2024", value: "2024" },
    { label: "2023", value: "2023" },
    { label: "2022", value: "2022" },
    { label: "2021", value: "2021" },
    { label: "2020", value: "2020" },
  ],
  Month: [
    { label: "January", value: "January" },
    { label: "February", value: "February" },
    { label: "March", value: "March" },
    { label: "April", value: "April" },
    { label: "May", value: "May" },
    { label: "June", value: "June" },
    { label: "July", value: "July" },
    { label: "August", value: "August" },
    { label: "September", value: "September" },
    { label: "October", value: "October" },
    { label: "November", value: "November" },
    { label: "December", value: "December" },
  ],
  WorkOrderTrendsData: [
    { name: "", value: 0 },
    { name: "Oct-24", value: 6 },
    { name: "Nov-24", value: 11 },
    { name: "Dec-24", value: 50 },
    { name: "Jan-25", value: 7 },
    { name: "Feb-25", value: 12 },
    { name: "Mar-25", value: 12 },
    { name: "Apr-25", value: 6 },
  ],
  WorkOrderByProblemData: [
    { name: "Elec-lighting", value: 8 },
    { name: "Elec-Electricity cuttoff", value: 7 },
    { name: "Elec-Access control ma..", value: 3 },
    { name: "Accessibility", value: 2 },
    { name: "Car Wash", value: 1 },
    { name: "Dead plants", value: 1 },
    { name: "Fence", value: 1 },
    { name: "Unsafe Civil issue", value: 1 },
  ],
  ClientRequestIndicatorData: [
    { name: "Completed CRs", value: 3, color: COLORS.primary400 },
    { name: "Non Completed CRs", value: 0, color: COLORS.primary300 },
  ],
  CountOfPrimaryTradeData: [
    { name: "PM", value: 400, color: COLORS.primary300 },
    { name: "CM", value: 1340, color: COLORS.primary400 },
    { name: "CR", value: 0, color: COLORS.primary700 },
  ],
  CorrectiveMaintenanceIndicatorData: [
    { name: "Completed CRs", value: 22, color: COLORS.primary400 },
    { name: "Non Completed CRs", value: 13, color: COLORS.primary300 },
  ],
  PreventiveMaintenanceIndicatorData: [
    { name: "Completed CRs", value: 8, color: COLORS.primary400 },
    { name: "Non Completed CRs", value: 1331, color: COLORS.primary300 },
  ],
};

export default TableSelectionOptions;
