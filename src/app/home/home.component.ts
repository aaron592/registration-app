import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { RegistrationService } from '../registration.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user : User[];

  constructor(private service: RegistrationService) { }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers(): void{
    this.service.getUsers().subscribe(
      (response: User[])=>{
        this.user = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

}
