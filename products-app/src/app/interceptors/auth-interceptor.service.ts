import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from '../services/auth/auth.service';

@Injectable()


export class AuthInterceptorService implements HttpInterceptor {

    constructor(private authService: AuthService) {}


    intercept(req: HttpRequest<any>, next: HttpHandler) {

        const token = localStorage.getItem("token");
        if (typeof token !== 'string') return next.handle(req);

        const newRequest = req.clone({
            setHeaders: {
                "authorization": token
            }
        });
        
        
        return next.handle(newRequest)
    }


}





