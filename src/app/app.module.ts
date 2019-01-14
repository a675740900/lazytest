import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Iwe7LazyLoadModule, LazyComponentsInterface } from 'iwe7-lazy-load';

// 用到的懒加载组件
let lazyComponentsModule: LazyComponentsInterface[] = [
  {
    // 组件的selector
    path: 'lazy-test',
    // 组件的相对地址
    loadChildren: './lazy-test/lazy-test.module#LazyTestModule'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    Iwe7LazyLoadModule.forRoot(lazyComponentsModule),
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
