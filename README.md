an npm package to create transition effects when clicked on links in nextjs. It used next/link under the hood. So, the next time you have to use 'link' from 'next/link' in nextjs, prefer 'next-transition-link' instead, to add custom animations.

# Installation

```
npm install next-link-transition
```

# Usage

In nextjs **globals.css**, add the following code:

```
body{
      transition-property: opacity, background, filter;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}

.page-transition {
  opacity: 0;
  background: blue;
  filter: blur(12px)
}
```

You can customize the above code to get a custom transition effect.
That is it. Now, just use LinkTransition form next-link-transition, wherever you need to use a link.

Example:

```
import { LinkTransition } from "next-link-transition";


<LinkTransition
    href="/"
    className="hover:bg-blue-500 hover:text-white p-1 rounded-lg transition-all duration-500 ease-in-out"
    duration=600
>
    Home
</LinkTransition>
```

For now, transition effect will be shown in entire body, irrespective of where you use the LinkTransition.
Hope you get more control in the upcoming version!
