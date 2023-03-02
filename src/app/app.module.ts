import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';


import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { SwiperModule } from 'swiper/angular';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from './services/auth.service';
import { DashHeaderComponent } from './components/dash-header/dash-header.component';
import { EnquiryComponent } from './pages/dashboard/enquiry/enquiry.component';
import { DashProductComponent } from './pages/dashboard/dash-product/dash-product.component';
import { ProductDetailsComponent } from './pages/dashboard/product-details/product-details.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    DashHeaderComponent,
    EnquiryComponent,
    DashProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule,
    SwiperModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    LottieModule.forRoot({ player: playerFactory }),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
