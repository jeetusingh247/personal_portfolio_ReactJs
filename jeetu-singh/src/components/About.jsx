/*
* @copyright 2024 Jeetu Singh
* @license Apache-2.0
*/

const aboutItems = [
  {
    label: 'Project Done',
    number: 10
  },
  {
    label: 'Years Of Experience',
    number: 2
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Enter you welcome intro hereLorem ipsum dolor sit amet consectetur adipisicing elit. Rem, magnam a. Blanditiis repellendus ex perferendis. Dolorum voluptate velit sequi nobis dignissimos sapiente iste dicta neque ad commodi saepe magnam fuga tenetur aliquid, accusantium sed cum illum quam ipsa eveniet amet sint. Quas quia et hic perferendis consequuntur quaerat veniam modi.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({label, number}, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">
                      {number}
                    </span>
                    <span className="text-sky-400 font-semibold md:text-3xl">
                      +
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }

            <img src='/images/logo_white.svg' alt='Logo' width={30} height={30} className="ml-auto md:w-[50px] md:h-[50px]">
            </img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
