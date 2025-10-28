import AuthToast from "@components/Molecules/AuthToast";
import IAuthToastProps from "@components/Molecules/AuthToast/types";
import { toast, ToastOptions } from "react-toastify";

type ToastType = ToastOptions & IAuthToastProps;

export default function showAuthToast({
  message,
  title,
  ...options
}: ToastType) {
  toast(AuthToast({ title, message }), { ...options });
}
