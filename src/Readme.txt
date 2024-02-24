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
Whenever a state variable changes/update, react re-render the components.
    
     