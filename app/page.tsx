import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Sparsh Palkhiwala
      </h1>
      <p className="mb-4">
        {`Hi there! I’m Sparsh, A passionate software developer and Machine Learning Enthusiast from India, a Graduate Student at ASU, pursuing a Masters in Computer Science, who is interested in Machine Learning and Data, and I’m an melomane who’s driven by a curiosity to understand and build the world around me.
I am interested in meeting new people and discussing new ideas. Feel free a time with me on my calendly: https://calendly.com/spalkhiw.
`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
