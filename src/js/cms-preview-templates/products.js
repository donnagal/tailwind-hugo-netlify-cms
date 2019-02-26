import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
      image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return <div>



{/* Video Background */}
<section class="text-white p-8 bg-video">
    <div class="container mx-auto">
        <div class="flex-grow flex flex-col justify-center text-center">
          <div class="overlay opacity-50"></div>
          <iframe width="100%" height="100%" src='https://www.youtube.com/embed/{entry.getIn(["data", "hero", "id"])}' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>
         <div class="absolute pin z-10 flex-grow flex flex-col justify-center text-center">
              <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mx-auto lg:py-24"  data-aos="fade-right" data-aos-duration="2000">
                <h3 class="lg:text-9xl font-serif tracking-wide">{entry.getIn(["data", "hero", "heading"])}</h3>
            </div>
          </div>

        </div>
    </div>
  </section>

{/* 4 Up */}
<section class="py-32 bg-grey-lightest">
      <div className="container mx-auto">
        <div className="mx-auto text-center">
          <h2 className="block font-bold uppercase tracking-wide text-grey-dark text-sm leading-loose">{entry.getIn(["data", "intro", "heading"])}</h2>
          <p className="leading-tight text-lg font-thin text-center text-grey-darker">{entry.getIn(["data", "intro", "description"])}</p>

          <div className="flex flex-wrap">
            {(entry.getIn(["data", "intro", "blurbs"]) || []).map((blurb, index) => <div className="my-8 text-center sm:w-1/2 sm:px-4 lg:w-1/4" key={index}>
              <img src={blurb.get("image") && getAsset(blurb.get("image"))} alt="" className="" style={{width: "240px"}}/>
              <p className="pt-4 text-grey-darker text-sm leading-loose">{blurb.get("text")}</p>
            </div>)}
          </div>
        </div>
      </div>
      </section>

{/* products.html */}
    <section>
      <div className="container mx-auto">
        <div className="leading-normal pb-8 text-grey-darker">
          <h2 className="pt-32 pb-5 font-normal">{entry.getIn(["data", "main", "heading"])}</h2>
          <p>{entry.getIn(["data", "main", "description"])}</p>
        </div>
      </div>
      </section>


{/* image grid */}
<div className="container mx-auto px-2">
		<div className="flex flex-wrap -mx-2">
			<div className="p-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
      <img src={getAsset(entry.getIn(["data", "main", "image1", "image"]))}/>
			</div>
			<div className="p-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
      <img src={getAsset(entry.getIn(["data", "main", "image2", "image"]))}/>
			</div>
		  </div>
		  <div className="flex flex-wrap -mx-2">
				<div className="p-2 w-full">
        <img src={getAsset(entry.getIn(["data", "main", "image2", "image"]))}/>
				</div>
			</div>
	</div>


{/* BlockQuote */}
<section className="mt-20">
        <div className="container mx-auto">
          <article className="">
          {(entry.getIn(['data', 'testimonials']) || []).map((testimonial, index) => <div className="bg-grey-lightest p-16 mb-10" key={index}>
        	<blockquote className="leading-normal mt-4">
        		<article  className="text-2xl font-medium">
              “{testimonial.get('quote')}”
            </article >
            <footer className="mt-2 text-base font-medium text-grey-dark">
            - {testimonial.get('author')}
            </footer>
        	</blockquote>
        </div>)}
          </article>
        </div>
 </section>


{/* products.html */}
<img src={getAsset(entry.getIn(['data', 'full_image']))} alt="" className="w-2/1"/>


{/* table */}
<section class="p-8">
      <div className="">
      	<div className="">

      		<h2 className="leading-tight text-center text-black lg:py-8">{entry.getIn(['data', 'pricing', 'heading'])}</h2>
      		<p className="block uppercase tracking-wide text-grey-dark text-sm leading-loose">{entry.getIn(['data', 'pricing', 'description'])}</p>

      		<div className="container mx-auto md:flex md:flex-wrap md:justify-center">
            {(entry.getIn(['data', 'pricing', 'plans']) || []).map((plan, index) => <article className="my-8 text-center md:w-1/2 md:px-8 lg:w-1/3" key={index}>
             
             {/* table-column */}
              <div className="">

              	<h3 className="font-medium">
                <small className="block uppercase text-grey-dark tracking-wide text-xs">{plan.get('plan')}</small>
                    <span class="text-5xl">
                      <span class="text-3xl -mr-2">$</span>
                      <span class="mx-2">{plan.get('price')}</span>
                      <sub class="text-sm">/mo</sub>
                    </span>
                </h3>

-              	<p className="">{plan.get('description')}</p>

              	<ul className="list-reset text-left mt-4">
                  {(plan.get('items') || []).map((item, index) => <li className="border-t py-4" key={index}>
                    <p className={index + 1 !== plan.get('items').size ? "pb2 mb2 divider-grey" : null}>{item}</p>
                  </li>)}
              	</ul>
                <a href="#" className="block my-4 bg-purple rounded text-white no-underline px-6 py-4 hover:bg-purple-light">
                  Choose this plan
                </a>

              </div>

            </article>)}
      		</div>
      	</div>
      </div>
      </section>


    </div>;
  }
}


 