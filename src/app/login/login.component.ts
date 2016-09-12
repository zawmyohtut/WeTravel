import { Component } from '@angular/core';

export class Credential {
    email: string;
    password: string;
}

@Component({
    moduleId: module.id,
    selector: 'wet-login',
    templateUrl: 'login.component.html',
})

export class LoginComponent {

    credentials: Credential = {
        email: '',
        password: ''
    }
}