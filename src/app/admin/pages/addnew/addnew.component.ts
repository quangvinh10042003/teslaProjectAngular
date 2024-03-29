import { Router } from '@angular/router';
import { VehicalService } from './../../../services/vehical.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {
  categoryId: number = 1;
  quantityColor: number = 1;
  quantitySlide: number = 1;
  paint: any = [];
  allImg: any = [];
  formGroup = new FormGroup({
    name: new FormControl(''),
    category_id: new FormControl(1),
    price: new FormControl(''),
    range: new FormControl(''),
    topSpeed: new FormControl(''),
    mph: new FormControl(''),
    paint: new FormControl(''),
    imgProduct: new FormControl(''),
    interior: new FormControl(''),
    videoAutoPilot: new FormControl(''),
    autoPilot: new FormControl(''),
    allImg: new FormControl(''),
    wheel: new FormControl(''),
    imgWheel: new FormControl(''),
    linkWheel: new FormControl(''),
    description: new FormControl(''),
    inHome: new FormControl(false),
    inTopSeller: new FormControl(false),
    inStock: new FormControl(true)
  })
  constructor(private vehicalSer: VehicalService, private router: Router) { }

  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
  }
  changeImage(event:any,i:number){
    const reader = new FileReader();
    const file = event.target.files;
    reader.readAsDataURL(file[0]);
    reader.onload = ()=>{
      this.allImg[i].img = reader.result;
    }
  }
  changeImageInterior(event:any){
    const reader = new FileReader();
    const file = event.target.files;
    reader.readAsDataURL(file[0]);
    reader.onload = ()=>{
      this.form.interior.value = reader.result;
    }
  }
  changeImageProduct(event:any){
    const reader = new FileReader();
    const file = event.target.files;
    reader.readAsDataURL(file[0]);
    reader.onload = ()=>{
      this.form.imgProduct.value = reader.result;
    }
  }
  changeVideoAutoPilot(event:any){
    const reader = new FileReader();
    const file = event.target.files;
    reader.readAsDataURL(file[0]);
    reader.onload = ()=>{
      this.form.videoAutoPilot.value = reader.result;
    }
  }
  enterQuantity() {
    this.paint = [];
    let setColor = document.getElementById('setColor') as HTMLDivElement | null;
    for (let i = 1; i <= this.quantityColor; i++) {
      let color: any = '#000000';
      this.paint.push({ color });
    }
    setColor?.classList.remove('d-none');
  }
  enterSlider() {
    this.allImg = [];
    let setSlide = document.getElementById('setSlide') as HTMLDivElement | null;
    for (let i = 1; i <= this.quantitySlide; i++) {
      let id = i;
      let img: any = '';
      this.allImg.push({ id, img });
    }
    setSlide?.classList.remove('d-none');
  }
  setColor() {
    this.form.paint.value = this.paint;
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your color has been saved',
      showConfirmButton: false,
      timer: 1000
    })
  }
  setSlide() {
    this.form.allImg.value = this.allImg;
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your slide has been saved',
      showConfirmButton: false,
      timer: 1000
    })
  }
  get form(): any {
    return this.formGroup.controls;
  }
  submitVehical() {
    Swal.fire({
      title: 'Do you want to save the new vehical?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success');
        this.vehicalSer.addItem(this.formGroup.value).subscribe(() => {
          this.router.navigate(['admin']);
        })
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
}
