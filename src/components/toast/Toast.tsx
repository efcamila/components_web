import { AiFillInfoCircle } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";
import { PiWarningCircleFill } from "react-icons/pi";

interface ToastCategory {
  bg: string,
  iconSvg: JSX.Element,
  icon: string,
  line: string,
}

interface ToastStyle {
  toastStructure: string,
  toastStyle: string,
  toastCategory: {
    [key:string]:ToastCategory
  }
}

const ToastStyle : ToastStyle = {
  "toastStructure": "flex justify-between items-center rounded-md",
  "toastStyle": "h-16 shadow-md w-full sm:w-[450px] py-2 px-3",
  "toastCategory" : {
    "success" : {
        "bg" : "bg-green-50",
        "iconSvg": <IoCheckmarkCircle className="size-8 text-white"/>,
        "icon" : "w-10 h-10 mr-2 bg-green-400 rounded-md flex justify-center items-center hidden sm:flex",
        "line" : "w-1 rounded-full h-full bg-green-500 sm:hidden"
    },
    "info" : {
        "bg" : "bg-indigo-50",
        "iconSvg": <AiFillInfoCircle className="size-8 text-white"/>,
        "icon" : "w-10 h-10 mr-2 bg-blue-500 rounded-md flex justify-center items-center hidden sm:flex",
        "line" : "w-1 rounded-full h-full bg-blue-500 sm:hidden"
    },
    "warning" : {
        "bg" : "bg-yellow-100",
        "iconSvg": <PiWarningCircleFill className="size-8 text-white"/>,
        "icon" : "w-10 h-10 mr-2 bg-yellow-400 rounded-md flex justify-center items-center hidden sm:flex",
        "line" : "w-1 rounded-full h-full bg-yellow-500 sm:hidden"
    },
    "danger" : {
        "bg" : "bg-red-100",
        "iconSvg": <IoCloseCircle className="size-8 text-white"/>,
        "icon" : "w-10 h-10 mr-2 bg-red-500 rounded-md flex justify-center items-center hidden sm:flex",
        "line" : "w-1 rounded-full h-full bg-red-500 sm:hidden"
    }
  }
};

interface ToastProps {
  category : keyof typeof ToastStyle.toastCategory
  message: {
    title: string,
    textInfo: string
  }
  closeToast: () => void
}

const Toast = ({category="info",message,closeToast}:ToastProps) => {
  const { bg, icon, iconSvg, line } = ToastStyle.toastCategory[category] || {};

  return (
    <div
      className={`${ToastStyle["toastStructure"]} ${ToastStyle["toastStyle"]} ${bg}`}
    >
      <div className={icon}>
      {iconSvg}
      </div>
      <div className={line}>
      </div>
      <div className="w-4/5">
        <h4 className="font-bold text-sm">{message.title}</h4>
        <span className="text-sm text-gray-800">{message.textInfo}</span>
      </div>
      <div className="w-8 flex justify-center text-gray-800 hover:bg-white hover:rounded-xl hover:cursor-pointer mr-2 sm:mr-0">
        <IoIosClose className="size-8" onClick={closeToast}/>
      </div>
    </div>
  );
};

export default Toast;
