import Card from "../components/Card"

const About = () => {
  return <section className ="c-space section-spacing">
    <h2 className="text-heading">About Me</h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-6 
    md:auto-rows-[18rem] mt-12"
    >
      {/* Grid 1 */}
      <div className="flex items-end grid-default-color grid-1">
        <img src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-
            [1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-
            [2.5]"/>
            <div className="z-10">
              <p className="headtext"> Hi! I'm James Latanna</p>
              <p className="subtext">
                Over the past 2 and a half years I've developed
                my backend, frontend, and machine learning skills
                to create dynamical projects  
              </p>
            </div>
            <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo-950"></div>
      </div>
      {/* grid 2 */}
      <div className="grid-reverse-color grid-2">
      <div className="flex items-center justify-center w-full h-full">
        <p className="flex items-end text-5xl text-[#FFFCEF]"> first we CODE <br/>then we CRAFT</p>
        <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} 
        text="Grasp" />
        <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} 
        text="Principles" />
        <Card style={{ rotate: "90deg", bottom: "30%", left: "70%" }} 
        text="Testing" />
        <Card style={{ rotate: "-45deg", top: "55%", left: "0%" }} 
        text="DSA" />
        <Card style={{ rotate: "20deg", top: "10%", left: "38%" }} 
        text="Cyber" />
        <Card style={{ rotate: "30deg", top: "70%", left: "70%" }} 
        image="assets/logos/cplusplus.svg" />
        <Card style={{ rotate: "-45deg", top: "70%", left: "25%" }} 
        image="assets/logos/github.svg" />
        <Card style={{ rotate: "-45deg", top: "5%", left: "10%" }} 
        image="assets/logos/pythonlogo.png" />
      </div>
      </div>
      {/* Grid 3 */}
      <div className="grid-black-color grid-3">

      </div>
      {/* Grid 4 */}
      <div className="grid-special-color grid-4">

      </div>
      {/* Grid 5 */}
      <div className="grid-default-color grid-5">

      </div>
    </div>
  </section>
}

export default About