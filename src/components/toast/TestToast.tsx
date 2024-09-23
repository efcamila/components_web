import React, { useEffect, useState } from "react";
import useToast from "./createToast";
import Toast from "./Toast";
import Button from "../buttons/clasic/Button";
import Text from "../text/Text";
import Table from "../tables/TableAction";
import TableInfoPages from "../../pages/componentsPages/TableInfoPages";

const TestToast = () => {
  const [msgError, setMsgError] = useState("");
  const [msgSuccess, setMsgSuccess] = useState("");
  const [msgWarning, setMsgWarning] = useState("");
  const [msgInfo, setMsgInfo] = useState("");

  const { toast, createToast } = useToast();

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

  useEffect(() => {
    if (msgError) {
      createToast({
        category: "danger",
        message: { title: "Error toast", textInfo: msgError },
        time:true
      });
      setMsgError("");
    }
  }, [msgError]);

  useEffect(() => {
    if (msgSuccess) {
      createToast({
        category: "success",
        message: { title: "Success toast", textInfo: msgSuccess },
        time:true
      });
      setMsgSuccess("");
    }
  }, [msgSuccess]);

  useEffect(() => {
    if (msgWarning) {
      createToast({
        category: "warning",
        message: { title: "Warning toast", textInfo: msgWarning },
        time:true
      });
      setMsgWarning("");
    }
  }, [msgWarning]);

  useEffect(() => {
    if (msgInfo) {
      createToast({
        category: "info",
        message: { title: "Info toast", textInfo: msgInfo },
        time:true
      });
      setMsgInfo("");
    }
  }, [msgInfo]);

 
  const toastExample = () => {
    setTimeout(() => {
      createToast({
        category: "info",
        message: { title: "Info toast", textInfo: "This is a Info Toast" },
      });
      createToast({
        category: "success",
        message: {
          title: "Success toast",
          textInfo: "This is a Success Toast",
        },
      });
      createToast({
        category: "warning",
        message: {
          title: "Warning toast",
          textInfo: "This is a Warning Toast",
        },
      });
      createToast({
        category: "danger",
        message: { title: "Danger toast", textInfo: "This is a Danger Toast" },
      });
    },1000)};
  
    const data = [
      {
        attribute: "category",
        type: ["success","info","warning","danger"],
        description: "Define las categorías disponibles para el Toast.",
        default: "info",
      },
      {
        attribute: "message:{title,textInfo}",
        type: "string",
        description:
          "Define el título y mensaje del Toast.",
        default: "-",
      },
      {
        attribute: "time?",
        type: "boolean",
        description: "Define un tiempo estándar para cerrar las Toast.",
        default: "false",
      },
    ];

  return (
    <>
      <div className="mb-4">
      <TableInfoPages data={data}/>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <Text.Heading3>Category</Text.Heading3>
        <Toast
          category="info"
          message={{ title: "Info toast", textInfo: "This is a Info Toast" }}
          closeToast={() => {}}
        />
        <Toast
          category="success"
          message={{
            title: "Success toast",
            textInfo: "This is a Success Toast",
          }}
          closeToast={() => {}}
        />
        <Toast
          category="warning"
          message={{
            title: "Warning toast",
            textInfo: "This is a Warning Toast",
          }}
          closeToast={() => {}}
        />
        <Toast
          category="danger"
          message={{
            title: "Danger toast",
            textInfo: "This is a Danger Toast",
          }}
          closeToast={() => {}}
        />
      </div>
      <div className="mt-5 flex flex-col gap-6">
        <div className="flex flex-col gap-1">
        <Text.Heading3>
          Time
        </Text.Heading3>
        <Text.Subheading2>
        Los Toast son disparados por alguna acción o evento.
        </Text.Subheading2>
        </div>
        <div className="flex gap-3">
          <Button onClick={simulateServerResponse}>Timed</Button>
          <Button onClick={toastExample}>Untimed</Button>
        </div>
        {toast}
      </div>
    </>
  );
};

export default TestToast;
