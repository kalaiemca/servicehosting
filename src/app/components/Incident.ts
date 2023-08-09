export class Incident {

    constructor(
        public IncidentID: number,
        public IncidentType: string,
        public ContactType: string,
        public Impact: string,
        public Urgency: string,
        public Priority: string,
        public BusinessService: string,
        public ConfigurationItem: string,
        public AssignmentGroup: string,
        public Assignedto: string,
        public Opened: string,
        public Updated: string,
        public CreatedBy: string,
        public UpdatedBy: string,
        public ShortDescription: string,
        public Description: string,
        public Status: string,
    ) {  }
  
  }