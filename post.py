import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from datetime import datetime
import bleach
import uuid

cred = credentials.Certificate("/path/to/private/key")
firebase_admin.initialize_app(cred)

db = firestore.client()

options = ["blogs", "test"]


def generate_document_id():
    return str(uuid.uuid4())


def create_ref_document(collection_name):
    content = input("Enter the blog content:\n\n")
    clean_HTML_content = bleach.clean(
        content,
        tags=["p", "br", "img", "a", "code"],
        attributes=["href", "src", "alt", "class"]
    )
    duration_number = int(input("\nEnter the duration:\n\n"))
    title = input("\nEnter the title:\n\n")
    date = firestore.SERVER_TIMESTAMP
    data = {
        "author": "Daniel Lee",
        "content": clean_HTML_content,
        "date": date,
        "duration": duration_number,
        "title": title,
    }
    generated_document_id = generate_document_id()
    db.collection(collection_name).document(generated_document_id).set(data)
    print(
        f"\nDocument {generated_document_id} has been added to collection {collection_name} successfully!")
    return generated_document_id, date, title


def create_document(collection_name, collection_ref_name, document_ref_id, date, title):
    overview_string = input("\nEnter the overview\n\n")
    topics = ["oop", "dev-tools", "systems-design", "data-structures-algorithms", "java", "advanced-topics", "back-end",
              "front-end", "frameworks", "deployment", "interpersonal", "interviews", "testing", "cloud-infrastructure", "quality-assurance",
              "career", "go", "python", "javascript", "typescript", "miscellaneous"]
    print("\nChoose multiple topics:\n")
    print(topics)
    selected_topics = input(
        "Enter the indices of the selected strings (comma-separated): ").strip().split(",")
    selected_topics = list(map(int, selected_topics))
    output_array = [topics[index] for index in selected_topics]
    print("\nYou've chosen the topics:", output_array)
    doc_ref = db.collection(collection_ref_name).document(document_ref_id)
    data = {
        "date": date,
        "overview": overview_string,
        "ref": doc_ref,
        "tags": selected_topics,
        "title": title}
    db.collection(collection_name).add(data)
    print(
        f"\nDocument with auto-generated ID has been added to collection {collection_name} successfully!")


def main():
    try:
        collection = ""
        input_message = "Pick an option:\n"

        for index, item in enumerate(options):
            input_message += f'{index+1} {item}\n'

        input_message += 'Your choice: '

        while collection.lower() not in options:
            collection = input(input_message)

        collection_ref = ""
        if (collection == options[0]):
            collection_ref = "blogRef"
        else:
            collection_ref = "testRef"

        document_ref_id, date, title = create_ref_document(collection_ref)
        create_document(collection, collection_ref,
                        document_ref_id, date, title)

    except KeyboardInterrupt:
        print("\n\nScript has been interrupted")


if __name__ == "__main__":
    main()
