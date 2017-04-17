# Notes for Contributors

### /sample/lib link
Angular CLI does static analysis on files to satisfy AOT constraints.
For this reason directories above /sample may not be referenced by .ts files.
To solve this, the 'lib' directory under /sample is a symbolic link bringing
/src under the /sample directory to allow Angular CLI to reference these files.

"..errors like Error encountered resolving symbol values statically mean that there has been some problem in statically analyzing your app.
 The CLI always runs statical analysis on code to ensure it will run when compiled with AOT. This may cause a lot of static analysis errors to surface when importing your project into the CLI, or upgrading for older versions where we didn't run this kind of analysis."
Ref: https://github.com/angular/angular-cli/issues/5428

