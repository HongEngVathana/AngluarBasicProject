import { state } from '@angular/animations';
import { Inject, inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const authGuard: CanActivateChildFn = (route, state) => {
  //   debugger;
  //   const router = inject(Router);
  //   const loggedUser = localStorage.getItem('loginUser');

  //   if (loggedUser !== null) {
  //     return true;
  //   } else {
  //     router.navigateByUrl('login');
  //     return false;
  //   }
  const loggedUser = localStorage.getItem('empErpUser');
  const router = inject(Router);
  if (localStorage != null) {
    return true;
  } else {
    router.navigateByUrl('/login');
    return false;
  }
};
