import { useEffect } from "react";

const TaskTable = ({ operations }: any) => {

  const TaskItem = ({ operation }: any) => (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">{operation.title}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        Zemlak, Daniel and Leannon
        <br />
        <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span>
      </td>
      <td>Purple</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );

  return (
    // <div className="gap-4">
    //   {Operation
    //     .filter((operation) => operation.hasOwnProperty("name"))
    //     .map((operation, i) => (
    //       <TaskItem {...operation} key={i} />
    //     ))}
    // </div>
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Titre</th>
            <th>Statut</th>
            <th>Attribution</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {operations?.map((operation: any, i: number) => (
            <TaskItem operation={operation} key={i} />
          ))}
        </tbody>
        {/* foot */}
        {/* <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot> */}
      </table>
    </div>
  );
};

export default TaskTable;
