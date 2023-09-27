import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "DriveFlux",
    description:
      `The website is about lending cars and motorcycles in Malaysia. The basic idea behind the website was "No need to buy a car when you can subscribe it". I have started working on this project in 2018. The client came with this basic idea, and I have made it into reality. The designs were provided by the client, and I did the rest from database design, development, and deployment to AWS. We used Node, React and mongodb as a tech stack and integrated third party services like Stripe for payment and Mailjet for mail integration. I have developed the MVP in 6 months and now People in Malaysia are actively using these services.`,
    image: "/projects/driveflux/main.jpg",
    link: "https://driveflux.com/",
  },
  {
    name: "Drone Blocks",
    description: `Well, droneblocks.io was a quite interesting project I have done. The site is about teaching kids copmuter science with Tello drones. Kids can actually develop a program that controls Tello drones using drag and drop editor. My main task was to implement that drag and drop editor. We implemented the editor using Google's blockly library. The job involed customizing the editor for Drones and finally turning the generated code blocks into something that Tello drone can understand. You can check how it works from here.  https://dev.droneblocks.io/ It was quite interesting and challening project. The most challening part was exception handling. And also there were some problems with Blockly library itself, so we had to deal with that as well.`,
    image: "/projects/droneblocks/main.jpg",
    link: "https://droneblocks.io/",
  },
  {
    name: "Lyft",
    description:
      `The website is about booking car for personal or business purpose. Any people can book a suitable car and any drivers also apply for any cars. The company just offers cars. Then, drivers and riders are free people. We used Node, React, Next.js and mongodb as a tech stack and integrated third party services like Stripe for payment and Mailjet for mail integration.`,
    image: "/projects/lyft/main.jpg",
    link: "https://www.lyft.com/",
  },
  {
    name: "Vrbo",
    description:
      `Vrbo is a global vacation rental community with more than 2 million unique properties that seeks to connect people with the people and places they love. My main task was to develop a adding property. People could not only book a house, but also advertise their properties. I used Node, React and mongodb as a tech stack and integrated third party services like Stripe for payment and Mailjet for mail integration`,
    image: "/projects/vrbo/main.jpg",
    link: "https://www.vrbo.com/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
