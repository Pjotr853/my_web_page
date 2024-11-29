import { configureStore } from '@reduxjs/toolkit';
import reduxPageToolkit from './pages/reduxPage/reduxPageToolkit';

export default configureStore({
  reducer: {
    counter: reduxPageToolkit,
  },
});
