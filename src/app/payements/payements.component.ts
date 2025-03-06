import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-payements',
  standalone: true,
  imports: [MatCardModule,MatDividerModule],
  templateUrl: './payements.component.html',
  styleUrl: './payements.component.css'
})
export class PayementsComponent {

}
