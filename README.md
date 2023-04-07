# Danielbl.com Portfolio Website (Revamp)

## Improvements
- Wrote application in TypeScript rather than JavaScript for static typing (error-free before runtime which I like so much better).
- Storing blogs on Firebase Firestore. Mechanism to retrieve blog posts is fairly simple. One collection in Firestore stores the metadata of blog posts while another collection stores the actual contents of a post. Each metadata document contains a reference field to its corresponding content document in the seperate collection. This way, caching is done for the metadata to search and view all the available posts while retrieving and rendering of the HTML, CSS and Images of a blog post is done seperately and I'm not querying for tons of HTML, Images, etc. at once.
- Storing images in Firebase Storage for image files.
- Instead of vanilla CSS, I chose to use Tailwind CSS instead. Especially for simple UIs, Tailwind CSS seems much cleaner with its utility classes and standards.
- Added night and light mode.
- Instead of CRA (Create React App), I chose Vite which has faster build times and simpler configurations.
- Utilized fuse.js for fuzzy searching for blog posts and added tags to blog posts where the design was inspired by Github topics.
- Using useQuery to auto cache query requests.

Overall, I also wanted to build a more modern static web app ("backendless") using different technologies I haven't used before (TypeScript, Vite, Firebase, Tailwind CSS)

## How I post a blog
Since I'm the only one making posts to my site, it felt overboard to make some post endpoint since that would also require some kind of authentication. Instead, I just have a local python script using the Firebase Admin SDK with a private key to send data to Firebase.

## Why blogs?
I think blog style content is easy to consume and fun. The inspiration comes from sites like Medium. Basically, I just wanted my own public space on the internet to share my opinions, notes and tips in the form of blog posts. So this is really for my own keepsake but also for anyone who just happens to stumble upon my website! 

## Technologies
- TypeScript
- React
- Firebase
    - Cloud Firestore
    - Cloud Storage
	- Firebase Hosting (deployment)
- Tailwind CSS
- Vite (build)
- useful npm packages
    - fuse.js (fuzzy search)
    - react-router-dom (client side routing)

### Cloud Services (Firebase)
I found that Firebase is pretty good for personal projects since it's easy to use as it's basically a wrapper around Google Cloud Platform. All the services I needed was in Firebase (Firestore, Storage), including Firebase hosting to deploy my production build which I found is also tailored to static web apps like this one which was enough for me to use it. Overall, having all my cloud services in one platform with the simple UI like Firebase is great.

### Deployment
After initializing a react project with Vite and developing the web application, run:

```zsh
npm run build
```

Vite will then build a "dist" folder for production. Since hosting is on Firebase, install the Firebase CLI and log in using the terminal. After that, you can initialize your firebase project at the root directory of your project.

```zsh
firebase init
```

In the configurations, first, you want to choose the option "Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub
Action deploy". Then make sure to point the public directory to the "dist" folder which is the production build. Choose "yes" when configuring as a single-page-app since this is a React application. Choose "no" when prompted to overwrite the index.html file since Vite generated one for you.

Finally, after the Firebase initialization is complete, run:

```zsh
firebase deploy --only hosting
```

to deploy the web application. Simple!

NOTE: Personally, in the configurations, I chose "no" to all the automated features since all it takes to push to production is simply rerunning:

```zsh
npm run build
firebase deploy --only hosting
```

This means keeping the push mechanism to Github and to Firebase separate which I'm fine with.
