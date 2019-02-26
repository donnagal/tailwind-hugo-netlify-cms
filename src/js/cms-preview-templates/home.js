import React from "react";
import format from "date-fns/format";

import Jumbotron from "./components/jumbotron";

export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
        image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return <div>
        <Jumbotron image={image} title={entry.getIn(["data", "title"])} subtitle={entry.getIn(["data", "subtitle"])}/>

{/* Video */}
<section  className="my-20">
<div className="container mx-auto">
        <div className="flex-grow flex flex-col justify-center text-center">
          <div className="w-full sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 mx-auto text-center text-black lg:py-24">
              <h3 className="text-2xl font-medium">{entry.getIn(["data", "video", "heading"])}</h3>
              <p className="sm:mt-4 leading-loose pb-8">
              {entry.getIn(["data", "video", "text"])}
              </p>
              <img src={getAsset(entry.getIn(["data", "video", "image"]))}/>   
                           
          </div>
        </div>
    </div>
</section>


{/* Short Text */}
<div className="bg-grey-lightest mb-10">
  <div className="mx-auto container py-20">

        <div className="flex flex-wrap">
            <div className="lg:w-1/2">
              <h3 className="lg:text-5xl text-2xl lg:font-thin font-normal lg:pb-20">
              {entry.getIn(["data", "blurb", "heading"])}
              </h3>
          </div>
            <div className="lg:w-1/2">
              <p className="sm:mt-4 leading-normal pb-8 text-grey-darker">
                  {entry.getIn(["data", "blurb", "text"])}    
              </p>
            </div>
          </div>
    
    </div>
</div>




{/* 2-up */}
<div class="container mx-auto py-10">
    <div class="flex flex-wrap">
        <div class="w-full mb-10 leading-normal">
            <h2 class="lg:text-3xl font-thin pb-2">{entry.getIn(["data", "intro", "heading"])}</h2>
            <p class="text-grey-darker">{entry.getIn(["data", "intro", "text"])}</p>
        </div>
      </div> 

      <div class="flex flex-wrap -mx-2 my-2">
      {(entry.getIn(["data", "products"]) || []).map((product, i) => <div className="p-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/2" key={i}>
                <img src={getAsset(product.get("image"))} alt="" className="block"/>
                <p className="pt-4 text-grey-darker text-sm leading-loose">{product.get("text")}</p>
              </div>)}
        </div>

  </div>





<section class="bg-grey-lightest md:flex">
      <div className="md:w-1/2">
        <img src="/img/home-about-section.jpg" alt="" className="block"/>
       </div>
        <article class="p-8 max-w-sm md:flex md:flex-col md:justify-center lg:px-32 lg:max-w-md">
          <h2 class="leading-tight">
            <small class="block uppercase tracking-wide text-grey-dark text-sm leading-loose">Custom Dashboard</small>
            {entry.getIn(["data", "values", "heading"])}
          </h2>
          <p class="mt-2 leading-normal pb-8 text-grey-darker">
              {entry.getIn(["data", "values", "text"])}
            </p>
            <a href="{{.buttonLink}}" className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded no-underline">Read more</a>
        </article>
 </section>

    </div>
  }
}