// Imports do Angular
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Import de Componontes
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';

// Imports de Módulos
import { CommonModule } from '@angular/common';

// Import de Serviços
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { OrderService } from '../order/order.service';
import { NotificationService } from './messages/notification.service';
import { LoginService } from '../security/login/login.service';
import { LoggedInGuard } from '../security/login/loggedin.guard';
import { LeaveOrderGuard } from '../order/leave-order.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../security/login/auth.interceptor';






@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent, RadioComponent, SnackbarComponent,
            RatingComponent, CommonModule,
            FormsModule, ReactiveFormsModule]
})
export class ShareModule{
  static forRoot(): ModuleWithProviders {
    return{
      ngModule: ShareModule,
      providers: [ShoppingCartService,
        RestaurantsService,
        OrderService,
        NotificationService,
        LoginService,
        LoggedInGuard,
        LeaveOrderGuard,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}]
    }
  }
}
