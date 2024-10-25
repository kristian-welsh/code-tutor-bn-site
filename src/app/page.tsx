import Envelope from "./components/envelope";

const beginnerCourseEnvelope = {
  title: "Beginner Course",
  image: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/7833/live/0d0e8fb0-8d21-11ef-8936-1185f9e7d044.jpg",
  description: "project: p5.js, various simple algorithms, few crunchy sorting algorithms curriculum: language choice, sturctured programming, functions, what is an algorithm, comments & colaberation after course: students should succeed at beginner programming competency tests, potential to land internship",
}

const intermediateCourseEnvelope = {
  title: "Intermediate Course",
  image: "https://as2.ftcdn.net/v2/jpg/04/52/87/89/1000_F_452878962_QK77iAQsEqe2UOCAakOKO7DCH5IgVMeU.jpg",
  description: "project: large multifaceted application. curriculum: error handling, dependency management, how to use documentation, refactoring, HTTP & web APIs, software design. after course: students should be able to fill a CV with profesional projects, potential to land junior position",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1>top nav bar</h1>
      </div>

      <div className="flex-1 min-h-full w-4/5 bg-black">
        <Envelope envelopeprops={beginnerCourseEnvelope}/>
        <Envelope envelopeprops={intermediateCourseEnvelope}/>
      </div>
    </main>
  );
}
