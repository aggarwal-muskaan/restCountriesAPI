# Rest Countries ✈
The project is build using [REST API](https://restcountries.eu/ "rest-countries-api")


## How to Run the Web-App   
This command clones the repo and installs all dependencies required to run the application.   
Also, it will generate ```package-lock.json```.

```bash
git clone https://github.com/aggarwal-muskaan/restCountriesAPI.git/
cd [foldername]
npm install && npm start
```

## API endpoints
 There are total 3 endpoints: 
1. pulls data of all countries
2. pulls data matches with country name
3. pulls data based on Region.   

 The global state is initialized with the data of all countries when the app runs for the first time.   
 The country is searched in that instance if user searched from the URL.
 
 ## ✨Layout✨

<table>
  <tr>
    <td>desktop-design-home-light</td>
     <td>desktop-design-detail-dark</td>
     <td>mobile-design-detail-light</td>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/54470292/120788224-de707e00-c54d-11eb-8646-6bb7bf0b69e2.jpg" ></td>
    <td><img src="https://user-images.githubusercontent.com/54470292/120788242-e4fef580-c54d-11eb-9a17-d03efb307453.jpg" ></td>
    <td><img src="https://user-images.githubusercontent.com/54470292/120788271-ecbe9a00-c54d-11eb-8bbf-16c682976f7d.jpg" ></td>
  </tr>
 </table>
 
 [Click here](https://explorecountries.netlify.app/ "Demo") to see app in action.
 
 ## Features❤
 * See all countries on the homepage
 * Search for a country using an input field
 * Filter countries by region
 * Click on a country to see more detailed information
 * Click through to the border countries on the detail page
 * Toggle the color scheme between light and dark mode

### Learnings
1. [PropTypes](https://www.npmjs.com/package/prop-types) : for typechecking
2. [Styled Components](https://styled-components.com/docs) : for styling (you will definitely fall in love)
3. [Debouncing](https://www.npmjs.com/package/use-lodash-debounce) : hits API after a gap of given time & not call API after every change made by user
4. [Lazy Loading](https://reactjs.org/docs/code-splitting.html) : code-splitting with dynamic imports (improve performance of apps using large third-party libraries)
5. [Unit Testing](https://jestjs.io/docs/getting-started) : makes debugging easy if we write more tests before code.
(P.S- I've not used TDD)

### Whats's next?
==> Learn Redux <==

### 🙌Built with styled-components & React.js🙌
