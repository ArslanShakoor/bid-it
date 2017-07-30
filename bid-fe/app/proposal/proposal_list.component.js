"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var proposal_1 = require("./proposal");
var ProposalListComponent = (function () {
    function ProposalListComponent() {
        this.proposal_one = new proposal_1.Proposal(92, "Arslan", "http://google.com", 11, "Ruby On Rails", 17, 2, "example@example.com");
        this.proposal_two = new proposal_1.Proposal(12, "Arslan", "http://google.com", 11, "Ruby On Rails", 17, 2, "example@example.com");
        this.proposal_three = new proposal_1.Proposal(16, "Arslan", "http://google.com", 11, "Ruby On Rails", 17, 2, "example@example.com");
        this.proposals = [
            this.proposal_one,
            this.proposal_two,
            this.proposal_three,
        ];
    }
    ProposalListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "component-list",
            templateUrl: 'proposal-list.component.html'
        })
    ], ProposalListComponent);
    return ProposalListComponent;
}());
exports.ProposalListComponent = ProposalListComponent;
//# sourceMappingURL=proposal_list.component.js.map