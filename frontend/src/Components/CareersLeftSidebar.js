import LeftSidebar from "./LeftSidebar";

const data = [
  { name: "Career Events & Programs", path: "/careers/career-events" },
  { name: "Career Advising and Networking", path: "/careers/career-advising" },
  { name: "Jobs", path: "/careers/jobs" },
  { name: "Career Resources", path: "/careers/career-resources" },
  { name: "Hire MIT Alumni", path: "/hire" },
  { name: "Online Alumni Directory", path: "/alumni-directory" },
];

const CareersLeftSidebar = () => {
  return <LeftSidebar data={data} title="Careers" titleLink="/careers" />;
};

export default CareersLeftSidebar;
