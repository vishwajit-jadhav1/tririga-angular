import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

interface userData {
  address: string,
  id: string,
  name: string,
  status: string,
  _id?: string,
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  constructor(public http: HttpClient, private service: AppService) {
    this.getData()


  }
  dataSource: userData[] = []
  displayedColumns: string[] = ['id', 'name', 'address', 'status'];


  async getData() {
    this.dataSource = await this.service.getApiData("cstCapitalProjectVJQRDS", "cstVishwajitModelView")
  }
}

