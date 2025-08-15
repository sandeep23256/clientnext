// store.ts
import { configureStore } from '@reduxjs/toolkit';
import adminAuthReducer from './features/adminAuth/adminAuthSlice'
import { adminAuthApi } from './features/adminAuth/adminAuthApi';
import { sliderApi } from './features/slider/sliderApi';
import { technologyApi } from './features/technology/technologyApi';
import { portfolioApi } from './features/portfolio/portfolioApi';
import { eventApi } from './features/event/eventApi';
import { teamApi } from './features/team/teamApi';
import { placementApi } from './features/placement/placementApi';
import { contactApi } from './features/contact/contactApi';
import { userAuthApi } from './features/userAuth/userAuthApi';

export const store = configureStore({
  reducer: {
    adminAuth: adminAuthReducer,
    [adminAuthApi.reducerPath]: adminAuthApi.reducer,
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    [sliderApi.reducerPath]: sliderApi.reducer,
    [technologyApi.reducerPath]: technologyApi.reducer,
    [portfolioApi.reducerPath]: portfolioApi.reducer,
    [eventApi.reducerPath]: eventApi.reducer,
    [teamApi.reducerPath]: teamApi.reducer,
    [placementApi.reducerPath]: placementApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(adminAuthApi.middleware)
      .concat(userAuthApi.middleware)
      .concat(sliderApi.middleware)
      .concat(technologyApi.middleware)
      .concat(portfolioApi.middleware)
      .concat(eventApi.middleware)
      .concat(teamApi.middleware)
      .concat(placementApi.middleware)
      .concat(contactApi.middleware),
});

