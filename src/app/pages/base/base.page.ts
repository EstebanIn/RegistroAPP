import { Component, OnInit, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-base',
  templateUrl: './base.page.html',
  styleUrls: ['./base.page.scss'],
})
export class BasePage implements OnInit, AfterViewInit {

  @ViewChild('titulo', {read: ElementRef, static:true}) titulo: ElementRef;

  constructor(
    private router: Router,
    private animationController: AnimationController,
    ) {  }

  public ngAfterViewInit(): void {
    const animation = this.animationController.create()
    .addElement(this.titulo.nativeElement)
    .duration(6000)
    .iterations(Infinity)
    .keyframes([
      { offset: 0, background: 'red'},
      { offset: 0.78, background: 'var(--background)'},
      { offset: 1, background: 'white'},
    ]);
    animation.play();
  }
 
  ngOnInit() {
  }

  goToLogin(){
    this.router.navigate(['/login'])
  }
  goToRecuperarContra(){
    this.router.navigate(['/recuperar-contra'])
  }
  
  goToAPPIService(){
    this.router.navigate(['/api-service'])
  }
  

}
