"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Proposal = (function () {
    function Proposal(id, customer, portfolio_url, hourly_rate, tool, esimated_hours, week_to_complete, client_email) {
        if (portfolio_url === void 0) { portfolio_url = 'http://'; }
        this.id = id;
        this.customer = customer;
        this.portfolio_url = portfolio_url;
        this.hourly_rate = hourly_rate;
        this.tool = tool;
        this.esimated_hours = esimated_hours;
        this.week_to_complete = week_to_complete;
        this.client_email = client_email;
    }
    return Proposal;
}());
exports.Proposal = Proposal;
//# sourceMappingURL=proposal.js.map