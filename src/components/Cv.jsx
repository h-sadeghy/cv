export default function About() {
  return (
    <main className="min-h-screen bg-base-100 py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold">Education</h1>

          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">Sept. 2010 – Aug. 2012</time>
                <div className="text-lg font-bold">
                  Associate Degree in Electrical and Electronic Engineering
                </div>
                Sadjad University of Technology, Mashhad, Iran
                <br />
                <span>GPA 3.8 / 4.0 </span>
                Graduated as the distinguished student among 108 applicants
                <br />
                <span className="font-bold">Supervisor</span>: Dr. Abbas
                Golmakani
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end md:mb-10">
                <time className="font-mono italic">
                  {" "}
                  Sept. 2012 – Aug. 2014
                </time>
                <div className="text-lg font-black">
                  B.Sc. in Electrical and Electronic Engineering
                </div>
                Montazeri Technical and Vocational University, Mashhad, Iran
                <br />
                GPA 3.9 / 4.0 Outstanding Graduated student among 60 applicants
                tuition waiver
                <br />
                <span className="font-bold">Thesis title: </span>
                Design of digital 9-Axis Wireless IMU system
                <br />
                <span className="font-bold">Supervisor</span>: Dr. Hasan Nabavi,
                Dr. Hossein Salarabedi
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic"> Sept. 2017 - Present</time>
                <div className="text-lg font-bold">
                  M.Sc. in Biomedical Engineering, Bioelectric
                </div>
                Imam Reza International University, Mashhad, Iran
                <br />
                GPA 3.8 / 4.0 Distinguished student, received full scholarship,
                tuition waiver
                <br />
                <span className="font-bold">Thesis title:</span>
                Implementation of head/neck postural correcting biofeedback
                system
                <br />
                <span className="font-bold">Supervisor</span>: Dr. Ghasem
                Sadeghi
              </div>
              <hr />
            </li>
          </ul>
        </header>

        {/* Content */}
        <div className="space-y-10">
          <Section title="Awards & Honors">
            <p className="text-base-content/80 leading-relaxed">
              Awarded For Top 25 Most Downloaded Academic Papers in MEECONF,
              Turkey, 2020
            </p>
            <p className="text-base-content/80 leading-relaxed">
              Selected as Active Researcher in Research and Technology Week
              2017, Imam Reza International University, Mashhad, Iran
            </p>
            <p className="text-base-content/80 leading-relaxed">
              Awarded in electronic design and robotic contest held in Tehran,
              2013 <br />
              <a
                href="http://knowledgeplus.ir/contest/1393"
                className="underline link link-info"
                title="Awarded in electronic design and robotic contest held in Tehran,"
              >
                http://knowledgeplus.ir/contest/1393
              </a>
            </p>
            <p className="text-base-content/80 leading-relaxed">
              Ranked 80th among 100,000 attendees, Associate to Bachelor’s
              Iranian National University Entrance Exam 2012
            </p>
          </Section>

          <Section
            title="Research Interests
"
          >
            <ul className="list-disc list-inside space-y-2 text-base-content/80">
              <li>Artificial Intelligence, Machine Learning</li>
              <li>Rehabilitation and Medical Robotics</li>
              <li>Image Processing, Computer Vision</li>
              <li>Embedded Systems, Internet of Things </li>
            </ul>
          </Section>

          <Section title="Books">
            <ul className="list-disc list-inside space-y-2 text-base-content/80">
              <li className="text-base-content/80 leading-relaxed">
                Bagheri, Iman. Alizadeh, Saeid. Top 30 Arduino Projects For
                Electrical and Electronics Hobbyist. (2021). In Preparation. .
              </li>
              <li className="text-base-content/80 leading-relaxed">
                Bagheri, Iman. Ups and Downs of Life from the Vision of a
                Polyglot Engineer. (2021). In Preparation.
              </li>
            </ul>
          </Section>
          <Section title="Patent">
            <ul className="list-disc list-inside space-y-2 text-base-content/80">
              <li className="text-base-content/80 leading-relaxed">
                I. Bagheri, S. Alizadeh, S. Salehzehi and E. Irankhah. Designing
                Rehabilitation Exoskeleton Robotic Hand Based on IMU feedback,
                IFIA I.R. IRAN Intellectual Property Organization, completed and
                submitted in 2020, Implemented and Finalized in 2021
              </li>
              <li className="text-base-content/80 leading-relaxed">
                I. Bagheri, B. Haddadian S. Alizadeh. Designing Advanced
                Rehabilitation Assistive Robotic Hand for Disabled Patients
                Activated by Movements of Head via Machine Learning Algorithms
                Implemented using Python, IFIA I.R. IRAN Intellectual Property
                Organization, Under Preparation 2022, pending to be registered
              </li>
            </ul>
          </Section>

          <Section title="Publications">
            <ul className="list-disc list-inside space-y-2 text-base-content/80">
              <li className="text-base-content/80 leading-relaxed">
                M. Vahedi, I. Bagheri, S. Alizadeh, Improving Landsat image
                classification utilizing deep learning framework and comparison
                with Maximum Likelihood method, Journal of Signal, Image and
                Video Processing, Springer Nature Switzerland, (2022), In Prep.
              </li>
              <li className="text-base-content/80 leading-relaxed">
                I. Bagheri, M. Bayat, E. Ebrahimi and S. Alizadeh, Analysis of
                EMG Signals on the Muscles of Water Polo Athletes using MLPNN,
                International Journal of Biology and Biomedical Engineering,
                NAUN, New Jersey, USA, (2022), Under Review.
              </li>
              <li>
                I. Bagheri, Z. Roudaki, M. Bayat and S. Alizadeh, Evaluation of
                Electromyogram Signals in Athletes using Elman's Recurrent CNN,
                ICMEES, Oslo, Norway, (2021).
              </li>
              <li>
                I. Bagheri, E. Irankhah. Early Diagnosis of Epilepsy based on
                EEG Signal Processing and MRI Image Processing. SCIINOV
                Conference. Oral Presentation. The Impact of Cognitive
                Impairment across Specialties. New Jersey, USA. (2020).
              </li>
              <li>
                I. Bagheri, S. Alizadeh, and E. Irankhah. Design and
                Implementation of Wireless IMU-based Posture Correcting
                Biofeedback System. 1st International Conference on Mechanical,
                Electrical and Computer Engineering. Istanbul. Turkey. (2020).
              </li>
              <li>
                S. Alizadeh, I. Bagheri, M. Bushara Jarma, M. Vahedi, and E.
                Irankhah. Lane Weaving and Vehicle Plate Detection based on CNN.
                1st International Conference on Mechanical, Electrical and
                Computer Engineering. Istanbul. Turkey. (2020).
              </li>
            </ul>
          </Section>

          <Section title="Selected Courses">
            <ul className="list-disc list-inside space-y-2 text-base-content/80">
              <li className="text-base-content/80 leading-relaxed">
                Biomedical Signal Processing
              </li>
              <li className="text-base-content/80 leading-relaxed">
                Image Processing
              </li>
              <li>Engineering Mathematics </li>
              <li>Electronic Circuits II </li>
              <li>Signals and Systems</li>
              <li>Computer Networks</li>
              <li>Microprocessors</li>
              <li>Digital Circuits</li>
            </ul>
          </Section>
          <Section
            title=" Academic Projects
"
          >
            <ul className="list-disc list-inside space-y-2 text-base-content/80 wrap-anywhere ">
              <li className="text-base-content/80 leading-relaxed">
                Implemented a biomedical system for posture correction and
                monitoring of head/neck
              </li>
              <li className="text-base-content/80 leading-relaxed">
                Electronic rehabilitation exoskeleton robotic hand based on IMU
                feedback
              </li>
              <li>
                Electronic rehabilitation exoskeleton robotic hand based on IMU
                feedback Designed configurable Real Time Clocking System based
                on PIC18F452
              </li>
              <li>
                Designed an embedded system based on CMPS10 module and NRF24L01
                Wireless module{" "}
              </li>
            </ul>
          </Section>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      {children}
    </section>
  );
}
