import React from "react";

export default class Jumbotron extends React.Component {
  render() {
    const {image, title, subtitle} = this.props;
    return <div class="flex flex-wrap">
      <div className="w-full bg-center cover" style={{
        backgroundImage: image && `url(${image})`
      }}>
        <div className="p-32 text-white">
          <div className="flex-grow flex flex-col justify-center text-center">
            <div className="">
              <h1 className="inline-block text-2xl">
                { title }
              </h1>
            </div>
            <div className="">
              {subtitle && <h1 className="text-5xl">{ subtitle }</h1>}
            </div>
            <footer class="sm:mt-4">
            <a href="#1" class="inline-block px-8 py-4 my-4 bg-purple rounded text-white no-underline tracking-wide
              font-medium hover:bg-purple-light">
              Scroll Button
            </a>
        </footer>
          </div>
        </div>
      </div>
    </div>;
  }
}
