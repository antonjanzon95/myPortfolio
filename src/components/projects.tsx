const Projects = () => {
  return (
    <div className="container p-6 mx-auto relative">
      <div className="flex justify-center">
        <h2 className="text-center myHeadingsSlate">Projects</h2>
      </div>
      <div className="">
        <a
          href=""
          className="mt-6 block max-w-sm p-6 bg-slate-100 border border-gray-200 rounded-lg shadow hover:bg-slate-200 hover:scale-105 transition-all duration-300"
        >
          <img src="" alt="" />
          <h3 className="mb-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Donut Webshop
          </h3>
          <p className="font-normal text-slate-700">
            A simple webshop with list of products, cart & payment form.
          </p>
        </a>
      </div>
    </div>
  );
};

export default Projects;
