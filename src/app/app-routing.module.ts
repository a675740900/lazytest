import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponentsInterface, Iwe7LazyLoadModule } from 'iwe7-lazy-load';

const routes: Routes = [
  // { path: 'home', loadChildren: './home/home.module#HomeModule' },
  // { path: '**', redirectTo: 'home' }
];
// // 用到的懒加载组件
// let lazyComponentsModule: LazyComponentsInterface[] = [
//   {
//     // 组件的selector
//     path: 'lazy-test',
//     // 组件的相对地址
//     loadChildren: './lazy-test/lazy-test.module#LazyTestModule'
//   }
// ];

@NgModule({
  // imports: [RouterModule.forRoot(routes), Iwe7LazyLoadModule.forRoot(lazyComponentsModule),],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppRoutingModule { }
