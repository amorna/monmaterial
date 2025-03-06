import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-load-student',
  standalone: true,
  imports: [MatCardModule,MatDividerModule],
  templateUrl: './load-student.component.html',
  styleUrl: './load-student.component.css'
})
export class LoadStudentComponent {

}
