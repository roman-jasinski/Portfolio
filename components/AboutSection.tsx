import React from "react"

const skills = [
  { skill: "Programming Languages (C/C++, Java, PHP, JS, TS, Python, Golang)" },
  { skill: "Frontend Development (HTML, CSS, jQuery, tailwindCSS, React, Angular, Next)" },
  { skill: "Backend Development (Spring Boot, Laravel CodeIgniter Symfony, Express Nest, Django, Golang)" },
  { skill: "Database Management (SQL(MySQL PostgreSQL Oracle), NoSQL(MongoDB Redis))" },
  { skill: "Testing Frameworks (Jest, Cypress, Mocha, JUnit, PyUnit, Enzyme)" },
  { skill: "DevOps Engineering (AWS, Azure, Docker, Kubernets, Jenkins, CircleCI, Ansible,Terraform)" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Roman is an expert full-stack web engineer, architect, and consultant with over two decades of experience and a degree in computer science.  
            </p>
            <br />
            <p>
              He has led, consulted, and supported teams in startups, manufacturing, defense, film, and healthcare.
            </p>
            <br />
            <p>
              Building MVPs and startups, he has experience working on the front end, back end, and DevOps.
            </p>
            <br />
            <p>
              Roman freelances to broaden his knowledge and participation in the future we are creating through technology.
            </p>
            <br />
            <p>
              I graduated from California State University, Northridge in 2019
              with a BS in Computer Engineering and have been working in the
              field ever since.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
