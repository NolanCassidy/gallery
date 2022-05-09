import React from 'react';
import { Helmet } from 'react-helmet';
import { OpenseaAsset } from '../../types/OpenseaAsset';
import { getAssetTitle } from '../../utils';

import './perfundo-lightbox.css';

export interface LightboxProps {
  asset: OpenseaAsset;
  index: number;
  increaseLightboxIndex: () => void;
  decreaseLightboxIndex: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  asset,
  index,
  increaseLightboxIndex,
  decreaseLightboxIndex,
}) => {
  return (
    <div id={`lightbox-${index}`} className="perfundo__overlay">
      {/*
      <Helmet>
        <script src="movement.js" type="text/javascript" />
      </Helmet>
       <div id="wrapper">
        <div className="viewport">
          <div className="cube">
            <div className="side"> */}
      <figure
        className="perfundo__content perfundo__figure cube-image"
        onClick={(evt) => {
          // Prevents clicks on the image triggering `#lightbox-untarget`.
          evt.stopPropagation();
        }}
      >
        <img
          className="perfundo__image rotate"
          src={asset.image_url}
          loading="lazy"
        />
        <div className="rnftg-text-black nft-text">
          <div>{getAssetTitle(asset)}</div>
          <div>{asset.collection.name}</div>
        </div>
      </figure>
      {/* </div>
          </div>
        </div>
      </div> */}
      <a
        href="#lightbox-untarget"
        className="perfundo__close perfundo__control"
      >
        Close
      </a>
      <a
        className="perfundo__prev perfundo__control"
        onClick={(evt) => {
          evt.preventDefault();
          evt.stopPropagation();
          decreaseLightboxIndex();
        }}
        href={`#lightbox-${index - 1}`}
      >
        Prev
      </a>
      <a
        className="perfundo__next perfundo__control"
        onClick={(evt) => {
          evt.preventDefault();
          evt.stopPropagation();
          increaseLightboxIndex();
        }}
        href={`#lightbox-${index + 1}`}
      >
        Next
      </a>
    </div>
  );
};
