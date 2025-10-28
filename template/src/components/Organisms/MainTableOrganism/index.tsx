import { Key, useState } from "react";
import { Table } from "antd";
import type { TableProps } from "antd";
import TableHeader from "../../Molecules/TableHeader";
import CustomPagination from "../../Molecules/CustomPagination";
import styles from "./styles.module.scss";
import { MainTableOrganismProps, TableColumn, TableRow } from "./types";
import TableFilterMolecule from "../../Molecules/TableFilterMolecule";
import Text from "../../Atoms/Text";
import Icon from "../../Atoms/Icon";
import { useSearchParams } from "react-router-dom";

function MainTableOrganism({
  headerTitle,
  headerClassName,
  showPagination = true,
  columns,
  dataSource,
  pageSize = 10,
  enableSelection = false,
  selectedRowKeys = [],
  setSelectedRowKeys,
  onSelectionChange,
  rowOnClick,
  showHeader,
  tableFilters,
  pageSearchParamName = "page",
}: MainTableOrganismProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();

  const paginatedData = dataSource?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSelectionChange = (newSelectedRowKeys: Key[]) => {
    const currentPageRowKeys =
      paginatedData?.map((row) => row.key.toString()) || [];

    const newKeysSet = new Set<string>(
      selectedRowKeys.map((key) => key.toString())
    );

    newSelectedRowKeys.forEach((key) => newKeysSet.add(key.toString()));

    currentPageRowKeys.forEach((key) => {
      if (!newSelectedRowKeys.map(String).includes(key)) {
        newKeysSet.delete(key);
      }
    });

    const updatedKeys = Array.from(newKeysSet);
    setSelectedRowKeys?.(updatedKeys);
    onSelectionChange?.(updatedKeys);
  };

  const rowSelection: TableProps<TableRow>["rowSelection"] = enableSelection
    ? {
        type: "checkbox",
        selectedRowKeys: selectedRowKeys.map((key) => key.toString()),
        onChange: handleSelectionChange,
      }
    : undefined;

  const getSortingState = (name: TableColumn["dataIndex"]) => {
    const nameHasOrdering = searchParams
      .get("ordering")
      ?.includes(name?.toString() ?? "");
    const isAscending = searchParams.get("ordering") === name;

    return { nameHasOrdering, isAscending };
  };

  const handleSort = (name: string) => {
    setSearchParams((prev) => {
      if (pageSearchParamName) prev.delete(pageSearchParamName);

      const { nameHasOrdering, isAscending } = getSortingState(name);

      if (nameHasOrdering) {
        if (isAscending) prev.set("ordering", `-${name}`);
        else prev.delete("ordering");
      } else {
        prev.set("ordering", name);
      }

      return prev;
    });
  };

  return (
    <section className={styles.mainTable}>
      {!!showHeader && (
        <TableHeader
          title={headerTitle}
          headerClassName={`${styles.header} ${headerClassName}`}
        >
          <TableFilterMolecule
            className={styles.filter}
            filters={tableFilters}
          />
        </TableHeader>
      )}

      <div>
        <Table
          scroll={{ x: "max-content" }}
          rowSelection={rowSelection}
          columns={columns}
          components={{
            header: {
              cell: (cell) => {
                // TODO: Try to add type for cellParam
                const col = columns.find((c) => c.title === cell.children[1]);
                const content = cell.children[1];
                const isSelectionCell = cell.className.includes("selection");
                const isCellSortable = !isSelectionCell && content;

                const { nameHasOrdering, isAscending } = getSortingState(
                  col?.dataIndex as string
                );

                return (
                  <th className={cell.className}>
                    <div className={styles.headerCell}>
                      {isCellSortable && (
                        <Icon
                          name="sort"
                          onClick={() => handleSort(col?.dataIndex as string)}
                        />
                      )}

                      <Text variant="L2" color="text50">
                        {cell.children[1]}
                      </Text>

                      <Icon
                        name="homeArrowLeft"
                        size={15}
                        className={`${styles.arrow} ${
                          isAscending ? styles.ascArrow : styles.descArrow
                        } ${isCellSortable && nameHasOrdering ? styles.activeArrow : ""}`}
                      />
                    </div>
                  </th>
                );
              },
            },

            body: {
              cell: (cell) => {
                const cellContent = cell.children[1];
                const cellType = typeof cell.children[1];
                return (
                  <td className={cell.className}>
                    {cellType === "string" ? (
                      <Text variant="P7" color="text50">
                        {cellContent}
                      </Text>
                    ) : (
                      cellContent
                    )}
                  </td>
                );
              },
            },
          }}
          dataSource={paginatedData}
          pagination={false}
          rowClassName={(_, idx) => {
            const isEven = idx % 2 === 0;
            return `${isEven ? styles.evenRow : styles.oddRow} ${
              rowOnClick && styles.rowCustom
            }`;
          }}
          onRow={(record: TableRow) => ({
            onClick: () => rowOnClick?.(record),
          })}
        />

        {!!showPagination && (
          <div className={styles.paginationContainer}>
            <CustomPagination
              total={dataSource?.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
            <Text variant="P10" color="text50">{`Showing ${
              pageSize * (currentPage - 1) + 1
            }-${Math.min(pageSize * currentPage, dataSource.length)} of ${
              dataSource.length
            } items`}</Text>
          </div>
        )}
      </div>
    </section>
  );
}

export default MainTableOrganism;
