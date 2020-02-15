import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserTweetsComponent } from './user-tweets/user-tweets.component';

@NgModule({
  declarations: [UserComponent, UserTweetsComponent],
  imports: [CommonModule, UserRoutingModule]
})
export class UserModule {}
