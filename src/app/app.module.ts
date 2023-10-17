import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {ReadComponent} from './read/read.component';
import { ReadItemsComponent } from './read/read-items/read-items.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ReadBarComponent } from './read/read-bar/read-bar.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as fromItem from './state/reducers/item.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ItemEffects } from './state/effects/item.effects';
import { ItemModalComponent } from './read/modals/item-modal/item-modal.component';
import { ItemUpdateModalComponent } from './read/modals/item-update-modal/item-update-modal.component';
import {metaReducers} from './state/reducers/item.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    ReadItemsComponent,
    NavbarComponent,
    ReadBarComponent,
    ItemModalComponent,
    ItemUpdateModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(fromItem.reducers, {metaReducers}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([ItemEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
