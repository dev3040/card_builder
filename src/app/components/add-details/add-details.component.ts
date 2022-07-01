import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css'],
})
export class AddDetailsComponent implements OnInit {
  form: FormGroup;
  generate = false;
  count = 0;
  stud_details: any;
  constructor(private fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[A-Z]*$/)]],
      marks: fb.array([]),
      file: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {}
  getDetails() {
    this.stud_details = this.form.value;
    this.generate = true;
  }

  addNewAddressGroup() {
    if (this.count < 3) {
      this.count += 1;
      const add = this.form.get('marks') as FormArray;
      add.push(
        this.fb.group({
          id: [this.count],
          subject: [
            '',
            [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{0,30}$/)],
          ],
          mark: [
            '',
            [Validators.required, Validators.pattern(/^([1-9][0-9]?|100)$/)],
          ],
        })
      );
    } else {
      alert('You can add only 3 subject');
    }
  }
  get addDynamicElement() {
    return this.form.get('marks') as any;
  }
  deleteAddressGroup(index: number) {
    this.count -= 1;
    const add = this.form.get('marks') as FormArray;
    add.removeAt(index);
  }
  imageSrc!: string;
  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageSrc = reader.result as string;
        this.form.patchValue({
          fileSource: reader.result,
        });
      };
    }
  }
  backBtn() {
    this.generate = false;
    this.form.reset();
    const add = this.form.get('marks') as FormArray;
    add.clear();
  }
  printPDF() {
    window.print();
  }
}
