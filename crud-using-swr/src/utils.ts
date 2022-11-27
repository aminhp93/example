import axios from "axios";

export interface TestInterface {
  name: string;
  id: number;
  created_at: string;
  updated_at: string;
}

export const baseUrl = "http://localhost:8000";
// export const baseUrl = "https://api-2023.herokuapp.com";

const delay = () => new Promise((resolve) => setTimeout(resolve, 3000));
let listTest: any = [];

export const getListTest = async () => {
  const { data } = await axios({
    url: `${baseUrl}/api/test/`,
    method: "GET",
  });

  listTest = data;
  return listTest;
};

export const createTest = async (text: string) => {
  await delay();

  const { data } = await axios({
    url: `${baseUrl}/api/test/`,
    method: "POST",
    data: {
      name: text,
    },
  });

  listTest.push(data);
  return listTest;
};

export const updateTest = async (id: number, text: string) => {
  await delay();
  const { data } = await axios({
    url: `${baseUrl}/api/test/${id}/`,
    method: "PUT",
    data: {
      name: text,
    },
  });
  listTest = listTest.map((item: TestInterface) => {
    if (item.id === id) {
      return data;
    }
    return item;
  });

  return listTest;
};

export const deleteTest = async (id: number) => {
  await delay();
  await axios({
    url: `${baseUrl}/api/test/${id}/`,
    method: "DELETE",
  });
  listTest = listTest.filter((item: TestInterface) => item.id !== id);
  return listTest;
};
