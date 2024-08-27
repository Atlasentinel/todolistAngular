import { Routes } from '@angular/router';
import { TodoComponent } from './todolist/todo.component';
import { ConnexionComponent } from './connexion/recap.component';
import { Page404Component } from './page404/page404.component';


export const routes: Routes = [
    {path: "recap", component: ConnexionComponent},
    {path: "todolist", component: TodoComponent},
    {path: "", redirectTo: "accueil", pathMatch: 'full' },
    {path: "**", component: Page404Component}
];
