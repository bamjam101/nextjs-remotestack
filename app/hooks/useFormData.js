import { create } from "zustand";

const useFormData = create((set) => ({
  forms: [],
  add: (form) => set((state) => ({ forms: [...state.forms, form] })),
  remove: (existingFrom) =>
    set((state) => ({
      forms: state.forms.filter((form) => form.stage !== existingFrom.stage),
    })),
  set: (forms) => set({ forms: forms }),
}));

export default useFormData;
