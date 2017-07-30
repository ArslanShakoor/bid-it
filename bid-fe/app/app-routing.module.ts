import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'


import { HomepageComponent } from './homepage/homepage.component'
import { DocumentComponent } from './documents/documents.component'
import { ProposalListComponent } from './proposal/proposal_list.component'
import { ProposalNewComponent } from './proposal/proposal-new.component'
import { ProposalShowComponent } from './proposal/proposal-show.component'
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomepageComponent  },
  {path: 'documents', component: DocumentComponent  },
  {path: 'proposals', component: ProposalListComponent },
  {path: 'proposal/new', component: ProposalNewComponent },
  {path: 'proposal/:id', component: ProposalShowComponent },
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]

	})

export class AppRoutingModule{ }
