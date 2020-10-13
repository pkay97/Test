import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DetailsModalComponent } from './details-modal/details-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  myForm: FormGroup;
  gender = ['Male', 'Female'];
  option: any;
  dataSource: any;
  selected = 'DELHI';
  displayedColumns: string[] = ['address', 'bank_id', 'bank_name', 'branch', 'city',
    'district', 'ifsc', 'state', 'details'];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(public fb: FormBuilder, private http: HttpClient, public dialog: MatDialog) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      phone: [''],
      email: ['', [Validators.required, Validators.email]],
      account: ['', [Validators.required]],
      code: ['', [Validators.required]],
      notes: ['']
    });
    this.onChange();
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.myForm.controls[controlName].hasError(errorName);
  }

  submitForm() {
    console.log(this.myForm.value);
  }

  onChange() {
    if (this.selected === 'DELHI') {
      return this.http.get('https://vast-shore-74260.herokuapp.com/banks?city=DELHI').subscribe(data => {
        this.dataSource = data;
        this.dataSource = new MatTableDataSource(this.dataSource);
        this.dataSource.paginator = this.paginator;
      });
    }
    else if (this.selected === 'MUMBAI') {
      return this.http.get('https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI').subscribe(data => {
        this.dataSource = data;
        this.dataSource = new MatTableDataSource(this.dataSource);
        this.dataSource.paginator = this.paginator;
      });
    }

    else if (this.selected === 'GURGAON') {
      return this.http.get('https://vast-shore-74260.herokuapp.com/banks?city=GURGAON').subscribe(data => {
        this.dataSource = data;
        this.dataSource = new MatTableDataSource(this.dataSource);
        this.dataSource.paginator = this.paginator;
      });
    }
    else if (this.selected === 'PUNE') {
      return this.http.get('https://vast-shore-74260.herokuapp.com/banks?city=PUNE').subscribe(data => {
        this.dataSource = data;
        this.dataSource = new MatTableDataSource(this.dataSource);
        this.dataSource.paginator = this.paginator;
      });
    }
  }

  openDialog(details: any): void {
    const dialogRef = this.dialog.open(DetailsModalComponent, {
      height: '400px',
      width: '700px',
      data: { details }
    });
  }
}
