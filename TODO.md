- [ ] We still need to create logic for sprints
- [ ] Clean up code by breaking out into helper functions
- [ ] Add logic for tasks/actions that can be added to the table in a diamond icon or something.
- [ ] Create different types of tasks i.e. Deliverables, Projects, Tasks etc. Follow naming sequence in general Agile practices.
- [ ] Create API call to create new Issues

  - Current DB Model looks like

    - ```
        {
          _id: ObjectId,                  // MongoDB auto generated
          name: String,                   // Issue Name
          id: Number,                     // Issue ID
          status: Enum,                   // The current status of the Issue
          endDate: Object {               // Date object of when it ends
            y: String,                    // Year
            m: String,                    // Month
            d: String                     // Day
          },
          startDate: Object {             // Date object of when it starts
            y: String,                    // Year
            m: String,                    // Month
            d: String                     // Day
          },

          <!-- Objects to add, that are generic -->
          issue_type: Enum                // What type of issue is this?
          assigned_to: ***,               // Based on the user table who is assigned to this
          assigned_date: ,
          created_by: ,
          created_date: ,
          updated_by: ,
          updated_date: ,
          summary: String,                // The summary or title of the story
          description: String,            // A more detailed description of the story
          acceptance_criteria: String     // All requirements used to accept the story
          ref_to: ***,                    // Issues of a higher type that this belongs to
          ref_by: ***,                    // Issues of same or lower type that belong to this
          assigned_iteration: String      // What Iteration(Sprint) is the issue assigned to

          ...{All below fields will be custom based on client so they will all be custom_field_[i]}, for example
          custom_field_1: String,         // If we do this will need to figure some way to connect the type or value with what they are intending
        }
      ```

```
Field Map
{
  field#: string from client data structure,
  ...
}
```
