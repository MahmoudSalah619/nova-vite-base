import { toast } from "react-toastify";

export default function showSuccessMsg({ msg }: { msg: string }) {
  toast.success(msg, {
    className: "toast-success",
  });
}
