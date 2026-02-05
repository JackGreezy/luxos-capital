export const teamMembersQuery = `*[_type == "teamMember"]
  | order(order asc, name asc){
    _id,
    name,
    title,
    bio,
    "imageUrl": image.asset->url
  }`;

export const dealsQuery = `*[_type == "deal"]
  | order(order asc, name asc){
    _id,
    status,
    name,
    "imageUrl": image.asset->url,
    details[]{
      label,
      value
    }
  }`;

export const resourcesQuery = `*[_type == "resourceCategory"]
  | order(order asc, category asc){
    _id,
    category,
    items[]{
      title,
      description
    }
  }`;
