# Danielbl.com Portfolio Website (Revamp)

## Improvements
- Moved JavaScripted to TypeScript for static typing (error-free before runtime).
- Instead of the terrible way of creating blog pages manually like before, I'm now storing blog posts on Cloud Firestore. The mechanism to load blog posts is simple. I simply retrieve the metadata which includes a unique id from all the blog posts to create urls to blog pages. Each page loads the content by querying the Cloud Firestore collection using the id in its unique url.
- Used a cloud storage (Firebase Storage) for image files instead of keeping images in a directory inside the codebase.
- Instead of vanilla CSS, using Tailwind CSS for more robust styling and implemented Dark and Light mode
- Instead of CRA (Create React App), using Vite which has faster build times and simpler configurations.

Overall, I also wanted to use more modern / different technologies I haven't used before (TypeScript, Vite, Firebase, Tailwind CSS)

## Making a blog post
For posting blogs to my own website, it felt awkward to have some authentication required POST API endpoint for me to add blogs. Since the Firebase Admin SDK exists, I simply have a local Python script shown below that loads the JSON private key file that prompts for things like title, content, etc. which I use to send data.

```python
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from datetime import datetime
import bleach

cred = credentials.Certificate("/path/to/private-key.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

def main():
	try:
		contentString = input("Enter the blog content:\n\n")
		cleanHTMLContent = bleach.clean(
			contentString,
			tags=["p", "br", "img", "a"],
			attributes=["href", "src", "alt", "class"]
		)

		durationNumber = int(input("\nEnter the duration:\n\n"))

		titleString = input("\nEnter the title:\n\n")

		overviewString = input("\nEnter the overview:\n\n")

		data = {
			"author": "Daniel Lee",
			"content": cleanHTMLContent,
			"date": firestore.SERVER_TIMESTAMP,
			"duration": durationNumber,
			"title": titleString,
			"overview": overviewString,
		}

		db.collection("blogs").add(data)

		print("\nData added to Firestore successfully!")
	except KeyboardInterrupt:
		print("Script has been interrupted")

if __name__ == "__main__":
	main()
```

## Why blogs?
I think making blog style content is super useful. The inspiration comes from sites like Medium. So basically, I want a place to openly share my opinions and notes about useful tips and uses of technologies and skills in software engineering for my own keepsake and for others to benefit from!

## Technologies
- TypeScript
- React
    - React Router
- Firebase
    - Cloud Firestore
    - Cloud Storage
	- Firebase Hosting (deployment)
- Tailwind CSS
- Vite (build)

### Cloud services
I found that the firebase ecosystem is simple since it's basically a wrapper around Google Cloud Platform. Since all the services I need comes from Firebase (Firestore and Storage), I ended up going with Firebase Hosting since this portfolio site is backendless (no backend, makes only client-side API calls). Firebase Hosting is tailored towards static web apps like this and since all services are from Firebase, going with Firebase made things easy to manage since everything is on one platform.

### Deployment
After initializing a react project with Vite and developing the web application, run:

```zsh
npm run build
```

Vite will then build a "dist" folder for production. Since hosting is on Firebase, install the Firebase CLI and log in using the terminal. After that, you can initialize your firebase project at the root directory of your project.

```zsh
firebase init
```

In the configurations, make sure to point the public directory to the "dist" folder. Choose "yes" when configuring as a single-page-app since this is a React application. Choose "no" when prompted to overwrite the index.html file.

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