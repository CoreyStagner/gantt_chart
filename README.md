# Gantt Chart Project

This project is a Gantt Chart application that helps in project management by visually representing the schedule of tasks over time.

## Features

- Create and manage tasks
- Set start and end dates for tasks
- Visualize task dependencies
- Drag and drop interface for easy scheduling

## Features Pinterest Dream Board

- Once user signs in they will be able to see specific aspects based on thier role assigned to themselves
  - They will be able to see specific team board(s) and/or project board(s)
  - They will be able to edit create different tasks on said boards
- Can view different _Categories_ **TODO: Find the right term to replace Category and Categories**
  - Deliverable
  - Feature
  - Epic
  - Story
  - Task
  - Sub-Task
- When they are on a board, they will be able to see specific _Category_ and traverse to a, parent or child, _Category_ where the table will get rendered with that specific data.
- User can also edit the existing _Category_ they are viewing where all the data will show up in a Modal for quick edit or a dedicated page for all edit data.
- Based on the _Category_ Start/End Times they will see a timeline view of the current _Category_ they are on and all immediate children _Categories_.
- Have all data be stored in a MongoDB
- Import Data from CSV to populate all data or seed the Database.
- Export Data from CSV to provide structured data to other services.
- Export charts to various formats

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/CoreyStagner/gantt_chart.git
   ```
2. Navigate to the project directory:
   ```sh
   cd gantt_chart
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the application:
   ```sh
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:3000`

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License.

## Contact

For any questions or suggestions, please open an issue or contact the project maintainer at [coreystagnerllc@gmail.com].
