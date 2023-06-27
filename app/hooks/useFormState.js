import { create } from "zustand";

const useFormState = create((set) => ({
  technologies: [],
  add: (tech) =>
    set((state) => ({ technologies: [...state.technologies, tech] })),
  remove: (techName) =>
    set((state) => ({
      technologies: state.technologies.filter((tech) => tech !== techName),
    })),
  set: (techs) => set({ technologies: techs }),
}));

export default useFormState;
