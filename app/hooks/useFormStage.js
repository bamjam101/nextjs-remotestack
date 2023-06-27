import { create } from "zustand";

const useFormStage = create((set) => ({
  stages: [],
  add: (stage) => set((state) => ({ stages: [...state.stages, stage] })),
  remove: (stageNumber) =>
    set((state) => ({
      stages: state.stages.filter((stage) => stage !== stageNumber),
    })),
  set: (stages) => set({ stages: stages }),
}));

export default useFormStage;
