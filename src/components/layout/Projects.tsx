import ProjectItem from "../ProjectStructure/ProjectItem";

export default function Projects() {
  return (
    <div className={`text-center max-w-[1400px] mx-auto my-32`}>
      <h1 className="text-3xl font-cocogoose tracking-widest mb-10">
        Here is some of my worked or working project
      </h1>
      <ProjectItem />
    </div>
  );
}
