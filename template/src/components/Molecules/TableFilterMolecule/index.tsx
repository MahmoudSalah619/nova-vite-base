import { Input } from "../Input";
import styles from "./styles.module.scss";
import { useSearchParams } from "react-router-dom";
import { ChangeEvent, JSX } from "react";
import TableSelectionOptions from "@/constants/TableSelectionOptions";
import { TableFilterMoleculeProps } from "./types";

export default function TableFilterMolecule({
  className,
  filters,
}: TableFilterMoleculeProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSearchParam = (key: string, value?: string) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      if (!value) newParams.delete(key);
      else newParams.set(key, value);
      return newParams;
    });
  };

  const filterComponents: Record<string, JSX.Element> = {
    search: (
      <Input
        type="text"
        size="small"
        prefixIcon={"serachIcon"}
        i18nPlaceholder="Search"
        debounceDelay={500}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          updateSearchParam("search", e.target.value)
        }
        defaultValue={searchParams.get("search") || ""}
      />
    ),
    work_order_type: (
      <Input
        type="dropdown"
        size="small"
        options={TableSelectionOptions.WorkOrderType}
        i18nPlaceholder="work_order_type"
        onChange={(value) =>
          updateSearchParam(
            "work_order_type",
            typeof value === "string" ? value : undefined
          )
        }
        value={searchParams.get("work_order_type")}
      />
    ),
    date: (
      <Input
        type="dropdown"
        size="small"
        options={TableSelectionOptions.Date}
        i18nPlaceholder="date"
        onChange={(value) =>
          updateSearchParam(
            "date",
            typeof value === "string" ? value : undefined
          )
        }
        value={searchParams.get("date")}
      />
    ),
    status: (
      <Input
        type="dropdown"
        size="small"
        options={TableSelectionOptions.Status}
        i18nPlaceholder="status"
        onChange={(value) =>
          updateSearchParam(
            "status",
            typeof value === "string" ? value : undefined
          )
        }
        value={searchParams.get("status")}
      />
    ),
    subStatus: (
      <Input
        type="dropdown"
        size="small"
        options={TableSelectionOptions.Status}
        i18nPlaceholder="SUB_STATUS"
        onChange={(value) =>
          updateSearchParam(
            "subStatus",
            typeof value === "string" ? value : undefined
          )
        }
        value={searchParams.get("subStatus")}
      />
    ),
    sla: (
      <Input
        type="dropdown"
        size="small"
        options={TableSelectionOptions.DummyData}
        i18nPlaceholder="SLA_STATUS"
        onChange={(value) =>
          updateSearchParam(
            "sla",
            typeof value === "string" ? value : undefined
          )
        }
        value={searchParams.get("sla")}
      />
    ),
    priority: (
      <Input
        type="dropdown"
        size="small"
        options={TableSelectionOptions.Priority}
        i18nPlaceholder="PRIORITY"
        onChange={(value) =>
          updateSearchParam(
            "priority",
            typeof value === "string" ? value : undefined
          )
        }
        value={searchParams.get("priority")}
      />
    ),
    project: (
      <Input
        type="dropdown"
        size="small"
        options={TableSelectionOptions.DummyData}
        i18nPlaceholder="PROJECT"
        onChange={(value) =>
          updateSearchParam(
            "project",
            typeof value === "string" ? value : undefined
          )
        }
        value={searchParams.get("project")}
        showSearch
      />
    ),
    projects: (
      <Input
        type="dropdown"
        size="small"
        options={TableSelectionOptions.DummyData}
        i18nPlaceholder="PROJECTS"
        onChange={(value) =>
          updateSearchParam(
            "projects",
            typeof value === "string" ? value : undefined
          )
        }
        value={searchParams.get("projects")}
        showSearch
      />
    ),
    select: (
      <Input
        type="dropdown"
        size="small"
        options={TableSelectionOptions.DummyData}
        i18nPlaceholder="SELECT"
        onChange={(value) =>
          updateSearchParam(
            "select",
            typeof value === "string" ? value : undefined
          )
        }
        value={searchParams.get("select")}
      />
    ),
    availability: (
      <Input
        type="dropdown"
        size="small"
        options={TableSelectionOptions.Availability}
        i18nPlaceholder="AVAILABILITY"
        onChange={(value) =>
          updateSearchParam(
            "availability",
            typeof value === "string" ? value : undefined
          )
        }
        value={searchParams.get("availability")}
      />
    ),
    userType: (
      <Input
        type="dropdown"
        size="small"
        options={TableSelectionOptions.UserType}
        i18nPlaceholder="USER_TYPE"
        onChange={(value) =>
          updateSearchParam(
            "userType",
            typeof value === "string" ? value : undefined
          )
        }
        value={searchParams.get("userType")}
      />
    ),
    lineStatus: (
      <Input
        type="dropdown"
        size="small"
        options={TableSelectionOptions.LineStatus}
        i18nPlaceholder="LINE_STATUS"
        onChange={(value) =>
          updateSearchParam(
            "lineStatus",
            typeof value === "string" ? value : undefined
          )
        }
        value={searchParams.get("lineStatus")}
      />
    ),
    filterBy: (
      <Input
        type="dropdown"
        size="small"
        options={TableSelectionOptions.DummyData}
        i18nPlaceholder="FILTER_BY"
        onChange={(value) =>
          updateSearchParam(
            "filterBy",
            typeof value === "string" ? value : undefined
          )
        }
        value={searchParams.get("filterBy")}
      />
    ),
    year: (
      <Input
        type="dropdown"
        size="small"
        options={TableSelectionOptions.Year}
        i18nPlaceholder="YEAR"
        onChange={(value) =>
          updateSearchParam(
            "year",
            typeof value === "string" ? value : undefined
          )
        }
        value={searchParams.get("year")}
      />
    ),
    month: (
      <Input
        type="dropdown"
        size="small"
        options={TableSelectionOptions.Month}
        i18nPlaceholder="MONTH"
        onChange={(value) =>
          updateSearchParam(
            "month",
            typeof value === "string" ? value : undefined
          )
        }
        value={searchParams.get("month")}
      />
    ),
  };

  return (
    <main className={`${styles.container} ${className}`}>
      {filters?.map((filter, index) => {
        return (
          <>
            {filterComponents[filter]}
            {index !== filters.length - 1 && (
              <div className={styles.separator} />
            )}
          </>
        );
      })}
    </main>
  );
}
