import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="container">
                    <router-outlet></router-outlet>
               </div>`,
  styles: [`.container{
    width:100%;
    margin-top:70px;
    animation-name: fadeInDown;
    animation-duration: 1s;
    animation-fill-mode: both;
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}`]
})
export class AppComponent  {

}



