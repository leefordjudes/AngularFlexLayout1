import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DefaultComponent } from './default.component';
import { HomeComponent } from '../../modules/home/home.component';
import { PostsComponent } from '../../modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    PostsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
  ]
})
export class DefaultModule { }
