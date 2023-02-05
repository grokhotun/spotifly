interface ArtistDTO {
  name: string;
}

export type CreateArtistDTO = Pick<ArtistDTO, 'name'>;
export type UpdateArtistDTO = Pick<ArtistDTO, 'name'>;
