import { useRef, useState } from "react";
import Toast from "./Toast";

interface Toast {
  id: number;
  category: "success" | "info" | "warning" | "danger";
  message: {
    title: string;
    textInfo: string;
  };
}

const useToast = () => {
    const [toasts, setToasts] = useState<Toast[]>([]);
    const lastIdRef = useRef<number>(0);
    const toastsMessages = useRef(new Set());

    const createToast = (options:Omit<Toast,"id">) => {
        const id = lastIdRef.current + 1;
        lastIdRef.current = id;
        
        if (!toastsMessages.current.has(options.message.textInfo)){
            const newToast: Toast = {...options, id};
            setToasts((prevToasts) => [...prevToasts, newToast]);
            toastsMessages.current.add(options.message.textInfo)
        }
        
    }

    const closeToast = (id:number) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
        const closedToast = toasts.find((toast) => toast.id === id)
        if (closedToast){
            toastsMessages.current.delete(closedToast.message.textInfo)
        }
    }

    const toast = (
        <div className="flex flex-col h-screen absolute inset-0 z-50">
            {toasts.map((toast, index)=>(
                <section key={index} className="flex flex-col mb-2 sm:ml-2 sm:my-1">
                    <Toast
                        key={index}
                        category={toast.category}
                        message={toast.message}
                        closeToast={() => closeToast(toast.id)}
                    />
                </section>
            ))}
        </div>
    )


  return {toast,createToast}
};

export default useToast;
