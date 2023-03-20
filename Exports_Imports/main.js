// Exports & Imports: ES6 Modules:
    // import <thing> from '<file>'
    // export <thing>
    // export default <thing>

// Rationale:
    // Enables developers to split their Javascript code into multiple files or "modules".
    // To support both sync & async module loading
    // Are not dynamic, which allows static analysis (ie: tools can examine your code w/o running it);

// Below is Example => Basically sets up the phone line between two files/modules.

// File A:
    // const foo = () => {...}
    // export default foo

// File B:
    // import foo from 'File A'

// **Can only be 1 x export default** - allows import on other side with only using the default name
// If have multiple exports from 1 x file, have to deconstruct on the other side.
    // File A:
        // export const foo = () => {...};
        // export const bar = 'bar';

    // File B:
        // import {foo, bar} from 'File A';

// Combining NAMED & DEFAULT Exports: IS EXTREMELY IMPORTANT WHEN WE START WITH REACT...
    // File A:
        // const foo = () => {...};
        // const bar = 'bar';
        // const baz = 42

        // export foo
        // export bar
        // export default baz

    // File B:
        // import {foo, bar}, baz from 'File A' - baz cannot be inside sqiggles because it is a 'default' export.


// Using Modules on the Front-End:
    // Import/Export has support in the latest versions of some browsers
        // Not quite safe yet to depend on it without a build tool like Webpack - helps lockdown & secure files.
        // Webpack is a "JS Module Bundler"
            // Takes in modules with dependencies & generates statis assets representing those modules
            // Compiles your code into something a browser understands

// Webpack CONFIG:
    // Webpack will take a special config file where you can specify:
        // Entry: 'Whats the 'source' module file? The file that imports all the others? The 'starting point' of your code?
        // Output: After webpack bundles it all up, where should the result go?

// DEMO Code:
import myDefaultFunc, { myFunc, myOtherFunc } from "./helpers";

myDefaultFunc();
myFunc();
myOtherFunc();
    