import { toast, TypeOptions } from 'react-toastify';

export const showToastMessage = (message: string, type: TypeOptions) => toast(`${message}`, {
  position: toast.POSITION.TOP_RIGHT,
  type: type,
  autoClose: 3000
})