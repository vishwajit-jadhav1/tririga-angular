
import { UsersComponent } from "src/app/pages/users/users.component";
import { NotFoundComponent } from "../not-found/not-found.component";
import { AddUserComponent } from "src/app/pages/add-user/add-user.component";

export const routes = [
  { path: 'user', title: "User List ", component: UsersComponent },
  { path: 'add-user', title: "Add User", component: AddUserComponent },
  { path: '**', component: NotFoundComponent },


]