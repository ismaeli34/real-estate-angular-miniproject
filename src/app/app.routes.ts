import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { PropertyListComponent } from './pages/property-list/property-list.component';
import { CreatePropertyComponent } from './pages/create-property/create-property.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch:'full'
    
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path:'register',
        component: RegistrationComponent
    },
    {
        path:'property-list',
        component: PropertyListComponent
    },
    {
        path: 'create-property',
        component:CreatePropertyComponent
    }
];
