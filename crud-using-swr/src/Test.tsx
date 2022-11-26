import axios from "axios";
import React from "react";
import { baseUrl } from "./utils";
import TestItem from "./TestItem";
import toast, { Toaster } from "react-hot-toast";
import useSWR from "swr";

const getListTest = async () => {
  const { data } = await axios.get(`${baseUrl}/api/test/`);
  return data;
};

const createTest = async (text: string) => {
  const { data } = await axios.post(`${baseUrl}/api/test/`, { name: text });
  return data;
};

const Test = () => {
  const [text, setText] = React.useState("");
  const { data: listTest, mutate } = useSWR("/api/test", getListTest);
  console.log(listTest);
  const handleCreate = async () => {
    setText("");
    try {
      await mutate(createTest(text), false);
      // const res = await axios({
      //   url: `${baseUrl}/api/test/`,
      //   method: "POST",
      //   data: {
      //     name: text,
      //   },
      // });

      toast.success("Successfully added the new item.");
    } catch (e) {
      toast.error("Failed to add the new item.");
    }
  };

  const hanldeUpdateSuccess = (data: any) => {
    const newListTest: any = listTest.map((item: any) => {
      if (item.id === data.id) {
        return data;
      }
      return item;
    });
  };

  const handleDeleteSuccess = (data: any) => {
    const newListTest: any = listTest.filter(
      (item: any) => item.id !== data.id
    );
  };

  return (
    <div style={{ background: "white" }}>
      <Toaster toastOptions={{ position: "bottom-center" }} />
      <h1>Todos</h1>
      <form onSubmit={(ev) => ev.preventDefault()}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
        <button onClick={handleCreate}>Add</button>
      </form>
      <ul>
        {listTest
          ? listTest.map((i: any) => (
              <TestItem
                testData={i}
                onUpdateSuccess={hanldeUpdateSuccess}
                onDeleteSuccess={handleDeleteSuccess}
              />
            ))
          : null}
      </ul>
    </div>
  );
};

export default Test;
