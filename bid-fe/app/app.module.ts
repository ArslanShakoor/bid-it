import { NgModule } from '@angular/core' ;
import { BrowserModule } from '@angular/platform-browser' ;

import { AppComponent} from './app.component'
import { HomepageComponent } from './homepage/homepage.component'
import { DocumentComponent } from './documents/documents.component'
import { AppRoutingModule} from './app-routing.module'

@NgModule({
	imports: [
	  BrowserModule,
	  AppRoutingModule
    ],
    declarations: [
      AppComponent,
      HomepageComponent,
      DocumentComponent
    ],
    bootstrap: [
      AppComponent
    ]
})
export class AppModule {}


