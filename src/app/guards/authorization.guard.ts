import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthorizationGuard {
  constructor(private authService:AuthenticationService,private router:Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
   
   let authorize:boolean=false;
   let authorizeRoles:string[]=route.data['roles'] as string[];
   let roles :string[]=this.authService.roles;
    for(let i:number=0;i<roles.length;i++){
      if(authorizeRoles.includes(roles[i])){
        authorize=true;
      }
    }
    return authorize;
  }
  
}


