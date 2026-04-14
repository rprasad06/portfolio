import canoeImg from '../components/assets/about_canoe.jpg';
import orchestraImg from '../components/assets/about_orchestra.jpg';
import dragonBoatImg from '../components/assets/about_dragonboat.jpg';

export default function AboutPage() {
  return (
    <div className="relative flex min-h-px min-w-px flex-[1_0_0] flex-col">

      {/* ── Section 1: Hi, I'm Rahul! ─────────────────────────────────────── */}
      <div className="grid grid-cols-2 items-start">
        <div className="flex flex-col items-start">

        {/* Left: heading + bio */}
        <div
          className="flex h-[var(--unit)] pb-[16px] w-full shrink-0 items-end"
          data-name="1/2vh"
        >
          <div className="type-xanh-26 shrink-0 leading-[0]">
            <p className="mb-0 leading-[normal]">Hi, I'm Rahul!</p>
          </div>
      </div>
          <div className="type-inter-14 flex flex-col gap-3 leading-[1.5]">
            <p>And this is me on an outrigger canoe in the Fort Point Channel, Boston. →</p>
            <p>
              I'm a designer and software engineer who loves visual storytelling and
              creating experiences. Across projects I float between pure graphic design,
              embedded software engineering, and everything in between and even outside.
            </p>
            <p>
              Between finishing my undergraduate studies and pursuing music through
              orchestra and my band, I love the outdoors and devote three days of my
              week towards training with my dragon boat team, Ohana New England.
            </p>
        </div>
        </div>
        {/* Right: canoe photo — pill-top arch shape, flush to right edge */}
        <div className="flex justify-end overflow-hidden">
          <div className="h-[654px] w-full max-w-[491px] overflow-hidden rounded-tl-[322.5px] rounded-tr-[322.5px]">
            <img
              alt="Rahul in an outrigger canoe on Fort Point Channel, Boston"
              className="size-full object-cover"
              src={canoeImg}
            />
          </div>
        </div>
      </div>

      {/* ── Section 2: I love the bassoon. ────────────────────────────────── */}
      <div className="grid grid-cols-2 items-start">

        {/* Left: orchestra photo — asymmetric-top pill */}
        <div className="flex items-start pt-12">
          <div className="relative h-[423px] w-full max-w-[531px] overflow-hidden rounded-tl-[200px] rounded-tr-[400px]">
            <img
              alt="Rahul at the RISE Film Scoring Orchestra at Warner Bros. Studios"
              className="absolute h-[105.32%] max-w-none object-cover"
              style={{ width: '111.86%', left: '-11.86%', top: '-5.26%' }}
              src={orchestraImg}
            />
          </div>
        </div>

        {/* Right: heading + bassoon text */}
        <div className="flex flex-col justify-center py-16 pl-12 pr-4">
          <h2 className="type-xanh-32 mb-6">I love the bassoon.</h2>
          <div className="type-inter-14 flex flex-col gap-3 leading-[1.5]">
            <p>
              is what any bassoonist you meet might say, because we bassoonists tend
              to love our instruments more than ourselves.
            </p>
            <p>
              I'm a symphonic bassoonist wrapping up my fourth year with the
              Harvard-Radcliffe Orchestra under the baton of Maestro Federico Cortese.
              Previously, I played in the Boston Youth Symphony Orchestra.
            </p>
            <p>
              At the beginning of March, I flew to LA to participate in the RISE Film
              Scoring Orchestra, directed by the legendary conductor and studio
              bassoonist Anthony Parnther. The photo on the left was taken at Eastwood
              Scoring Stage at the Warner Bros. Studios.
            </p>
            <p>I'm dreaming of being a musician in the recording of the Zootopia 3 soundtrack!</p>
          </div>
        </div>
      </div>

      {/* ── Section 3: I spend a lot of time on boats ─────────────────────── */}
      <div className="grid grid-cols-2 items-start">

        {/* Left: heading + boats text */}
        <div className="flex flex-col justify-center py-16 pr-12">
          <h2 className="type-xanh-32 mb-6">I spend a lot of time on boats</h2>
          <div className="type-inter-14 flex flex-col gap-3 leading-[1.5]">
            <p>Dragon boats, specifically. And outrigger canoes sometimes.</p>
            <p>
              When I'm not playing my bassoon (or my piano or guitar — see the Band
              with No Name), I'm training with my dragon boat team. We're gearing up
              to compete in the Club Crew World Championship this August, and that
              means lots of hours of drills, training, gym, and eating. We eat a lot.
              It's part of the sport.
            </p>
          </div>
        </div>

        {/* Right: dragon boat photo — diagonal-corner shape */}
        <div className="flex justify-end pb-16 pt-8">
          <div className="h-[692px] w-full max-w-[415px] overflow-hidden rounded-bl-[200px] rounded-tr-[200px]">
            <img
              alt="Rahul with his dragon boat team"
              className="size-full object-cover"
              src={dragonBoatImg}
            />
          </div>
        </div>
      </div>

    </div>
  );
}
