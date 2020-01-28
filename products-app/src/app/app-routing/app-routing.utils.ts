import { Routes, Route } from '@angular/router';
import { ProductsComponent } from '../components/products/products.component';



interface CustomRoute extends Route {
    children?: Array<CustomRoute>;
    title?: string;
    isVisible?: boolean;
}


export const routes: Array<CustomRoute> = [
    
    { path: "", redirectTo: "products", pathMatch: "full" },
    { path: "products", component: ProductsComponent, title: "Products", isVisible: true }

];