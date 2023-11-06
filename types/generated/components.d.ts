import type { Schema, Attribute } from '@strapi/strapi';

export interface MediaImage extends Schema.Component {
  collectionName: 'components_media_images';
  info: {
    displayName: 'Image';
    icon: 'attachment';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.RichText;
    Image_File: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'media.image': MediaImage;
    }
  }
}
