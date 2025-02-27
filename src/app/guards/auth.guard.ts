import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {Auth, onAuthStateChanged} from '@angular/fire/auth';


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(Auth)

  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(true);
      } else {
        router.navigate(['/login']);
        resolve(false);
      }
    });
  });

};
