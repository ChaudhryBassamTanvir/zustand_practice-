import { create } from 'zustand'

type BearState = {
  bears: number
  increasePopulation: () => void
  removeAllBears: () => void
  updateBears: (count: number) => void
}

export const useBearStore = create<BearState>((set) => ({
  bears: 0,

  increasePopulation: () =>
    set((state) => ({ bears: state.bears + 1 })),

  removeAllBears: () => set({ bears: 0 }),

  updateBears: (count) => set({ bears: count }),
}))
