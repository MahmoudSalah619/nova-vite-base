import {
  DetailsScreenCells,
  DetailsScreenSection,
} from "../DetailsScreenOrganism/types";
import { IWorkOrderResourceDetails } from "./types";
import styles from "./styles.module.scss";

const detailsScreenCells: DetailsScreenCells<IWorkOrderResourceDetails> = {
  workOrder: {
    label: "WORK_ORDER",
    isEditable: true,
  },
  bookingStatus: {
    label: "BOOKING_STATUS",
    isEditable: true,
  },
  resource: {
    label: "RESOURCE",
    isEditable: true,
  },
  strartTime: {
    label: "START_TIME",
    isEditable: true,
    className: styles.largeCellStyle,
  },
  endTime: {
    label: "END_TIME",
    isEditable: true,
    className: styles.largeCellStyle,
  },
  duration: {
    label: "DURATION",
    isEditable: true,
  },
  name: {
    label: "NAME",
    isEditable: true,
  },
  capacity: {
    label: "CAPACITY",
    isEditable: true,
  },
  bookingType: {
    label: "BOOKING_TYPE",
    isEditable: true,
  },
};

const detailsScreenSections: DetailsScreenSection<IWorkOrderResourceDetails>[] =
  [
    {
      rows: [
        {
          className: styles.customRow1Style,
          cells: [
            "workOrder",
            "bookingStatus",
            "resource",
            "strartTime",
            "endTime",
            "duration",
          ],
        },
        {
          className: styles.customRow2Style,
          cells: ["name", "capacity", "bookingType"],
        },
      ],
    },
  ];

export { detailsScreenCells, detailsScreenSections };
