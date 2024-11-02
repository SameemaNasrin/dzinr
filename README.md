# Dzinr

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## gh-page deployment process
Build project through angular cli : ng build --base-href "https://SameemaNasrin.github.io/dzinr/" --configuration=production


Change folder in CLI : cd dist/dzinr
Initialize new git in dist/dzinr folder: git init
                                         git remote add origin https://github.com/SameemaNasrin/dzinr.git
Commit the generated files and folder to new branch : git checkout -b <new_branch_name>
                                                      git add .
                                                      git commit -m '<commit_message>'
                                                      git push --set-upstream origin <new_branch_name>
Deploy <new_branch_name> (root) from github>settings>Pages : and we are LIVE!!!
                                              


                                         

