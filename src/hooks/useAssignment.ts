import { useQuery } from "@tanstack/react-query";
import { mockAssignments } from "../data/mockData";

export const useAssignments = () => {
  return useQuery({
    queryKey: ["assignments"],

    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return mockAssignments;
    },
  });
};
