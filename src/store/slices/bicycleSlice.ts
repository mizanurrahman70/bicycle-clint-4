import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Bicycle {
  id: string;
  name: string;
  brand: string;
  model: string;
  price: number;
  category: string;
  stock: number;
  image: string;
  description: string;
}

interface BicycleState {
  bicycles: Bicycle[];
  loading: boolean;
  error: string | null;
  filters: {
    search: string;
    priceRange: [number, number];
    category: string;
    brand: string;
  };
}

const initialState: BicycleState = {
  bicycles: [],
  loading: false,
  error: null,
  filters: {
    search: '',
    priceRange: [0, 10000],
    category: '',
    brand: '',
  },
};

const bicycleSlice = createSlice({
  name: 'bicycles',
  initialState,
  reducers: {
    setBicycles: (state, action: PayloadAction<Bicycle[]>) => {
      state.bicycles = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setFilters: (
      state,
      action: PayloadAction<Partial<BicycleState['filters']>>
    ) => {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
});

export const { setBicycles, setLoading, setError, setFilters } =
  bicycleSlice.actions;
export default bicycleSlice.reducer;