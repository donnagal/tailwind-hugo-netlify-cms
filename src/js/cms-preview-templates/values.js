import React from "react";
import { List } from 'immutable';

import Jumbotron from "./components/jumbotron";

const MediaBlock = ({heading, text, imageUrl, reverse}) => {
  const imageContainerClassName = reverse
    ? " bg-grey-dark "
    : " bg-grey-darker";
  return <div className="w-full lg:w-1/2">
    <div className={imageContainerClassName}>
      <img src={imageUrl} alt="" className="block" />
    </div>
    <div className="p-10">
      <h3 className="text-2xl text-grey-light">{heading}</h3>
      <p>{text}</p>
    </div>
  </div>;
};

export default class ValuesPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
      image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }
    
    const entryValues = entry.getIn(["data", "values"]);
    const values = entryValues ? entryValues.toJS() : [];
    
    return <div>
      <Jumbotron image={image} title={entry.getIn(["data", "title"])} />
      <div className="mx-auto py-32">
        <div className="w-full lg:w-1/2 bg-grey-dark">
          <div className="leading-loose text-white">
              {values.map(({text, heading, imageUrl}, i) =>
                <MediaBlock key={i} 
                text={text} 
                heading={heading} 
                imageUrl={imageUrl} 
                reverse={i % 2 === 0} />
              )}
          </div>
        </div>
      </div>
    </div>;
  }
}
