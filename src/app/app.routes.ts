import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { PayementsComponent } from './payements/payements.component';
import { LoadStudentComponent } from './load-student/load-student.component';
import { LoadPayementComponent } from './load-payement/load-payement.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthorizationGuard } from './guards/authorization.guard';



export const routes: Routes = [
    {path:"",component:LoginComponent},
    {path:"login",component:LoginComponent},
    {path:"admin",component:AdminTemplateComponent,canActivate:[AuthGuard],children:[
    {path:"home",component:HomeComponent},
    {path:"profile",component:ProfileComponent},
    {path:"dashboard",component:DashboardComponent},
    {path:"students",component:StudentsComponent},
    {path:"payement",component:PayementsComponent},
    {path:"loadStudent",component:LoadStudentComponent,canActivate:[AuthorizationGuard],data:{roles:['ADMIN']}},
    {path:"loadPayement",component:LoadPayementComponent,canActivate:[AuthorizationGuard],data:{roles:['ADMIN']}}
    ]}
    
];

