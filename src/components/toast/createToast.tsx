import { useRef, useState } from "react";
import Toast from "./Toast";
import ReactDOM from "react-dom";

interface Toast {
    id: number;
    category: "success" | "info" | "warning" | "danger";
    message: {
      title: string;
      textInfo: string;
    };
    time?: boolean; // Propiedad opcional
  }

const useToast = () => {
    const [toasts, setToasts] = useState<Toast[]>([]);
    const lastIdRef = useRef<number>(0);
    const toastsMessages = useRef(new Set());

    const createToast = (options:Omit<Toast,"id">) => {
        const id = lastIdRef.current + 1;
        lastIdRef.current = id;

        const {time} = options;
        
        if (!toastsMessages.current.has(options.message.textInfo)){
            const newToast: Toast = {...options, id};
            setToasts((prevToasts) => [...prevToasts, newToast]);
            toastsMessages.current.add(options.message.textInfo)
        }

        if (options.category === "danger" && time){
            setTimeout(()=>{
                closeToast(id)
            },8000)
        }
        if (options.category !== "danger" && time){
            setTimeout(()=>{
                closeToast(id)
            },5000)
        }
        
    }

    const closeToast = (id:number) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
        const closedToast = toasts.find((toast) => toast.id === id)
        if (closedToast){
            toastsMessages.current.delete(closedToast.message.textInfo)
        }
    }

    const toast = ReactDOM.createPortal(
        <div className="flex flex-col fixed top-2 z-[70] w-full sm:w-[450px]">
            {toasts.map((toast)=>(
                <section key={toast.id} className="flex flex-col mb-2 sm:ml-2 sm:my-1">
                    <Toast
                        category={toast.category}
                        message={toast.message}
                        closeToast={() => closeToast(toast.id)}
                    />
                </section>
            ))}
        </div>,
        document.body
    )


  return {toast,createToast}
};

export default useToast;
