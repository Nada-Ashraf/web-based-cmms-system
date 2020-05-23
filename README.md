# web-based-cmms-system

Prototype implementation of a web-based CMMS system using MERN stack.

## Folder structure

For more info about folder structure click [here](https://stackoverflow.com/a/51128385).

## How to run

1. install dependancies:
   `npm install`

2. run server and client:
   `npm run dev`

### System flow overview

## Snapshots

### 1. Login page

- System users land on a login page, type their email and password.
- The email and password are provided to employees by the system manager.
- If there is any error, the form sends an error message.

<p align="center">
  <img src="./snapshots/login.png" width="40%" height="40%">
  <img src="./snapshots/login_error.png" width="40%" height="40%">
</p>

### 2. Manager UI

#### 2.1 Assets

The manager can:

1. View all assets in the hospital.
2. Add a new asset information
3. View details of the asset
4. Delete an asset
<p align="center">
 <img src="./snapshots/assets.png" width="75%" height="75%">
   <br>
<em>Fig. 2.1.1: Asset list</em>
<br>
</p>

<p align="center">
<br>
 <img src="./snapshots/add_asset.png" width="75%" height="75%">
   <br>
<em>Fig. 2.1.2: Form for adding new asset</em>
<br>
</p>

<p align="center">
<br>
 <img src="./snapshots/asset_details.png" width="75%" height="75%">
   <br>
<em>Fig. 2.1.3: Asset details</em>
<br>
</p>

#### 2.2 Employees

The manager can:

1. View all employees in the hospital.
2. Register a new employee
3. Delete an employee

<p align="center">
<br>
 <img src="./snapshots/employees.png" width="75%" height="75%">
   <br>
<em>Fig. 2.2.1: Employees list</em>
<br>
</p>

<p align="center">
<br>
 <img src="./snapshots/add_employee.png" width="75%" height="75%">
   <br>
<em>Fig. 2.2.1: Employee Registeration form</em>
<br>
</p>

#### 2.3 Preventive maintenance

The manager can:

1. List all preventive maintenance required for assets.
2. Add preventive maintenance required for an asset when registering it.
3. View the instructions of a PM.
4. Delete a PM.

<p align="center">
<br>
 <img src="./snapshots/PMs.png" width="75%" height="75%">
   <br>
<em>Fig. 2.3.1: Preventive maintenance list</em>
<br>
</p>
<p align="center">
<br>
 <img src="./snapshots/add_pm.png" width="75%" height="75%">
   <br>
<em>Fig. 2.3.2: Add PM</em>
<br>
</p>

<p align="center">
<br>
 <img src="./snapshots/pm_instructions.png" width="75%" height="75%">
   <br>
<em>Fig. 2.3.3: Instructions of a PM</em>
<br>
</p>

#### 2.4 Work Orders

The manager can:

1. List all work orders for assets.
2. View the instructions of a work order.

<p align="center">
<br>
 <img src="./snapshots/workorders_manager.png" width="75%" height="75%">
   <br>
<em>Fig. 2.4.1: Work orders list</em>
<br>
</p>

<p align="center">
<br>
 <img src="./snapshots/wo_details.png" width="75%" height="75%">
   <br>
<em>Fig. 2.4.2: Instructions of a WO</em>
<br>
</p>

#### 2.5 Reports

The manager can view all PM and WO reports. //CHECK

<p align="center">
<br>
 <img src="./snapshots/workorders_manager.png" width="75%" height="75%">
   <br>
<em>Fig. 2.5.1: Work orders reports list</em>
<br>
</p>
<p align="center">
<br>
 <img src="./snapshots/workorders_manager.png" width="75%" height="75%">
   <br>
<em>Fig. 2.5.2: Details of a report</em>
<br>
</p>

### 3. Department Supervisor UI

#### 3.1 Assets

Supervisor of a department can:

1. View all assets in his department.
2. View details of department assets.

<p align="center">
<br>
 <img src="./snapshots/assets_supervisor.png" width="75%" height="75%">
   <br>
<em>Fig. 3.1.1: Department Assets</em>
<br>
</p>

#### 3.2 Employees

Supervisor can list employees in his department.

<p align="center">
<br>
 <img src="./snapshots/employees_supervisor.png" width="75%" height="75%">
   <br>
<em>Fig. 3.2.1: Department Employees</em>
<br>
</p>

#### 3.3 Preventive maintenance

Supervisor of a department can:

1. View all preventive maintenance required in his department.
2. View details of a specfic PM.
3. Assign PM work to a technician in his department

<p align="center">
<br>
 <img src="./snapshots/pms_supervisor.png" width="75%" height="75%">
   <br>
<em>Fig. 3.3.1: Department Required PMs</em>
<br>
</p>

<p align="center">
<br>
 <img src="./snapshots/assign_pm.png" width="75%" height="75%">
   <br>
<em>Fig. 3.3.1: Assign PM work</em>
<br>
</p>

#### 3.4 Work Orders

The supervisor can:

1. List all work orders in his department.
2. Create a new work order and assign it to a technican.

<p align="center">
<br>
 <img src="./snapshots/wo_supervisor.png" width="75%" height="75%">
   <br>
<em>Fig. 3.4.1: List of of department workorders</em>
<br>
</p>
<p align="center">
<br>
 <img src="./snapshots/create_wo.png" width="75%" height="75%">
   <br>
<em>Fig. 3.4.1: Create work order form</em>
<br>
</p>

#### 3.5 Reports

The manager can view all department PM and WO reports.

### 4. Technician

#### 4.1 Assets

Technican can:

1. View all assets in his department.
2. View details of department assets.

#### 4.2 Preventive maintenance

Technican can:

1. View preventive maintenance work assigned to him.
2. View details of a specfic PM that is assigned to him.
3. Write a report about the work assigned to him.

<p align="center">
<br>
 <img src="./snapshots/pm_technican.png" width="75%" height="75%">
   <br>
<em>Fig. 4.2.1: PMs list </em>
<br>
</p>

<p align="center">
<br>
 <img src="./snapshots/complete_pm.png" width="75%" height="75%">
   <br>
<em>Fig. 4.2.2: Return report form </em>
<br>
</p>

#### 4.3 Work Orders

1. View work orders assigned to him.
2. View details of a specfic WO that is assigned to him.
3. Write a report about the work assigned to him.

<p align="center">
<br>
 <img src="./snapshots/wo_technican.png" width="75%" height="75%">
   <br>
<em>Fig. 4.3.1: WOs list </em>
<br>
</p>

<p align="center">
<br>
 <img src="./snapshots/complete_wo.png" width="75%" height="75%">
   <br>
<em>Fig. 4.3.2: Return report form </em>
<br>
</p>
