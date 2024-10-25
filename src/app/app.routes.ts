import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { ProductsComponent } from './products/products/products.component';
import { AuthService } from './service/auth.service';
import { authGuard } from './auth.guard';
import { ProfileComponent } from './user/profile/profile.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';

export const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "products", component: ProductsComponent, canActivate: [authGuard] },
    { path: "profile", component: ProfileComponent, canActivate: [authGuard] },
    { path: "edit-user/:id", component: EditUserComponent, canActivate: [authGuard] },
    { path: '', redirectTo: '/products', pathMatch: 'full' }, // Default route
    { path: '**', redirectTo: '/login' } // Wildcard route
];
