import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'


import { HomepageComponent } from './homepage/homepage.component'
import { DocumentComponent } from './documents/documents.component'

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomepageComponent  },
  {path: 'documents', component: DocumentComponent  },
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]

	})

export class AppRoutingModule{ }
