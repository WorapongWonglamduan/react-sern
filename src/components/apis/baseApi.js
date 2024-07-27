import axios from "axios";
import { user } from "../data/user";

const path = process.env.REACT_APP_API_SERVICE;

// const config = {};

//get all
export const getUser = async () => {
  return await axios.get(path + "/users");
  // return user;
};

//get by id
export const getUserById = async (id) => {
  return await axios.get(path + "/" + id);
};

//create
export const createUser = async (data) => {
  // return { status: 200 };
  return await axios.post(path, data);
};

//update
export const updateUserById = async (id, data) => {
  // return { status: 200 };
  return await axios.put(path + "/" + id, data);
};
//update
export const deleteUser = async (id) => {
  // return { status: 204 };
  return await axios.delete(path + "/" + id);
};
