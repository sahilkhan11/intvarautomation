export type TeamMember = {
  id: string;
  slug: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedinUrl?: string;
  twitterUrl?: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "sahil-khan",
    slug: "sahil-khan",
    name: "Sahil Khan",
    role: "AI Engineer & CEO",
    bio: "Sahil leads Intvar Automation with a focus on implementing robust AI architectures. With extensive experience in artificial intelligence and machine learning, he architects systems that solve real-world problems for SMBs across Rajasthan, transforming manual processes into seamless automated pipelines.",
    imageUrl: "/images/team/sahil.jpeg",
  },
  {
    id: "arman-khan",
    slug: "arman-khan",
    name: "Arman Khan",
    role: "Chief Full Stack Developer & Development Manager",
    bio: "Arman oversees the technical execution and project delivery at Intvar. As a Chief Full Stack Developer, he brings deep expertise in modern web and app technologies, ensuring that every solution is built on a scalable, secure, and highly performant foundation.",
    imageUrl: "/images/team/arman-khan.jpeg",
  },
  {
    id: "gaurav",
    slug: "gaurav",
    name: "Gaurav",
    role: "Frontend Engineer",
    bio: "Gaurav specializes in creating intuitive, fast, and beautiful user interfaces. He ensures that the powerful automation systems we build are easily accessible to end-users through responsive, pixel-perfect frontend experiences.",
    imageUrl: "/images/team/silhouette.jpg",
  },
  {
    id: "aarti",
    slug: "aarti",
    name: "Aarti",
    role: "Project Manager",
    bio: "Aarti orchestrates our client projects from conception to launch. She acts as the bridge between our technical team and our clients, ensuring timelines are met, requirements are accurately executed, and communication is transparent throughout the development lifecycle.",
    imageUrl: "/images/team/silhouette-female.jpg",
  }
];
