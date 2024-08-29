import { LightningElement, wire } from 'lwc';
import getTotalOpportunityCount from '@salesforce/apex/OpportunityController.getTotalOpportunityCount';

export default class OpportunityCount extends LightningElement {
    totalCount;

    @wire(getTotalOpportunityCount)
    wiredOpportunityCount({ error, data }) {
        if (data) {
            this.totalCount = data;
        } else if (error) {
            console.error('Error fetching Opportunity count', error);
        }
    }
}
