# Danielbl.com Portfolio Website (Revamp)

## Improvements
- Moved JavaScripted to TypeScript for static typing (error-free before runtime).
- Instead of the terrible way of creating blog pages manually like before, I'm now storing blog posts on Cloud Firestore. The mechanism to load blog posts is simple. I simply retrieve the metadata which includes a unique id from all the blog posts to create urls to blog pages. Each page loads the content by querying the Cloud Firestore collection using the id in its unique url.
- Used a cloud storage (Firebase Storage) for image files instead of keeping images in a directory inside the codebase.
- Instead of vanilla CSS, using Tailwind CSS for more robust styling and implemented Dark and Light mode
- Instead of CRA (Create React App), using Vite which has faster build times and simpler configurations.

## Making a blog post
For posting blogs to my own website, it felt awkward to have some authentication required POST API endpoint for me to add blogs. Since the Firebase Admin SDK exists, I simply have a local Python script shown below that loads the JSON private key file that prompts for things like title, content, etc. which I use to send data.

## Why blogs?
I think making blog style content is super useful. The inspiration comes from sites like Medium. So basically, I want a place to openly share my opinions and notes about useful tips and uses of technologies and skills in software engineering for my own keepsake and for others to benefit from!

```python
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from datetime import datetime
import bleach

# Use a service account to authenticate the script
cred = credentials.Certificate("/path/to/json/private/key/my-private-key.json")
firebase_admin.initialize_app(cred)

# Create a Firestore client
db = firestore.client()

# Apply sanitization

# Define the data to be added to the collection
contentString = input("Enter the blog content:\n\n")
cleanHTMLContent = bleach.clean(
	contentString,
	# Define acceptable tags and attributes
	tags=["p", "br", "img", "a"],
	attributes=["href", "src", "alt"]
)

durationNumber = int(input("\nEnter the duration:\n\n"))

titleString = input("\nEnter the title:\n\n")

data = {
	"author": "Daniel Lee",
	"content": cleanHTMLContent,
	"date": firestore.SERVER_TIMESTAMP,
	"duration": durationNumber,
	"title": titleString
}

# Add the data to a new document in the "users" collection
db.collection("blogs").add(data)

print("\nData added to Firestore successfully!")
```

## Technologies
- TypeScript
- React
    - React Router
- Firebase
    - Cloud Firestore
    - Cloud Storage
- Tailwind CSS
- Vite
