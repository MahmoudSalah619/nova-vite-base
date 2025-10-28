import CustomPhoneInput from "./CustomPhoneInput";
import DatePickerInput from "./DatePickerInput";
import NumberInput from "./NumberInput";
import RateInput from "./RateInput";
import SelectionInput from "./SelectionInput";
import TextAreaInput from "./TextAreaInput";
import TextInput from "./TextInput";
import InputProps from "./types";

export default function InputRenderer({ ...props }: InputProps) {
  if (props.type === "number") return <NumberInput {...props} />;
  else if (props.type === "dropdown") return <SelectionInput {...props} />;
  else if (props.type === "date") return <DatePickerInput {...props} />;
  else if (props.type === "phone") return <CustomPhoneInput {...props} />;
  else if (props.type === "textarea") return <TextAreaInput {...props} />;
  else if (props.type === "rate") return <RateInput {...props} />;
  // Fallback to text input
  else return <TextInput {...props} />;
}
