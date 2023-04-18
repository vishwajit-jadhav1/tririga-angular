

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { NgModule, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpperCasePipe } from '@angular/common';
import { routes } from './../app/component/sidebar/sidebar'
import { MatGridListModule } from '@angular/material/grid-list';
import { Router, ActivatedRoute } from '@angular/router';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { UsersComponent } from './pages/users/users.component';




@NgModule({
  declarations: [AddUserComponent, UsersComponent],

  imports: [
    MatTableModule,
    MatCardModule,
    UpperCasePipe,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,

    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})

export class AppRoutingModule implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.navigate(['user']);
  }

}
