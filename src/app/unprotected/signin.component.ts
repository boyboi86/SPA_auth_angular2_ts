import {Component, OnInit} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    template: `
        <h3>Please sign up to use all features</h3>
        <form [formGroup]="myForm" (ngSubmit)="onSignin()" class="form-group">
            <div class="input-group">
                <label for="email">E-Mail</label>
                <input formControlName="email" type="email" id="email" class="form-control">
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input formControlName="password" type="password" id="password" class="form-control">
            </div>
            <br>
            <button class="btn btn-primary" type="submit" [disabled]="!myForm.valid">Sign In</button>
        </form>
    `
})
export class SigninComponent implements OnInit {
    myForm: FormGroup;
    error = false;
    errorMessage = '';

    constructor(private fb: FormBuilder) {}

    onSignin() {

    }

    ngOnInit():any {
        this.myForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
}