export type TableFilterMoleculeProps = {
  className?: string;
  filters?: (
    | "search"
    | "work_order_type"
    | "date"
    | "status"
    | "subStatus"
    | "sla"
    | "priority"
    | "project"
    | "projects"
    | "select"
    | "availability"
    | "userType"
    | "lineStatus"
    | "filterBy"
    | "year"
    | "month"
  )[];
};
