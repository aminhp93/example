import axios from "axios";
import React from "react";
import { baseUrl } from "./utils";
import TestItem from "./TestItem";
import toast, { Toaster } from "react-hot-toast";

const Test = () => {
  const [listTest, setListTest] = React.useState([]);
  const [text, setText] = React.useState("");

  const handleCreate = async () => {
    try {
      const res = await axios({
        url: `${baseUrl}/api/test/`,
        method: "POST",
        data: {
          name: text,
        },
      });
      setText("");
      setListTest([...listTest, res.data] as any);
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
    setListTest(newListTest);
  };

  const handleDeleteSuccess = (data: any) => {
    const newListTest: any = listTest.filter(
      (item: any) => item.id !== data.id
    );
    setListTest(newListTest);
  };

  React.useEffect(() => {
    const getList = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/test/`);
        setListTest(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getList();
  }, []);

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
        {listTest.map((i) => (
          <TestItem
            testData={i}
            onUpdateSuccess={hanldeUpdateSuccess}
            onDeleteSuccess={handleDeleteSuccess}
          />
        ))}
      </ul>
    </div>
  );
};

export default Test;
