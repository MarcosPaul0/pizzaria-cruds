import { useHistory } from 'react-router-dom'

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function useNotify() {
  const history = useHistory()

  const successNotify = (msg, backUrl) => 
    toast.success(msg, {
      position: 'bottom-right',
      onClose: () => history.push(backUrl) || null,
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  const errorNotify = (msg, backUrl) =>
    toast.error(msg, {
      position: "bottom-right",
      onClose: () => history.push(backUrl) || null,
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  return ({
    successNotify,
    errorNotify
  })
}