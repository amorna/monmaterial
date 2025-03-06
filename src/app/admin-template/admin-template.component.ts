import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../guards/auth.guard';

@Component({
  selector: 'app-admin-template',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,MatToolbarModule,MatMenuModule,MatSidenavModule,MatListModule,RouterModule,CommonModule],
  templateUrl: './admin-template.component.html',
  styleUrl: './admin-template.component.css'
  
})
export class AdminTemplateComponent implements OnInit{
logout() {
  this.authService.logout();
}
  constructor(public authService:AuthenticationService){

  }
  ngOnInit(): void {
    
  }

}
