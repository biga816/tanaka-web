import { JsonProperty } from '../utils/mapper-utils';

class Content {
  rendered: string = null;
}

class SizeDetail {
  height: number = null;
  width: number = null;
  @JsonProperty('source_url')
  sourceUrl: string = null;
}

class Sizes {
  @JsonProperty({ clazz: SizeDetail })
  full: SizeDetail = null;
  @JsonProperty({ clazz: SizeDetail })
  large: SizeDetail = null;
  @JsonProperty({ clazz: SizeDetail })
  medium: SizeDetail = null;
  @JsonProperty({ clazz: SizeDetail, name: 'medium_large' })
  mediumLarge: SizeDetail = null;
  @JsonProperty({ clazz: SizeDetail })
  thumbnail: SizeDetail = null;
}

class MediaDetails {
  height: number = null;
  width: number = null;

  @JsonProperty({ clazz: Sizes })
  sizes: Sizes = null;
}

class Media {
  @JsonProperty('media_type')
  mediaType: string = null;
  @JsonProperty('source_url')
  sourceUrl: string = null;

  @JsonProperty({ clazz: MediaDetails, name: 'media_details' })
  mediaDetails: MediaDetails = null;
}

class Tag{
  id: number = null;
  link: string = null;
  name: string = null;
  slug: string = null;
  taxonomy: string = null;
}

class Info {
  @JsonProperty({ clazz: Media, name: 'wp:featuredmedia' })
  media: Media[] = null;
  @JsonProperty({ clazz: Tag, name: 'wp:term' })
  team: Tag[] = null;
}

export class PostModel {
  id: number = null;
  date  : string = null;
  link: string = null;

  @JsonProperty({ clazz: Content })
  title: Content = null;
  @JsonProperty({ clazz: Content })
  content: Content = null;
  @JsonProperty({ clazz: Info, name: '_embedded' })
  info: Info = null;

}
