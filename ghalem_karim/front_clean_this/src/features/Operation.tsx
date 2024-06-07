import { useEffect, useState } from "react";
import TaskTable from "./TaskTable";
import operation from "../services/api/operation";
import type { Operation } from "../model";

function Operation() {
  const [operations, setOperations] = useState<Operation[]>([]);
  useEffect(() => {
    operation.find().then(({ data }: any) => {
      setOperations(data);
    });
  }, []);
  return (
    <>
      <TaskTable operations={operations} />
    </>
  );
}

export default Operation;
