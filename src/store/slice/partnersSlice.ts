import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface Partner {
  id: string;
  companyName: string;
  partnerName: string;
  email: string;
  phone: string;
  registrationDate: string;
  status: "validated" | "pending" | "rejected";
  pack: "Premium" | "Standard" | "Basic";
}

interface PartnersState {
  partners: Partner[];
  loading: boolean;
  error: string | null;
}

// État initial
const initialState: PartnersState = {
  partners: [],
  loading: false,
  error: null,
};

// Asynchronous thunk pour récupérer les partenaires
export const fetchPartners = createAsyncThunk(
  "partners/fetchPartners",
  async () => {
    // Implémentez ici la connexion à l'API
    const response = await fetch("/api/partners"); // Exemple d'endpoint
    if (!response.ok)
      throw new Error("Erreur lors du chargement des partenaires.");
    return (await response.json()) as Partner[];
  }
);

const partnersSlice = createSlice({
  name: "partners",
  initialState,
  reducers: {
    updatePartnerStatus: (
      state,
      action: PayloadAction<{
        id: string;
        status: "validated" | "pending" | "rejected";
      }>
    ) => {
      const partner = state.partners.find((p) => p.id === action.payload.id);
      if (partner) partner.status = action.payload.status;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPartners.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPartners.fulfilled, (state, action) => {
        state.partners = action.payload;
        state.loading = false;
      })
      .addCase(fetchPartners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Une erreur est survenue.";
      });
  },
});

export const { updatePartnerStatus } = partnersSlice.actions;

export default partnersSlice.reducer;
