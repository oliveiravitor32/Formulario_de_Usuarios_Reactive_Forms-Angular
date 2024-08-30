import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { PipesModule } from '../pipes/pipes.module';
import { ContactInformationsComponent } from './contact-informations/contact-informations.component';
import { PhonesListComponent } from './contact-informations/phones-list/phones-list.component';
import { GeneralInformationsComponent } from './general-informations/general-informations.component';
import { UserInfoItemComponent } from './user-info-item/user-info-item.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AddressListComponent } from './contact-informations/address-list/address-list.component';

@NgModule({
  declarations: [
    UsersListComponent,
    GeneralInformationsComponent,
    UserInfoItemComponent,
    ContactInformationsComponent,
    PhonesListComponent,
    AddressListComponent,
  ],
  imports: [CommonModule, AngularMaterialModule, PipesModule],
  exports: [
    UsersListComponent,
    GeneralInformationsComponent,
    ContactInformationsComponent,
  ],
})
export class ComponentsModule {}
