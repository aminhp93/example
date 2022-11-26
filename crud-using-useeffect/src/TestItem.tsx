import { baseUrl } from "./utils";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

type ModeType = "update" | "delete" | "view";

const TestItem = ({ testData, onUpdateSuccess, onDeleteSuccess }: any) => {
  const [mode, setMode] = React.useState<ModeType>("view");
  const [tempName, setTempName] = React.useState(testData.name);

  const handleUpdate = async () => {
    try {
      const res = await axios({
        url: `${baseUrl}/api/test/${testData.id}/`,
        method: "PUT",
        data: {
          name: tempName,
        },
      });
      setMode("view");
      onUpdateSuccess && onUpdateSuccess(res.data);
      toast.success("Successfully updated the item.");
    } catch (e) {
      toast.error("Failed to update the new item.");
    }
  };

  const handleDelete = async () => {
    try {
      await axios({
        url: `${baseUrl}/api/test/${testData.id}/`,
        method: "DELETE",
      });
      toast.success("Successfully deleted the item.");

      onDeleteSuccess && onDeleteSuccess(testData);
    } catch (e) {
      toast.error("Failed to delete the new item.");
    }
  };

  const handleChangeInput = (e: any) => {
    setTempName(e.target.value);
  };

  return (
    <li>
      {mode === "update" && (
        <input
          type="text"
          defaultValue={testData.name}
          onChange={handleChangeInput}
        />
      )}
      {(mode === "view" || mode === "delete") && (
        <div>
          {testData.id} - {testData.name}{" "}
        </div>
      )}

      <div>
        {mode === "update" && (
          <>
            <button onClick={handleUpdate}>Confirm</button>
            <button onClick={() => setMode("view")}>Cancel</button>
          </>
        )}

        {mode === "delete" && (
          <>
            <button onClick={handleDelete}>Confirm</button>
            <button onClick={() => setMode("view")}>Cancel</button>
          </>
        )}
        {mode === "view" && (
          <>
            <button onClick={() => setMode("update")}>Update</button>
            <button onClick={() => setMode("delete")}>Delete</button>
          </>
        )}
      </div>
    </li>
  );
};

export default TestItem;
