

// function Frame15() {
//   return (
//     <div className="h-[331.041px] relative shrink-0 w-[188.019px]">
//       <div className="absolute inset-[-0.28%_-0.21%]">
//         <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 188.822 332.894">
//           <g id="Frame 51">
//             <path d={svgPaths.p1f539480} fill="var(--fill-0, #ECECEC)" id="Line 13" stroke="var(--stroke-0, black)" strokeWidth="0.803498" />
//             <path d={svgPaths.p38fe7d00} fill="var(--fill-0, #ECECEC)" id="Line 12" stroke="var(--stroke-0, black)" strokeWidth="0.803498" />
//             <path d={svgPaths.p35f57780} fill="var(--fill-0, #ECECEC)" id="Line 11" stroke="var(--stroke-0, black)" strokeWidth="0.803498" />
//           </g>
//         </svg>
//       </div>
//     </div>
//   );
// }

// function Frame14() {
//   return (
//     <div className="h-[331.041px] relative shrink-0 w-[240.246px]">
//       <div className="absolute inset-[-0.28%_-0.17%]">
//         <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 241.049 332.894">
//           <g id="Frame 50">
//             <path d={svgPaths.pc222580} fill="var(--fill-0, #ECECEC)" id="Line 13" stroke="var(--stroke-0, black)" strokeWidth="0.803498" />
//             <path d={svgPaths.p26988900} fill="var(--fill-0, #ECECEC)" id="Line 12" stroke="var(--stroke-0, black)" strokeWidth="0.803498" />
//             <path d={svgPaths.pe9e2780} fill="var(--fill-0, #ECECEC)" id="Line 11" stroke="var(--stroke-0, black)" strokeWidth="0.803498" />
//             <path d={svgPaths.p265bc540} fill="var(--fill-0, #ECECEC)" id="Line 10" stroke="var(--stroke-0, black)" strokeWidth="0.803498" />
//           </g>
//         </svg>
//       </div>
//     </div>
//   );
// }

// function PosterMockup() {
//   return (
//     <div className="content-stretch flex h-[526px] items-end relative shrink-0 w-[1021px]" data-name="POSTER MOCKUP">
//       <div className="content-stretch flex gap-[77.136px] items-start relative shrink-0">
//         <Frame15 />
//         <div className="bg-[#d9d9d9] h-[307.74px] relative shrink-0 w-[198.464px]">
//           <div aria-hidden="true" className="absolute border-[0.803px] border-black border-solid inset-0 pointer-events-none" />
//         </div>
//         <Frame14 />
//       </div>
//     </div>
//   );
// }

function Frame21() {
  return (
    <div className="content-stretch flex h-[192px] items-end pt-[120px] relative shrink-0 w-full">
      <div className="font-['Xanh_Mono:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[26px] text-black whitespace-nowrap">
        <p className="leading-[normal] mb-0">Harvard-Radcliffe Orchestra</p>
        <p className="leading-[normal]">Graphic Design</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-start justify-end relative shrink-0 w-full">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[10px] text-black w-full">POSTERS, EXPERIMENTAL DESIGN, VISUAL IDENTITY</p>
    </div>
  );
}

function Center() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="center">
      <Frame21 />
      <Frame />
    </div>
  );
}

function Overview1() {
  return (
    <div className="content-stretch flex h-[332px] items-end relative shrink-0 w-full" data-name="overview">
      <p className="flex-[1_0_0] font-['Xanh_Mono:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[24px] text-black">Overview</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[10px] items-start justify-center justify-self-start relative row-1 self-start shrink-0">
      <p className="leading-[normal] relative shrink-0 text-[10px] uppercase">Timeline</p>
      <div className="leading-[0] relative shrink-0 text-[14px]">
        <p className="leading-[normal] mb-0">January 2024 –</p>
        <p className="leading-[normal]">December 2025</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[10px] items-start justify-center justify-self-start leading-[normal] relative row-1 self-start shrink-0">
      <p className="relative shrink-0 text-[10px] uppercase">Tools</p>
      <p className="relative shrink-0 text-[14px]">Adobe Illustrator</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[10px] items-start justify-center justify-self-start leading-[normal] relative row-1 self-start shrink-0">
      <p className="relative shrink-0 text-[10px] uppercase">team</p>
      <p className="relative shrink-0 text-[14px]">Rahul Prasad</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[10px] items-start justify-center justify-self-start leading-[normal] relative row-1 self-start shrink-0">
      <p className="relative shrink-0 text-[10px] uppercase">Role</p>
      <p className="relative shrink-0 text-[14px]">Graphic Designer</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light gap-x-[10px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] min-h-px min-w-px not-italic overflow-clip relative text-black whitespace-nowrap">
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-end overflow-clip relative shrink-0 w-full">
      <Frame6 />
    </div>
  );
}

function Overview() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col gap-[16px] h-[832px] items-start pb-[20px] relative shrink-0 w-full" data-name="overview">
      <Overview1 />
      <p className="font-['Inter:Light',sans-serif] font-light h-[132px] leading-[normal] not-italic relative shrink-0 text-[14px] text-black w-full">The Harvard-Radcliffe Orchestra is the oldest symphony orchestra in the United States, formed in 1808. The orchestra is fully student run, comprised of Harvard students and conducted by Maestro Federico Cortese. The orchestra performs in the historical Sanders Theatre and has also toured over eighteen countries. In addition to concerts, the orchestra initiates outreach programs for local schools and music programs for equitable arts access.</p>
      <Frame5 />
    </div>
  );
}

function Photo() {
  return (
    <div className="content-stretch flex flex-col h-[819px] items-start pt-[128px] relative shrink-0 w-full" data-name="photo">
      <div className="absolute h-[819px] left-[-416px] top-0 w-[1440px]" data-name="image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* <img alt="" className="absolute h-full left-[0.01%] max-w-none top-0 w-[99.98%]" src={imgImage1} /> */}
        </div>
      </div>
    </div>
  );
}

function Reserach() {
  return (
    <div className="content-stretch flex flex-col h-[332px] items-start justify-end relative shrink-0 w-full" data-name="reserach">
      <p className="font-['Xanh_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black w-full">1. The Problem</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px not-italic relative text-[14px] text-black">Historically, the Harvard-Radcliffe Orchestra has lacked a graphic design role and left the work of designing posters to the publicity chair, whose role is concerned more with logistics and organization of materials. In 2024, the student board decided to introduce the graphic design role, which I have filled since. As a result of the lack of a designated graphic designer, the old publication materials were uninteresting and lacked creativity.</p>
    </div>
  );
}

function ResearchSection() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[832px] items-start justify-center min-h-[832px] relative shrink-0 w-full" data-name="research section">
      <Reserach />
      <Frame22 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Xanh_Mono:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[24px] text-black">2. Case Study: 3.8.25 Concert</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <div className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-black whitespace-pre-wrap">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] mb-0">Research</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p className="leading-[normal] mb-0">{`Shostakovich's Symphony No. 11 is also titled The Year 1905.`}</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p className="leading-[normal] mb-0">This refers to the Russian Revolution of 1905, which is depicted with a storyline throughout the symphony.</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p className="leading-[normal]">It includes the events of Bloody Sunday on 22 January 1905 in the second movement of the symphony, with the climax of the movement representing the gunfire at the battle.</p>
      </div>
      <div className="h-[242px] relative rounded-[8px] shadow-[2px_2px_24px_0px_rgba(0,0,0,0.25)] shrink-0 w-[430px]" data-name="image 2">
        {/* <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage2} /> */}
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[430px]">
      <div className="aspect-[1024/576] relative rounded-[8px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="image 2">
        {/* <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage3} /> */}
      </div>
      <p className="font-['Inter:Light_Italic',sans-serif] font-light italic leading-[0] relative shrink-0 text-[0px] text-black text-center w-full">
        <span className="leading-[normal] text-[10px]">{`BOWLING, `}</span>
        <span className="font-['Inter:Light',sans-serif] leading-[normal] not-italic text-[10px]">ARTIST UNKNOWN. 1905.</span>
      </p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <div className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-black whitespace-pre-wrap">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] mb-0">Ideation</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p className="leading-[normal] mb-0">Postcard created in 1905.</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p className="leading-[normal]">I chose to center my poster around this piece due to its implication of the 1905 massacre and its color scheme and aesthetic.</p>
      </div>
      <Frame19 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full">
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function CaseStudySection() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="case study section">
      <Frame11 />
      <Frame18 />
    </div>
  );
}

function Photo1() {
  return (
    <div className="absolute bg-[#312f30] content-stretch flex flex-col h-[832px] items-center justify-center left-[-416px] top-[211px] w-[1440px]" data-name="photo">
      <div className="h-[502px] relative shrink-0 w-[716px]" data-name="image 3">
        {/* <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} /> */}
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col h-[1043px] items-start relative shrink-0 w-full">
      <Photo1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex h-[332px] items-end relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Xanh_Mono:Regular',sans-serif] h-[332px] leading-[normal] min-h-px min-w-px not-italic relative text-[24px] text-black">3. Reflections</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[16px] relative shrink-0 w-full">
      <div className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-black whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">{`For this project with the Shostakovich symphony, it was my first time incorporating a pre-existing artwork into my own poster as a basis for the aesthetic and color palette used. I'm happy with how the artwork interacts with the fonts and layering with the large "1905" text. If I were to workshop this piece further, I would find a more visibly accessible way to represent the logistical information (time, location, ticketing).`}</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p className="leading-[normal] mb-0">{`I continued to use the opportunity to craft publications for the Harvard-Radcliffe Orchestra to experiment with my own versatility with graphic design tools and to push my own creativity and imagination with each new set of music that is performed. At the same time, with each poster, I've found the tools that work the best for me and have slowly developed my style as a graphic designer in terms of workflow, patterns, and stylistic decisions. `}</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p className="leading-[normal]">{`I'm grateful to have the opportunity to work on graphic design within an organization that I love, and to be in an environment where my designs are seen by a large audience. As an artist, this is part of my mission: if my poster is the reason for even one person to see a symphony for the first time, then I would consider it a worthwhile effort and a success. `}</p>
      </div>
    </div>
  );
}

function ResearchSection1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="research section">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function ResearchSection2() {
  return (
    <div className="h-[223px] relative shrink-0 w-full" data-name="research section">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col items-start justify-end pb-[25px] pr-[74px] relative size-full">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="decoration-solid font-['Xanh_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black underline w-full hover:opacity-70 transition-opacity cursor-pointer bg-transparent border-0 p-0 text-left"
          >
            Return to top
          </button>
        </div>
      </div>
    </div>
  );
}

export default function HroPage() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[715px] z-[1]" data-name="body">
      {/* <PosterMockup /> */}
      <Center />
      <Overview />
      <Photo />
      <ResearchSection />
      <CaseStudySection />
      <Frame20 />
      <ResearchSection1 />
      <ResearchSection2 />
    </div>
  );
}
