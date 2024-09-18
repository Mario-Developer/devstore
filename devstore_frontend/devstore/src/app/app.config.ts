import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProductsComponent } from './pages/products/products.component';
import { StoreComponent } from './pages/store/store.component';
import { VideosComponent } from './pages/videos/videos.component';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({
      eventCoalescing: true
    }),
    provideRouter([
      { path: 'home', component: HomeComponent },
      { path: 'aboutus', component: AboutusComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'store', component: StoreComponent },
      { path: 'videos', component: VideosComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]),
    provideAnimationsAsync()
  ]
};
