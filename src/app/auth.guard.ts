import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authToken = localStorage.getItem('token'); // Retrieve authentication token from local storage

  if (authToken) {
    return true; // User is authenticated, allow access to the dashboard
  } else {
    // Redirect to the login page
    inject(Router).createUrlTree(['/login']);
    return false;
  }
};
