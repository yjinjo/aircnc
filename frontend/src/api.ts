import axios from "axios";
import { QueryFunctionContext } from "@tanstack/react-query";

const instance = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
});

export const getRooms = () =>
  instance.get("rooms/").then((response) => response.data);

export const getRoom = ({ queryKey }: QueryFunctionContext) => {
  const [_, roomPk] = queryKey;

  return instance.get(`rooms/${roomPk}`).then((response) => response.data);
};

export const getRoomReviews = ({ queryKey }: QueryFunctionContext) => {
  const [_, roomPk] = queryKey;

  return instance
    .get(`rooms/${roomPk}/reviews`)
    .then((response) => response.data);
};
