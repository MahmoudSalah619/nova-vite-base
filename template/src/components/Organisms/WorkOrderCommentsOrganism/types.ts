export interface IWorkOrderCommentsTypes {
  commentCards: {
    title: "WORK_ORDER_DESCRIPTION" | "WORK_ORDER_SUMMARY";
    iconName: "documentTextFilledPrimary" | "taskSquareFilledPrimary";
    comment: string;
    userName: string;
    userImage?: string;
  }[];
}
