/* Food Ordering App
+ Layout Container
  - Header
    - Logo
    - Nav-items
  - Body 
    - search
    - restrarunt Container
       - resto Img
       - resto Name
       - cusines
       - delivery Time
       - ratings 
  - Footer
  */

  Two Types of Export/Import
   - Default Export/Import 
     export Default ComponentName;
     import ComponentName from 'path'

   - Named Export/Import(When do we export multiple things use Named export/import)
     export const CDN_URL = "";
     export const LOGO_URL = "";

     Import {CDN_URL} from 'path'
     Import {LOGO_URL} from 'path'
   
   - Can I use default & named export together?
     yes, we can use.

# Hooks: This is the normal javascript utility function
# UseState() - This is the super powerful state variable
  Whenever a state variable changes/update using the SetVariable function, react re-render the components.

#useEffect()
 - useEffect hooks does have 2 arguments(callback function and dependency)

Callback function will call after initilizing the componenets. If we want to call the API after component get's render, we can make the API call with help of useEffect
then assign the value to the useState variable 'SetVariable'. So that it will re-render the component once API gived the response.

#optional chaining:
 - if the object reference is null or undefined, instead of causing an error this expression(?.) short-circut the with return value of undefined.

#Shimmer UI:
 - shimmer UI doesn't contians the original contents, but instead it will mimics the original shape and layout appear on the page.
    
     