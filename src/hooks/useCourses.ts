import { useQuery } from "@tanstack/react-query";
import { mockCourses } from "../data/mockData";

export const useCourses = () => {
  return useQuery({
    queryKey: ["courses"],

    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return mockCourses;
    },
  });
};
