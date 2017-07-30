export class Proposal{
	constructor(
      public id?: number,
      public customer?: string,
      public portfolio_url: string = 'http://',
      public hourly_rate?: number,
      public tool?: string,
      public esimated_hours?: number,
      public week_to_complete?: number,
      public client_email?: string,

    ){}
}