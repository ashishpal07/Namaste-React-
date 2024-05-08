# Namaste React 

## Episode 1 -
1. created html file and created element with javascript and appendchild to that element by javascript
2. React cn be added in project/html file by REACT CDN link in script tag
3. create element & create root from React and ReactDOM and render element inside root.
4. Segregate javscript code from HTML file to App.js file.
5. created nested HTML elements from React and render in root.
6. file ordering is impoertant in html file eg (link css, inside body after root element, add CDN link in script tag, add javascript file by using script tag)

## Episode 2 -
1. npm init -> will create package.json file.
2. ```npm i -D parcel``` :- there are 2 type of dependancies 1 is normal and other is dev dependancy which is only required in development environment and normal dependancy is needed on production as well.
after running ```npm i -D parcel``` this command we will see package-lock.json file 
    1. inside of package.json file dev dependacy will be added 
    2. created pachage-lock.json
    3. there is versions of library is start with (^) which meanse if minor update will come in future it will automatically updgrate to that version.
    eg. (^2.8.3) => (^2.8.4) - this is minor updgrade.
    4. there is versions of library is start with (~) which meanse if major update will come in future it will automatically updgrate to that version.
    eg. (~2.8.3) => (~3.0.1) - this is major updgrade (this is not good practice).
3. package-lock.json => It keeps track of exact version of library gets installed/in use.
4. package.json => It keeps track all dependacy install will minor/major (^/~) update sign.
5. After installing parcel we have run ```npx parcel index.html``` to execute our app.
6. Now, taking react from CDN link is not good practice so, now we will install them
    ```npm i React ReactDOM``

    ## parcel -
    1. HRM => Hot Reload Module
    2. Dev Build
    3. Local Server
    4. File Watcher Algorithm written in C++
