// src/utils/toast.ts

import { toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultOptions: ToastOptions = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};

// Function to show a success toast
export const showSuccessToast = (message: string) => {
    return toast.success(message, defaultOptions);
};

// Function to show an error toast
export const showErrorToast = (message: string) => {
    toast.error(message, defaultOptions);
};

// Function to show an info toast
export const showInfoToast = (message: string) => {
    toast.info(message, defaultOptions);
};

// Function to show a warning toast
export const showWarningToast = (message: string) => {
    toast.warn(message, defaultOptions);
};
