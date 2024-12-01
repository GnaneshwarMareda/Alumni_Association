import LeftSidebar from "./LeftSidebar";

const data = [
  { name: "Career Events & Programs", path: "/careers/career-events" },
  { name: "Career Advising and Networking", path: "/careers/career-advising" },
  { name: "Jobs", path: "/careers/jobs" },
  { name: "Career Resources", path: "/careers/career-resources" },
  { name: "Online Alumni Directory", path: "/alumni-directory" },
];

const CareersLeftSidebar = () => {
  return (
    <div className="relative">
      <LeftSidebar data={data} title="Careers" titleLink="/careers" />
      <div className="absolute top-0 right-0 h-full border-r-2 border-gray-300" />
    </div>
  );
};

export default CareersLeftSidebar;
