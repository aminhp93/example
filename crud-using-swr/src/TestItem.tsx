import React from "react";

type ModeType = "update" | "delete" | "view";

const TestItem = ({ testData, onMutateUpdate, onMutateDelete }: any) => {
  const [mode, setMode] = React.useState<ModeType>("view");
  const [tempName, setTempName] = React.useState(testData.name);

  const handleUpdate = async () => {
    onMutateUpdate && onMutateUpdate(testData.id, tempName);
    setMode("view");
  };

  const handleDelete = async () => {
    onMutateDelete && onMutateDelete(testData.id);
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
