import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Sparsh Palkhiwala
      </h1>
      <p className="mb-4">
        Hi there! I'm Sparsh, a passionate software developer and Machine Learning enthusiast from India. 
        I'm currently a Graduate Student at ASU, pursuing a Masters in Computer Science with a focus on Machine Learning and Data.
        As a melomane, I'm driven by curiosity to understand and build the world around me.
        {" "}
        I am interested in meeting new people and discussing new ideas.
        {" "}
        <a href="https://calendly.com/spalkhiw" className="text-blue-500 hover:text-blue-600">
          Feel free to book a time with me
        </a>
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
