import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {AuthState} from '../ngrx/auth.state';
import {first, map, tap} from 'rxjs';


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const store = inject(Store<{ auth: AuthState }>);

  return store.select('auth', 'idToken').pipe(
    map((idToken) => {
      console.log(idToken);
      if (!idToken) {
        router.navigate(['login']);
        return false;
      }
      return true;
    })
  )
};
