import { Component } from "@angular/core";
import { Proposal } from "./proposal";

@Component({
	moduleId: module.id,
	selector: "component-list",
	templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent{
 proposal = new Proposal()
}