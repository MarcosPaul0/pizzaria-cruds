import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function useNotify(history) {
  const successNotify = (msg, backUrl) => 
    toast.success(msg, {
      position: 'bottom-right',
      onClose: () => history.push(backUrl) || null,
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  return ({
    successNotify
  })
}