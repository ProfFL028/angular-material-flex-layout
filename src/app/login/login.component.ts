import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {remeber: false};

  constructor(private dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('user:', this.user);
    this.dialogRef.close();
  }
}
