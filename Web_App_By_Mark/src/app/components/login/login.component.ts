import { Component } from "@angular/core";

@Component({
    selector: 'app-login',
    templateUrl:'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent{
    formData = {
        username: '',
        password: '',
        isLoged: false,
    };

    login() {
        if (this.formData.username === 'Mark' && this.formData.password === '123'){
            this.formData.isLoged = true;
        } else {
            this.formData.isLoged = false;
        }

        console.log(this.formData.isLoged);
        
    }
}