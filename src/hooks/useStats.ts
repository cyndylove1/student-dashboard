import { useQuery } from "@tanstack/react-query";
import { mockDashboardStats } from "../data/mockData";

export const useStats = () => {
  return useQuery({
    queryKey: ["dashboardStats"],

    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return mockDashboardStats;
    },
  });
};
