import { Routes, Route } from '@angular/router';
import { ProductsComponent } from '../components/products/products.component';
import { LoginComponent } from '../components/login/login.component';



interface CustomRoute extends Route {
    children?: Array<CustomRoute>;
    title?: string;
    isVisible?: boolean;
}


export const routes: Array<CustomRoute> = [
    
    { path: "products", component: ProductsComponent, title: "Products", isVisible: true },
    { path: "login", component: LoginComponent, title: "Login/Register", isVisible: true },
    { path: "**", redirectTo: "login", pathMatch: "full" },
    { path: "", redirectTo: "login", pathMatch: "full" }
    
];