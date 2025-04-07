This is the frontend File
1) Installed angular CLI and created a project named medicine-search-frontend. Then created a medicine search component using ng generate component medicine-search on
the command line prompt.
2) Created a basic HTML template code for medicine search component or interface.
The file is src/app/medicine-search/medicine-search.component.html.
Here in the code user types in the input field. searchMedicines() is triggered on each keystroke.
then during API call isLoading = true shows "Loading...". After response results populate medicines array and display.
If no results thenshows "No medicines found".
3) Then comes the typescript component under the file "src/app/medicine-search/medicine-search.component.ts".   
i) Here first importing the dependecies and also RxJS Operators like debounceTime, distinctUntilChanged, switchMap.
ii) then a constructor is created, constructor (private http: HttpClient) {} which injects the HttpClient service for making HTTP requests.
iii) Later debounceTime(300) is used which waits 300ms after the user stops typing before emitting the search term.
     distinctUntilChanged() only emits if the current search term is different from the previous one.
     switchMap(term => { }) cancels any pending HTTP requests if a new search term arrives. Sets isLoading = true to show a loading indicator.
     .subscribe() Updates medicines with results and hides loading.
4) Then the CSS file under src/app/medicine-search/medicine-search.component.css.This CSS file adds some basic design to the search
    container, search input field, Results container etc.
5) Updating App configuration under file src/app/app.config.ts. 
   This code sets up the foundational configuration for an Angular application, specifying: i) Routing configuration ii) HTTP client availability  iii) Template-driven forms support
6) At last run the angular application by typing ng serve under the frontend directory inside the command prompt terminal

To test the application :
Start Node.js backend (node server.js)

Start Angular frontend (ng serve)

Open browser to http://localhost:4200 

Type letters in search box to see real-time results. 


Thankyou
   
