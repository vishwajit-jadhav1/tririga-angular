import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  title = "Add User";
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  async onSubmit(data: any) {

    const url = 'https://jllsa-dev.iwmsapp.com/tririga/p/webapi/rest/v2/cstVishwajitModelView/-1/cstCapitalProjectVJQRDS?actionGroup=cstCapitalProjectVJAG&action=cstCreateRecord'
    console.log("URL:", url);

    const NEW_RECORD_DATA = { data };
    const data1 = await lastValueFrom(this.http.post(url, NEW_RECORD_DATA, { withCredentials: true }));
    console.log(data1, "data1");



    this.router.navigate(['user']);

  }
}


// ds =cstCapitalProjectQRDS
// const modelAndView = "cstFirstModelAndViewVJ";

// view expose name = "cstview-first-view-vj";



// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { lastValueFrom } from 'rxjs';
// import { AppService } from 'src/app/app.service';


// @Component({
//   selector: 'app-add-user',
//   templateUrl: './add-user.component.html',
//   styleUrls: ['./add-user.component.scss']
// })
// export class AddUserComponent {
//   title = "Add User";
//   constructor(private router: Router, private service: AppService) { }

//   async onSubmit(data: any) {
//     this.service.postData(data, 'cstVishwajitModelView', 'cstCapitalProjectVJQRDS', 'cstCapitalProjectVJAG', 'cstCreateRecord')
//     this.router.navigate(['user']);

//   }
// }
