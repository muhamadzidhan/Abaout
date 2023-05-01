export default function App() {
  return (
    <>
      <div
        id="hero"
        className="bg-red-200 min-h-[100vh] flex justify-center items-center"
        style={{ backgroundImage: 'url(/assets/bg.jpg)' }}>
        <div className="hero-text-box">
          <h1 className="text-[#636363] font-light">I'am<br />Muhammad Zidhan</h1>
          <div className="mt-4 md:flex md:space-x-3">
            <a href="#education" className="inline-block text-center w-full mb-1 md:mb-0 md:w-auto p-3 px-8 bg-[#e67e22] text-white rounded-full text-xl hover:opacity-80">My Story</a>
            <a href="#summary" className="inline-block text-center w-full mb-1 md:mb-0 md:w-auto p-3 px-8 border border-2 border-[#2980b9] text-[#2980b9] rounded-full text-xl hover:bg-[#e67e22] hover:text-white">My Projects</a>
            <a href="#career-summary" className="inline-block text-center w-full mb-1 md:mb-0 md:w-auto p-3 px-8 border border-2 border-[#2980b9] text-[#2980b9] rounded-full text-xl hover:bg-[#e67e22] hover:text-white">Career Summary</a>
          </div>
        </div>
      </div>
      <section className="bg-[#f7f7ff] text-[#636363] mb-8" id="summary">
        <div className="p-3">
          <h2 className="text-center">Summary</h2>
          <div className="flex justify-center">
            <div className="w-full md:w-3/4">
              <div className="md:flex">
                <div className="w-full md:w-3/12 md:mr-5">
                  <h3 className="text-center md:text-left">HOW TO REACH ME</h3>
                  <ul className="mt-3 text-xl text-center md:text-left">
                    <li className="break-words">Cell: +62 822-6875-2786</li>
                    <li className="break-words">muhammadzidhan595@gmail.com</li>
                    <li className="break-words">Cakung, East jakarta</li>
                    <li className="break-words">GitHub: muhamadzidhan</li>
                  </ul>
                </div>
                <div className="w-full md:w-9/12">
                  <p className="mt-4 md:mt-0 text-xl text-center md:text-left">Proven experience developing customer-focused websites using fullStack Java and JavaScript. Build products for web, and mobile app users over 3+ years. meeting the highest standards for web design, user experience, best practices, and speed. Designed and developed web applications across multiple APIs, third-party integrations, and databases.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3">
          <div className="flex justify-center">
            <div className="w-full md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                {/* card */}
                <div className="mb-8 md:mr-5">
                  <div className="p-3 border shadow-lg hover:shadow-xl transition-all rounded">
                    <div className="block">
                      <h3 className="text-center md:text-left">Company Project</h3>
                      <h4 className="text-sm text-center md:text-left">DEC 2022, SEP 2023</h4>
                    </div>
                    <h4 className="text-sm mt-4 text-center md:text-left">
                      Stack: React, React Native, Java Spring Boot, PostgreSQL, MongoDB, Kafka, Redis, ServerSentEvent, WebSocket, Git, Jenkins, Docker, Helm, Kubernetes, Rancher, AWS.
                    </h4>
                  </div>
                </div>
                {/* card */}
                <a href="https://brandshowcase-admin.web.app/" target="_blank">
                  <div className="mb-8 md:mr-5">
                    <div className="p-3 border shadow-lg hover:shadow-xl transition-all rounded">
                      <div className="block">
                        <h3 className="text-center md:text-left">Brand Show Case</h3>
                        <h4 className="text-sm text-center md:text-left">Maret 2023</h4>
                      </div>
                      <ul className="mt-4 text-center md:text-left">
                        <li>An intuitive mobile app to hone your logic and fill your spare time.</li>
                      </ul>
                      <h4 className="text-sm mt-4 text-center md:text-left">Stack: React Native, redux, Expo.</h4>
                      <h4>Login with account, email: testLogin@mail.com password: test12345</h4>
                    </div>
                  </div>
                </a>
                {/* card */}
                <a href="#" target="_blank">
                <div className="mb-8 md:mr-5">
                  <div className="p-3 border shadow-lg hover:shadow-xl transition-all rounded">
                    <div className="block">
                      <h3 className="text-center md:text-left">Product Mobile</h3>
                      <h4 className="text-sm text-center md:text-left">Maret 2023</h4>
                    </div>
                    <ul className="mt-4 text-center md:text-left">
                      <li>C-Budget is a mobile-friendly app solution for vision impaired friends to control their budget.</li>
                    </ul>
                    <h4 className="text-sm mt-4 text-center md:text-left">
                      Stack: React, React Native, Redux, Expo, Express & NodeJS, MongoDB, Mongoose, JWT, Jest, GCP (Vision API, Cloud Storage, Compute Engine).
                    </h4>
                  </div>
                </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f7f7ff] text-[#636363] mb-8" id="education">
        <div className="p-3">
          <h2 className="text-center">Education</h2>
          <div className="flex justify-center">
            <div className="w-full md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                {/* card */}
                <a href="https://www.hacktiv8.com/" target="_blank">
                  <div className="mb-8 md:mr-5">
                    <div className="p-3">
                      <div className="block">
                        <h3 className="text-center md:text-left">HACKTIV8 INDONESIA</h3>
                        <h4 className="text-sm text-center md:text-left">AUG 2020 TO NOV 2020</h4>
                      </div>
                      <ul className="mt-4 text-center md:text-left">
                        <li>Enrolled since Aug 2020 to Nov 2020.</li>
                        <li>Learn full-stack JavaScript web development.</li>
                      </ul>
                      <h4 className="text-sm mt-4 text-center md:text-left">Immersive full stack JavaScript.</h4>
                    </div>
                  </div>
                </a>
                {/* card */}
                <a href="http://www.sman4pku.sch.id/" target="_blank">
                  <div className="mb-8 md:mr-5">
                    <div className="p-3">
                      <div className="block">
                        <h3 className="text-center md:text-left">SMAN 4 PEKANBARU</h3>
                        <h4 className="text-sm text-center md:text-left">2016 TO 2019</h4>
                      </div>
                      {/* <ul className="mt-4 text-center md:text-left">
                        <li>Diploma, Computer Engineering GPA - 3.05.</li>
                      </ul> */}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f7f7ff] text-[#636363] mb-8" id="career-summary">
        <div className="p-3">
          <h2 className="text-center">Career Summary</h2>
          <div className="flex justify-center">
            <div className="w-full md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                {/* card */}
                <div className="mb-8 md:mr-5">
                  <div className="p-3">
                    <div className="block">
                      <h3 className="text-center md:text-left break-words">Software Engineer</h3>
                      <h4 className="text-sm text-center md:text-left">DEC 2022 TO FEB 2023</h4>
                      <h4 className="text-sm text-center md:text-left">PT. Trix Studio Games</h4>
                    </div>
                    <ul className="mt-4 text-center md:text-left">
                      <li>Helping senior developers work on several web projects on the Frontend and Backend using Javascript</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f7f7ff] text-[#636363] mb-8" id="professional-skills">
        <div className="p-3">
          <h2 className="text-center">Professional Skills</h2>
          <div className="flex justify-center">
            <div className="w-full md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                {/* card */}
                <div className="mb-8 md:mr-5">
                  <div className="p-3">
                    <div className="block">
                      <h3 className="text-center md:text-left break-words">Coding Languages</h3>
                    </div>
                    <ul className="mt-4 text-center md:text-left">
                      <li>JavaScript less than 1 year experience, Java less than 1 year experience.</li>
                    </ul>
                    <h4 className="text-sm mt-4 text-center md:text-left">Java, JavaScript.</h4>
                  </div>
                </div>
                {/* card */}
                <div className="mb-8 md:mr-5">
                  <div className="p-3">
                    <div className="block">
                      <h3 className="text-center md:text-left break-words">Tech Stacks</h3>
                    </div>
                    <ul className="mt-4 text-center md:text-left">
                      <li>I have developed many applications with many frameworks, libraries, and using many systems.</li>
                    </ul>
                    <h4 className="text-sm mt-4 text-center md:text-left">React, React Native, Vue, NodeJS, Express, Sequelize, GraphQL, Apollo Server, Socket.io, Java Spring Boot, Kafka, Redis, MongoDB, PostgreSQL, Intellij, Maven, ServerSentEvent, WebSocket, Git, Jenkins, Docker, Helm, Kubernetes, Rancher, MVC, Stream, SPA, RestAPI, Microservices, DevOps.</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}