import JobCircularCard from "../../../components/JobCircularCard/JobCircularCard";

const JobCircular = () => {
  const circulars = [
    {
      id: 1,
      title: "Job Circular 1",
      description: "Exciting opportunity to join our team. Apply now!",
    },
    {
      id: 2,
      title: "Job Circular 2",
      description: "Looking for talented individuals to fill this role.",
    },
    {
      id: 3,
      title: "Job Circular 3",
      description: "Join us in making a difference. Apply today!",
    },
  ];
  return (
    <div className="my-20">
      <h1 className="uppercase font-yeseva font-bold text-xl md:text-3xl my-5 text-center">
        We are currently looking for
      </h1>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 p-5">
        {circulars.map((item) => (
          <JobCircularCard
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default JobCircular;
