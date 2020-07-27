import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './auth/login/login.component';
import {SetUpAccountComponent} from './auth/set-up-account/set-up-account.component';
import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {EntityService} from './service/entity.service';
import {httpInterceptorProviders} from './http-interceptors';
import {ToastrModule} from 'ngx-toastr';
import {FormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModalModule, BsModalRef} from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    LoginComponent,
    SetUpAccountComponent,
    ForgotPasswordComponent,
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      enableHtml: true,
    }),
  ],
  providers: [
    EntityService,
    BsModalRef,
    httpInterceptorProviders,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
