export interface ChecklistTypes {
  title?: string;
  description?: string;
  checklist?: {
    title: string;
    required: boolean;
    list: {
      id: string;
      title: string;
      checked: boolean;
    }[];
  };
}
