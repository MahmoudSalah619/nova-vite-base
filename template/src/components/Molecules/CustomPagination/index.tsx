import { Pagination } from "antd";
import type { PaginationProps } from "antd";
import styles from "./styles.module.scss";
import { CustomPaginationProps } from "../../Organisms/MainTableOrganism/types";

function CustomPagination({
  total,
  pageSize,
  currentPage,
  onPageChange,
}: CustomPaginationProps) {
  const itemRender: PaginationProps["itemRender"] = (
    _,
    type,
    originalElement
  ) => {
    if (type === "next" || type === "prev") return null;

    return originalElement;
  };

  return (
    <Pagination
      total={total}
      pageSize={pageSize}
      current={currentPage}
      onChange={onPageChange}
      itemRender={itemRender}
      className={styles.pagination}
    />
  );
}

export default CustomPagination;
