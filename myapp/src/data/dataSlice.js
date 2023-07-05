import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get('http://localhost:3000/data');
  return response.data;
});


export const fetchDisebar = createAsyncThunk('data/fetchDisebar', async () => {
  const response = await axios.get('http://localhost:3000/disebar');
  return response.data;
});



export const fetchmaintype = createAsyncThunk('data/fetchmaintype', async () => {
  const response = await axios.get('http://localhost:3000/maintype');
  return response.data;
});

export const fetchdesebar = createAsyncThunk('data/disebar', async () => {
  const response = await axios.get('http://localhost:3000/disebar');
  return response.data;
});




export const inserttocart = createAsyncThunk('data/insert', async (cartdata , thunkAPI) => {
  const {rejectWithValue }= thunkAPI; 
  try{
    const response = await fetch('http://localhost:3000/cart',{
      method:'POST', 
      body:JSON.stringify(cartdata),
      headers:{
      'Content-Type':'application/json; charest=UTF-8',
      },

    });
    const data = await response.json();
    return data ; 

  }catch(error){
    return rejectWithValue(error.message);

  }
  
});
export const deleteData = createAsyncThunk(
  'cart/deleteData',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`http://localhost:3000/cart/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);



export const fetchcart = createAsyncThunk('data/getcart', async () => {
  const response = await axios.get('http://localhost:3000/cart');
  return response.data;
});


const dataSlice = createSlice({
  name: 'data',
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })



      .addCase(inserttocart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(inserttocart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartdata.push(action.payload);
      })
      .addCase(inserttocart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })


      .addCase(deleteData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.loading = false;
        state.cartdata = state.cartdata.filter((item)=> item.id !== action.payload)
      })
      .addCase(deleteData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })



      .addCase(fetchcart.pending , (state ,action) => {
        state.loading = true;

      }).addCase(fetchcart.fulfilled , (state ,action) => {
        state.loading = false;

        state.cartdata = action.payload;

      }).addCase(fetchcart.rejected , (state ,action) => {
        state.loading = false;


      })


      .addCase(fetchmaintype.pending , (state ,action) => {
        state.loading = true;

      }).addCase(fetchmaintype.fulfilled , (state ,action) => {
        state.loading = false;

        state.maintype = action.payload;

      }).addCase(fetchmaintype.rejected , (state ,action) => {
        state.loading = false;


      })


      .addCase(fetchdesebar.pending , (state ,action) => {
        state.loading = true;

      }).addCase(fetchdesebar.fulfilled , (state ,action) => {
        state.loading = false;

        state.desebar = action.payload;

      }).addCase(fetchdesebar.rejected , (state ,action) => {
        state.loading = false;


      })
      
      
      
      
      

      
      
      .addCase(fetchDisebar.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDisebar.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.disebarData = action.payload;
      })
      .addCase(fetchDisebar.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message});
  },
});

export default dataSlice.reducer;
