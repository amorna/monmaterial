import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';


@Component({
  selector: 'app-students',
  standalone: true,
  imports: [MatCardModule,MatDividerModule,MatTableModule,MatButtonModule, MatPaginatorModule,MatSortModule,MatInputModule,MatFormFieldModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit,AfterViewInit {
getPayments(student: any):void {
  this.router.navigateByUrl("/admin/payement");
}
filterStudent(event: Event):void {
   let value:string=(event.target as HTMLInputElement).value;
   this.dataSource.filter=value;
}
  public students:any;
  public dataSource:any;
  public displayedColumns:string[]=["id","firstname","lastname","payments"];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router:Router){
  }
  ngOnInit(): void {
    
    this.students=[];
    for(let i:number=1;i<100;i++){
      this.students.push({
        id:i,
        firstname:Math.random().toString(20),
        lastname:Math.random().toString(20)
      }

      );

    }
    this.dataSource=new MatTableDataSource(this.students);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }

}
