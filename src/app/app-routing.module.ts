import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UsuariosComponent } from "./usuarios/usuarios.component";

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { 
        path: 'dashboard', 
        component: DashboardComponent, 
        canActivate: [AuthGuard],
        children: [
            {
                path:'usuarios',
                component: UsuariosComponent
            }
        ]
    },
    { path: '**', redirectTo: 'login'} // Cuando no exixste la ruta
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}