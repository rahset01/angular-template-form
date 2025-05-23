import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formSubmitted = false;

  formData: any = {
    name: '',
    email: '',
    age: '',
    dob: '',
    message: '',
    country: null,
    gender: '',
    terms: false,
    file: null
  };

  onSubmit(form: NgForm) {
    this.formSubmitted = true;
    if (form?.valid) {
      localStorage.setItem('formData', JSON.stringify(this.formData));
      alert('Form submitted successfully!');
      form?.resetForm();
      this.formSubmitted = false;
    }
  }

  onReset(form: NgForm) {
    form?.resetForm();
    this.formSubmitted = false;
  }

  onFileChange(event: any) {
    const file = event?.target?.files[0];
    this.formData.file = file ? file?.name : null;
  }

  resetForm(form: NgForm) {
    this.formData.country = null;
    form.resetForm({ country: null });
    this.formSubmitted = false;
  }
}

