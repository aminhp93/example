import React from "react";
import TestItem from "./TestItem";
import toast, { Toaster } from "react-hot-toast";
import useSWR from "swr";
import { getListTest, createTest, updateTest, deleteTest } from "./utils";

type OptionType = "Revalidate" | "Optimistic updates" | "Direct mutate via api";

const Test = () => {
  const [option, setOption] = React.useState<OptionType>("Optimistic updates");
  const [text, setText] = React.useState("");
  const { data: listTest, mutate } = useSWR("/api/test", getListTest);

  const handleCreateViaOptimisticUpdates = async () => {
    setText("");
    try {
      await mutate(createTest(text), {
        optimisticData: [...listTest, { name: text }], // Optimistic updates
        rollbackOnError: true, // rollback if error
        // populateCache: () => {
        //   return [...listTest, { name: text + "populated" }];
        // }, // this is the default
        revalidate: false, // revalidate after mutate
      });

      toast.success("Successfully added the new item.");
    } catch (e) {
      toast.error("Failed to add the new item.");
    }
  };

  const handleCreateViaDirectMutateViaApi = async () => {
    setText("");
    try {
      await mutate(createTest(text), {
        rollbackOnError: true,
        revalidate: true,
      });

      toast.success("Successfully added the new item.");
    } catch (e) {
      toast.error("Failed to add the new item.");
    }
  };

  const handleCreateRevalidate = async () => {
    setText("");
    try {
      await createTest(text);
      mutate();
      toast.success("Successfully added the new item.");
    } catch (e) {
      toast.error("Failed to add the new item.");
    }
  };

  const handleMutateUpdate = async (id: number, data: any) => {
    try {
      await mutate(updateTest(id, data), {
        optimisticData: listTest.map((item: any) => {
          if (item.id === id) {
            return { ...item, name: data };
          }
          return item;
        }),
        rollbackOnError: true,
        revalidate: false,
      });

      toast.success("Successfully added the new item.");
    } catch (e) {
      toast.error("Failed to add the new item.");
    }
  };

  const handleMutateDelete = async (id: number) => {
    try {
      await mutate(deleteTest(id), {
        optimisticData: listTest.filter((item: any) => item.id !== id),
        rollbackOnError: true,
        revalidate: false,
      });

      toast.success("Successfully added the new item.");
    } catch (e) {
      toast.error("Failed to add the new item.");
    }
  };

  const handleClickAdd = () => {
    if (option === "Optimistic updates") {
      handleCreateViaOptimisticUpdates();
    } else if (option === "Direct mutate via api") {
      handleCreateViaDirectMutateViaApi();
    } else if (option === "Revalidate") {
      handleCreateRevalidate();
    }
  };

  return (
    <div style={{ background: "white" }}>
      <Toaster toastOptions={{ position: "bottom-center" }} />
      <div>
        <button
          style={{ opacity: option === "Revalidate" ? 1 : 0.5 }}
          onClick={() => setOption("Revalidate")}
        >
          Revalidate
        </button>
        <button
          style={{ opacity: option === "Optimistic updates" ? 1 : 0.5 }}
          onClick={() => setOption("Optimistic updates")}
        >
          Optimistic updates
        </button>
        <button
          style={{ opacity: option === "Direct mutate via api" ? 1 : 0.5 }}
          onClick={() => setOption("Direct mutate via api")}
        >
          Direct mutate via api
        </button>
      </div>
      <hr />
      <h1>Todos 1</h1>
      <form onSubmit={(ev) => ev.preventDefault()}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
        <button onClick={handleClickAdd}>Add</button>
      </form>
      <ul>
        {listTest
          ? listTest.map((i: any) => (
              <TestItem
                testData={i}
                onMutateUpdate={handleMutateUpdate}
                onMutateDelete={handleMutateDelete}
              />
            ))
          : null}
      </ul>
    </div>
  );
};

export default Test;
