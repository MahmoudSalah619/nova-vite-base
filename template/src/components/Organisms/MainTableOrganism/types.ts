import { TranslationKeyEnum } from "@/types/TranslationKeyEnum";
import { ReactNode } from "react";

export interface TableRow {
  [key: string]: string;
}

export interface TableColumn {
  title: string | ReactNode;
  dataIndex: string;
  key: string;
  fixed?: "left" | "right";
  isSortable?: boolean;
  render?: (text: string, record: TableRow) => ReactNode;
}

export interface MainTableOrganismProps {
  headerTitle?: TranslationKeyEnum;
  headerClassName?: string;
  showPagination?: boolean;
  columns: TableColumn[];
  dataSource: TableRow[];
  pageSize?: number;
  rowOnClick?: (record: TableRow) => void;
  enableSelection?: boolean;
  selectedRowKeys?: string[];
  setSelectedRowKeys?: (key: string[]) => void;
  onSelectionChange?: (selectedKeys: string[]) => void;
  showHeader: boolean;
  tableFilters?: (
    | "search"
    | "work_order_type"
    | "date"
    | "status"
    | "sla"
    | "priority"
    | "projects"
    | "select"
    | "availability"
    | "userType"
    | "lineStatus"
    | "filterBy"
  )[];
  pageSearchParamName?: string;
}

export interface CustomPaginationProps {
  total: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}
