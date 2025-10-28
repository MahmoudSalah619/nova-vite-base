import { ValidationRulesType } from "@/constants/Validation";
import { TranslationKeyEnum } from "@/types/TranslationKeyEnum";
import { OptionType } from "@components/Molecules/Input/SelectionInput/types";
import { ReactNode } from "react";
import {
  Control,
  FieldErrors,
  FieldValues,
  Path,
  UseFormHandleSubmit,
} from "react-hook-form";

type DetailsScreenCells<T> = {
  [key in keyof T]?: {
    inputType?: "text" | "number" | "date" | "select";
    options?: OptionType[];
    className?: string;
    label?: TranslationKeyEnum;
    isEditable?: boolean;
    renderViewComponent?: (cellData: T[key]) => ReactNode;
    renderEditComponent?: (cellData: T[key]) => ReactNode;
    valueGetter?: (data: T[key]) => string | number | boolean;
  };
};

type DetailsScreenRow<T> = {
  className?: string;
  cells: Path<T>[];
};

type DetailsScreenSection<T> = {
  className?: string;
  title?: TranslationKeyEnum;
  rows: DetailsScreenRow<T>[];
};

interface IDetailsScreenOrganismProps<T extends FieldValues> {
  className?: string;

  initialData: T;

  title: TranslationKeyEnum;
  statusId?: number;
  statusText?: TranslationKeyEnum;

  editable?: boolean;
  editBtnText?: TranslationKeyEnum;
  deletable?: boolean;
  deletableInEditMode?: boolean;
  exportable?: boolean;

  cells: DetailsScreenCells<T>;
  sections: DetailsScreenSection<T>[];

  onEdit?: (data: T) => void;
  onDelete?: (data: T) => void;

  control: Control<T, unknown>;
  handleSubmit: UseFormHandleSubmit<T, undefined>;
  errors: FieldErrors<T>;
  validationRules?: ValidationRulesType<T>;
}

export default IDetailsScreenOrganismProps;

export type { DetailsScreenCells, DetailsScreenRow, DetailsScreenSection };
