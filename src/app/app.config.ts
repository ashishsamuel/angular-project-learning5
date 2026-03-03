import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { cartReducer, productsCartReducer } from './store/cart.reducers';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideHttpClient(),
    provideStore({
      cartCount:cartReducer,
      cartProductsList: productsCartReducer
    })
  ]
};
