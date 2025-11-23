# TechRoadmap official website
On this website you can search for your favorite technology and find information about its versions, added features and the latest updates.

## Features
 - **Technology endpoints**:
    - Get all technologies: http://localhost:3000/api/v0/technology
    - Get technology by specified 'id': http://localhost:3000/api/v0/technology?id=id
    - Also you can obtain technologies with dependencies by adding *dependecies* flag:
        - All technologies with dependencies http://localhost:3000/api/v0/technology&dependencies=true
        - One technology ('id') with dependencies http://localhost:3000/api/v0/technology?id=id&dependencies=true
 - **Technology version endpoints**:
    - Get all technology versions: http://localhost:3000/api/v0/technology_version
    - Get technology version by specified 'id': http://localhost:3000/api/v0/technology_version?id=id
    - Get technology version by specified 'id_technology': http://localhost:3000/api/v0/technology_version?id_technology=id_technology

 ## Get started
 ### Prerequisite
 Mandatory:
 - pnpm: 
     Windows (Powershell) - [More details here](https://pnpm.io/installation):
     `Invoke-WebRequest https://get.pnpm.io/install.ps1 -UseBasicParsing | Invoke-Expression`
 
 > Recommended *pnpm* but you can use *npm* instead
 ### Install
 1. Clone repository:
 `git clone https://github.com/moslisnas/techroadmap-api.git`

 2.  We need to install all the project dependencies:
 `pnpm install`

 3. After that you can run your application with:
 `pnpm run dev`

 ## Related projects
 - [Website](https://github.com/moslisnas/techroadmap.git)
 - [Database info](https://github.com/moslisnas/techroadmap-database.git)

 ## Technologies used
- TypeScript
- Node
- Express
- Pnpm
- MySQL