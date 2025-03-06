import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-load-payement',
  standalone: true,
  imports: [MatCardModule,MatDividerModule],
  templateUrl: './load-payement.component.html',
  styleUrl: './load-payement.component.css'
})
export class LoadPayementComponent {

}
