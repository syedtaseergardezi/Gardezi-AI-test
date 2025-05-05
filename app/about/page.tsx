import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: 'About | Gardezi.ai',
  description: 'Learn about Gardezi.ai, our mission, team, and expertise in AI and software development.',
};

const team = [
  {
    name: 'Dr. Aisha Gardezi',
    role: 'Founder & CEO',
    bio: 'AI researcher with over 15 years of experience in machine learning and natural language processing.',
    image: 'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Zain Ahmad',
    role: 'CTO',
    bio: 'Software architect with expertise in building scalable, cloud-native applications.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Maria Sanchez',
    role: 'Head of AI Research',
    bio: 'Specialist in deep learning and computer vision with a background in cognitive science.',
    image: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'James Wilson',
    role: 'Lead Software Engineer',
    bio: 'Full-stack developer with expertise in React, Node.js, and cloud infrastructure.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const technologies = [
  { category: 'AI & Machine Learning', skills: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Hugging Face', 'OpenAI', 'Computer Vision', 'NLP'] },
  { category: 'Web Development', skills: ['React', 'Next.js', 'Angular', 'Node.js', 'Django', 'GraphQL', 'REST APIs'] },
  { category: 'Mobile Development', skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'iOS', 'Android'] },
  { category: 'Cloud & DevOps', skills: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'] },
  { category: 'Data Engineering', skills: ['Spark', 'Kafka', 'Airflow', 'Snowflake', 'BigQuery', 'ETL', 'Data Lakes'] },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                About Gardezi.ai
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2020, Gardezi.ai is a leading AI and software development company dedicated to helping businesses harness the power of artificial intelligence and cutting-edge software solutions.
              </p>
              <p className="text-lg text-muted-foreground">
                Our mission is to democratize access to advanced technology by building practical, scalable AI solutions that solve real business problems and create measurable value.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 mix-blend-multiply z-10" />
              <Image
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Gardezi.ai Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide our work and shape our culture."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v2m0 16v2M4 12H2m20 0h-2M6.34 6.34l1.42 1.42m8.48 8.48l1.42 1.42M6.34 17.66l1.42-1.42m8.48-8.48l1.42-1.42M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously explore new technologies and approaches to deliver cutting-edge solutions that drive business transformation.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We are committed to delivering the highest quality in everything we do, from code to client communication.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Empathy</h3>
              <p className="text-muted-foreground">
                We deeply understand our clients' challenges and design solutions that address their specific needs and context.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Our Team"
            subtitle="Meet the experts behind Gardezi.ai's innovative solutions."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-card border rounded-lg overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Our Expertise"
            subtitle="Technologies and domains we specialize in."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech) => (
              <div key={tech.category} className="bg-card border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}