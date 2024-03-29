import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-app',
  templateUrl: './admin-app.component.html',
  styleUrls: ['./admin-app.component.css']
})
export class AdminAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.onscroll = () => {
      this.scrollFunction();
    };
    document.addEventListener('click', function handleClickOutsideBox(event: any) {
      let but = document.getElementById('but') as HTMLDivElement | null;
      let box = document.getElementById('modalMobile') as HTMLDivElement | null;
      if (!but?.contains(event.target)) {
        box?.classList.add('d-none');
      }
    });
  }
  scrollFunction(): any {
    let myopenheader = document.getElementById('oheader') as HTMLDivElement | null;
    let myheader = document.getElementById('header') as HTMLDivElement | null;
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      
      myheader?.classList.add('bg-light');
    } else {
      myheader?.classList.remove('bg-light');
    }
    if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
      myopenheader?.classList.remove('d-none');
    }else{
      myopenheader?.classList.add('d-none');
    }
  }
  closeMenuMobile() {
    let menu = document.getElementById('modalMobile') as HTMLDivElement | null;
    menu?.classList.add("d-none");
  }
  openMenuMobile() {
    let menu = document.getElementById('modalMobile') as HTMLDivElement | null;
    menu?.classList.remove("d-none");
  }
}
