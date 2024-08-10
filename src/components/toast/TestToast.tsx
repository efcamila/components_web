import { useEffect, useState } from "react"
import useToast from "./createToast"

const TestToast = () => {
    const [msgError,setMsgError] = useState('')
    const [msgSuccess,setMsgSuccess] = useState('')
    const [msgWarning,setMsgWarning] = useState('')
    const [msgInfo,setMsgInfo] = useState('')
  
    const {toast,createToast} = useToast()
  
    useEffect(() => {
      // Simulando la recepción de mensajes del servidor
      const simulateServerResponse = () => {
        // Simular un mensaje de éxito
        setTimeout(() => {
          setMsgSuccess("Este es un mensaje de éxito simulado.");
        }, 1000);
  
        // Simular un mensaje de advertencia
        setTimeout(() => {
          setMsgWarning("Este es un mensaje de aviso simulado.");
        }, 2000);
  
        // Simular un mensaje de error
        setTimeout(() => {
          setMsgError("Este es un mensaje de error simulado.");
        }, 3000);
  
        // Simular un mensaje de información
        setTimeout(() => {
          setMsgInfo("Este es un mensaje informativo breve.");
        }, 4000);
       
      };
  
      simulateServerResponse();
      
    }, []);
  
  
    useEffect(()=>{
      if(msgError){
        createToast({category:"danger", message:{title:'Error toast',textInfo:msgError}});
        setMsgError("");
      }
    },[msgError]);
  
    useEffect(()=>{
      if(msgSuccess){
        createToast({category:"success", message:{title:'Success toast',textInfo:msgSuccess}});
        setMsgSuccess("");
      }
    },[msgSuccess]);
  
    useEffect(()=>{
      if(msgWarning){
        createToast({category:"warning", message:{title:'Warning toast',textInfo:msgWarning}});
        setMsgWarning("");
      }
    },[msgWarning]);
  
    useEffect(()=>{
      if(msgInfo){
        createToast({category:"info", message:{title:'Info toast',textInfo:msgInfo}});
        setMsgInfo("");
      }
    },[msgInfo]);
  
  return (
    <>{toast}</>
  )
}

export default TestToast